import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "Amidost Global - Women's Health & Metabolic Wellness",
  description = "Trusted by 1M+ subscribers. Expert guidance on women's health, metabolic wellness, pregnancy, and gynecology from consultant obstetrician and gynaecologist.",
  keywords = "women's health, metabolic health, obstetrics, gynecology, pregnancy, PCOS, Friendly Health, Nigerian healthcare, women's wellness",
  image = "https://amidost.com/og-image.jpg",
  url = "https://amidost.com",
  type = "website"
}) => {
  const fullTitle = title.includes('Amidost') ? title : `${title} | Amidost Global`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Amidost Global Ventures" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Amidost Global Ventures Ltd" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
