import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title = "Yash Car Workshop - Professional Automotive Services",
  description = "Expert car service, AC repair, denting & painting, and automotive maintenance. 20+ years experience. Quality service you can trust.",
  keywords = "car service, automotive repair, car workshop, AC service, denting painting, car maintenance, auto repair",
  canonical,
  ogImage = "/jeep-hero.webp",
  ogType = "website"
}) => {
  const baseUrl = "https://yashcar.netlify.app";
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;
  const fullOgImage = `${baseUrl}${ogImage}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content="Yash Car Workshop" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullCanonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullOgImage} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Yash Car Workshop" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoRepair",
          "name": "Yash Car Workshop",
          "description": description,
          "url": baseUrl,
          "telephone": "+91-9414609368",
          "email": "rammalviya5@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
          },
          "openingHours": "Mo-Sa 09:00-18:00",
          "priceRange": "$$",
          "serviceArea": {
            "@type": "City",
            "name": "Local Area"
          },
          "areaServed": "Local Area",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Automotive Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Car Service & Maintenance"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "AC Service & Repair"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Denting & Painting"
                }
              }
            ]
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;
