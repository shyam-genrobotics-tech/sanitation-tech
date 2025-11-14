"use client"
import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const BASE_URL = process.env.NEXT_PUBLIC_PYJAMAHR_API_BASEURL;
const TOKEN = process.env.NEXT_PUBLIC_PYJAMAHR_API_TOKEN;

// Helper function to format job type
const formatJobType = (jobType) => {
  if (!jobType) return "Full Time";
  return jobType
    .split("_")
    .map((word) => word.charAt(0) + word.slice(1).toLowerCase())
    .join(" ");
};

// Helper function to format salary
const formatSalary = (minSalary, maxSalary, salaryType) => {
  if (!minSalary && !maxSalary) return null;
  const type = salaryType === "MONTHLY" ? "/month" : salaryType === "YEARLY" ? "/year" : "";
  if (minSalary && maxSalary) {
    return `₹${minSalary.toLocaleString()} - ₹${maxSalary.toLocaleString()}${type}`;
  }
  if (minSalary) {
    return `₹${minSalary.toLocaleString()}+${type}`;
  }
  if (maxSalary) {
    return `Up to ₹${maxSalary.toLocaleString()}${type}`;
  }
  return null;
};

function Openings() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [previousPageUrl, setPreviousPageUrl] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null);

  const extractPageNumber = (url) => {
    if (!url) return null;
    const match = url.match(/[?&]page=(\d+)/);
    return match ? parseInt(match[1]) : null;
  };

  // Filter function to match Operations and Maintenance department
  const filterByDepartment = (jobList) => {
    if (!jobList || !Array.isArray(jobList)) return [];
    
    return jobList.filter((job) => {
      if (!job.department_name) return false;
      const department = job.department_name.toLowerCase().trim();
      // Match variations: "operations and maintenance", "operations & maintenance", etc.
      return (
        department.includes("operations") && 
        (department.includes("maintenance") || department.includes("maint"))
      );
    });
  };

  const fetchJobs = async (url = null, isNext = false, isPrevious = false) => {
    setLoading(true);
    setError(null);
    try {
      // Department to filter by
      const departmentFilter = "Operations and Maintenance";
      const encodedDepartment = encodeURIComponent(departmentFilter);
      
      // Build URL with department filter
      let fetchUrl = url;
      if (!fetchUrl) {
        // Try to filter on API side first
        const baseUrl = `${BASE_URL}/jobs/`;
        // Try filtering by department_name - API may or may not support this
        fetchUrl = `${baseUrl}?department_name=${encodedDepartment}`;
      } else {
        // If URL is provided (for pagination), try to preserve/add the filter
        // Check if filter is already in URL
        if (!fetchUrl.includes("department_name")) {
          const separator = fetchUrl.includes("?") ? "&" : "?";
          fetchUrl = `${fetchUrl}${separator}department_name=${encodedDepartment}`;
        }
      }

      let res = await fetch(fetchUrl, {
        headers: {
          Authorization: `Token ${TOKEN}`,
        },
      });

      // Track if we're using API filtering or client-side filtering only
      let usingApiFilter = fetchUrl.includes("department_name");
      
      // If API doesn't support department filter and returns error, try without filter
      if (!res.ok && usingApiFilter && !url) {
        // Fallback: try without department filter and filter client-side
        const baseUrl = `${BASE_URL}/jobs/`;
        fetchUrl = baseUrl;
        usingApiFilter = false;
        res = await fetch(baseUrl, {
          headers: {
            Authorization: `Token ${TOKEN}`,
          },
        });
      }

      if (!res.ok) {
        throw new Error(`Failed to fetch jobs: ${res.status}`);
      }

      const data = await res.json();
      
      // Handle both array response and paginated response
      if (Array.isArray(data)) {
        // Filter client-side as fallback
        const filteredJobs = filterByDepartment(data);
        setJobs(filteredJobs);
        setNextPageUrl(null);
        setPreviousPageUrl(null);
        setCurrentPage(1);
        setTotalPages(1);
      } else {
        // Filter results client-side (always filter to ensure we only show Operations and Maintenance)
        const filteredResults = filterByDepartment(data.results || []);
        setJobs(filteredResults);
        
        // Update pagination URLs to include department filter (only if API supports it)
        let nextUrl = data.next;
        let prevUrl = data.previous;
        
        // Only add filter to pagination URLs if we're using API-side filtering
        // (Check if current fetchUrl had the filter, or if pagination URLs already have it)
        const shouldAddFilter = usingApiFilter || (url && url.includes("department_name"));
        
        if (shouldAddFilter) {
          if (nextUrl && !nextUrl.includes("department_name")) {
            const separator = nextUrl.includes("?") ? "&" : "?";
            nextUrl = `${nextUrl}${separator}department_name=${encodedDepartment}`;
          }
          if (prevUrl && !prevUrl.includes("department_name")) {
            const separator = prevUrl.includes("?") ? "&" : "?";
            prevUrl = `${prevUrl}${separator}department_name=${encodedDepartment}`;
          }
        }
        
        setNextPageUrl(nextUrl);
        setPreviousPageUrl(prevUrl);
        
        // Calculate total pages and current page
        if (data.count && data.results) {
          const perPage = data.results.length || 10;
          const calculatedPages = Math.ceil(data.count / perPage);
          setTotalPages(calculatedPages);
          
          // Determine current page
          if (isNext && data.previous) {
            // If we went to next page, extract from previous URL and add 1
            const prevPage = extractPageNumber(data.previous);
            setCurrentPage(prevPage ? prevPage + 1 : 2);
          } else if (isPrevious && data.next) {
            // If we went to previous page, extract from next URL and subtract 1
            const nextPage = extractPageNumber(data.next);
            setCurrentPage(nextPage ? nextPage - 1 : 1);
          } else if (!url || url.includes(`${BASE_URL}/jobs/?`) || url === `${BASE_URL}/jobs/`) {
            // First page
            setCurrentPage(1);
          } else {
            // Try to extract from current URL
            const pageFromUrl = extractPageNumber(fetchUrl);
            setCurrentPage(pageFromUrl || 1);
          }
        } else {
          setTotalPages(1);
          // Try to determine page from URLs
          if (data.previous) {
            const prevPage = extractPageNumber(data.previous);
            setCurrentPage(prevPage ? prevPage + 1 : 2);
          } else if (data.next) {
            setCurrentPage(1);
          } else {
            setCurrentPage(1);
          }
        }
      }
    } catch (err) {
      console.error("❌ Failed to fetch jobs:", err);
      setError("Failed to load jobs. Please try again later.");
      setJobs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNextPage = () => {
    if (nextPageUrl) {
      fetchJobs(nextPageUrl, true, false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePreviousPage = () => {
    if (previousPageUrl) {
      fetchJobs(previousPageUrl, false, true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="openings_sec" id="positions">
      <div className="container">
        <h1>Current Openings</h1>
        <p>Find your place in our team. Let's build the future together.</p>
        <br />
        
        {loading && (
          <div className="text-center py-5">
            <p>Loading jobs...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-5">
            <p className="text-danger">{error}</p>
          </div>
        )}

        {!loading && !error && jobs && jobs.length === 0 && (
          <div className="text-center py-5">
            <p>No job openings available at the moment.</p>
          </div>
        )}

        {!loading && !error && jobs && jobs.length > 0 && (
          <>
            <div className="row">
              {jobs.map((job, idx7) => {
                const salary = formatSalary(job.min_salary, job.max_salary, job.salary_type);
                const jobDescription = job.description || "";
                
                return (
                  <div className="col-lg-6 col-md-6 col-sm-12 mt-4" key={job.id || idx7}>
                    <div className="card careers_card">
                      <div className="card_header">
                        <h3>{job.title || "Job Title"}</h3>
                        <a
                          href={job.apply_link || job.link || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="arrow_icon"
                        >
                          <FaArrowUpRightFromSquare />
                        </a>
                      </div>
                      <p className="job_type">
                        {formatJobType(job.job_type)}
                        {salary && ` • ${salary}`}
                      </p>
                      <hr />
                      {jobDescription ? (
                        <div 
                          className="description"
                          dangerouslySetInnerHTML={{ __html: jobDescription }}
                        />
                      ) : (
                        <p className="description">No description available.</p>
                      )}
                      <p className="location">
                        <FaMapMarkerAlt className="icon" />
                        {job.location || "Location not specified"}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination */}
            {(nextPageUrl || previousPageUrl) && (
              <div className="pagination_wrapper">
                <div className="pagination_controls">
                  <button
                    onClick={handlePreviousPage}
                    disabled={!previousPageUrl}
                    className="pagination_btn"
                    aria-label="Previous page"
                  >
                    <FaChevronLeft /> Previous
                  </button>
                  
                  <div className="pagination_info">
                    Page {currentPage} {totalPages > 1 && `of ${totalPages}`}
                  </div>
                  
                  <button
                    onClick={handleNextPage}
                    disabled={!nextPageUrl}
                    className="pagination_btn"
                    aria-label="Next page"
                  >
                    Next <FaChevronRight />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default Openings;
