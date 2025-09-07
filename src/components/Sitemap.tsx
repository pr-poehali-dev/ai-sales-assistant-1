import { useEffect } from 'react';

const Sitemap = () => {
  useEffect(() => {
    const generateSitemap = () => {
      const baseUrl = window.location.origin;
      const currentDate = new Date().toISOString();
      
      const urls = [
        {
          loc: `${baseUrl}/`,
          lastmod: currentDate,
          changefreq: 'weekly',
          priority: '1.0'
        }
      ];

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

      // Устанавливаем правильный Content-Type
      const response = new Response(sitemap, {
        headers: {
          'Content-Type': 'application/xml; charset=utf-8',
        },
      });

      // Создаем blob URL для скачивания
      const blob = new Blob([sitemap], { type: 'application/xml' });
      const url = URL.createObjectURL(blob);
      
      // Автоматически отправляем XML контент
      document.body.innerHTML = `<pre style="font-family: monospace; white-space: pre-wrap; margin: 20px;">${sitemap.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>`;
      
      // Устанавливаем заголовок документа
      document.title = 'Sitemap XML';
    };

    generateSitemap();
  }, []);

  return null;
};

export default Sitemap;