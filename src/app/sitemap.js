// Dynamic Sitemap for BELAL HOSSAIN SUNNY
// This will automatically generate sitemap.xml for better SEO

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://BelalHossainSunny.com';

  // Static pages - সব main pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/website`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/software`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // TODO: Dynamic pages - Websites, Software থেকে fetch করতে হবে
  // যখন API ready হবে তখন এগুলো uncomment করবেন:

  /*
  try {
    // Fetch all websites
    const websitesRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/websites`);
    const websites = await websitesRes.json();
    
    const websitePages = websites.data?.map((website) => ({
      url: `${baseUrl}/website/${website._id}`,
      lastModified: new Date(website.updatedAt),
      changeFrequency: 'weekly',
      priority: 0.8,
    })) || [];
 
    // Fetch all software
    const softwareRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/software`);
    const software = await softwareRes.json();
    
    const softwarePages = software.data?.map((item) => ({
      url: `${baseUrl}/software/${item._id}`,
      lastModified: new Date(item.updatedAt),
      changeFrequency: 'weekly',
      priority: 0.8,
    })) || [];
 
    return [...staticPages, ...websitePages, ...softwarePages];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return staticPages;
  }
  */

  return staticPages;
}
