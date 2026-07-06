import React from "react";
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.acuitygroups.in";
const DEFAULT_IMAGE = `${SITE_URL}/logo512.png`;

export default function SEO({
  title = "Integrated Facility Management Services in Bangalore | Acuity Groups",
  description = "Acuity Groups provides integrated facility management services in Bangalore including housekeeping, security services, pest management, manpower outsourcing, and repair maintenance for commercial and industrial clients.",
  keywords = "integrated facility management services in Bangalore, facility management company in Bangalore, housekeeping services Bangalore, security services Bangalore, manpower outsourcing Bangalore, pest management Bangalore",
  canonical = "/",
  image = DEFAULT_IMAGE,
  schema = null,
}) {
  const canonicalUrl = canonical.startsWith("http")
    ? canonical
    : `${SITE_URL}${canonical}`;

  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Acuity Groups" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}