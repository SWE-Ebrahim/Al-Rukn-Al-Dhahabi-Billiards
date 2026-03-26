import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://alruknaldhahabi.com';
  const lastModified = new Date();
  
  return [
    { 
      url: `${base}/`, 
      lastModified, 
      changeFrequency: 'daily', 
      priority: 1.0 
    },
    { 
      url: `${base}/en`, 
      lastModified, 
      changeFrequency: 'weekly', 
      priority: 0.9 
    },
    { 
      url: `${base}/ar`, 
      lastModified, 
      changeFrequency: 'weekly', 
      priority: 0.9 
    },
  ];
}