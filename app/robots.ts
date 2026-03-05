import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow all legitimate search engines
      {
        userAgent: ['Googlebot', 'Googlebot-Image', 'Bingbot', 'Slurp', 'DuckDuckBot', 'Baiduspider', 'Yandex'],
        allow: '/',
        disallow: ['/admin/', '/Mechadmin88dash/', '/api/'],
      },
      // Block all bots from sensitive paths — default catch-all
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/Mechadmin88dash/', '/api/'],
      },
    ],
    sitemap: 'https://mrmech.ca/sitemap.xml',
  }
}
