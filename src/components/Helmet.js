import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHelmet = ({ title, description, keywords }) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta id="meta_og_title" property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="keywords" content={keywords}/>
    </Helmet>
  )
}

export default SEOHelmet;
