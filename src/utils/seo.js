export function createMetadata({ title, description, keywords, url, image }) {
  return {
    title,
    description,
    keywords,
    metadataBase: new URL(url),
    robots: "index, follow",
    openGraph: {
      type: "website",
      url,
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };
}
