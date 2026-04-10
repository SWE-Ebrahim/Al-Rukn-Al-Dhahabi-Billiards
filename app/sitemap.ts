import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.alruknaldhahabi.com';
  const lastModified = new Date();
  
  return [
    { 
      url: `${base}/en`, 
      lastModified, 
      changeFrequency: 'weekly', 
      priority: 1.0 
    },
    { 
      url: `${base}/ar`, 
      lastModified, 
      changeFrequency: 'weekly', 
      priority: 1.0 
    },
  ];
}