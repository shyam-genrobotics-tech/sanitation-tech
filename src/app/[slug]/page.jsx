// app/[slug]/page.jsx

import { notFound } from "next/navigation";

const pages = ["about-us", "contacts-page", "careers-page"];

export async function generateStaticParams() {
  return pages.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  if (!slug || !pages.includes(slug)) return;
  const page = await getPage(slug);
  return {
    title: page?.seoTitle || page?.title,
    description: page?.seoDescription || "",
  };
}

async function getPage(slug) {
  let url = `https://shopadmin.vgrex.com/promotions/test-api/${slug}`;
  const res = await fetch(url);

  console.log("response", url);

  if (!res.ok) return null;
  return res.json();
}

export default async function Page(context) {
  const { params } = await context;
  const { slug } = params;

  if (!pages.includes(slug)) return notFound();

  const page = await getPage(slug);

  if (!page || page.data.slug === params) return notFound();

  const data = page?.data ?? null;

  return (
    <main className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
    </main>
  );
}
