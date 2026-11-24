import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

async function testPages() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

  // 1. Check detail page header
  const detailUrl = 'file:///' + path.join(rootDir, 'artikel', 'standar-ketebalan-ducting-bjls-smacna.html').replace(/\\/g, '/');
  console.log('Navigating to:', detailUrl);
  await page.goto(detailUrl, { waitUntil: 'load' });
  await page.waitForTimeout(500);

  // Take screenshot of header area
  await page.screenshot({ path: path.join(rootDir, 'scratch', 'test-header-detail.png'), clip: { x: 0, y: 0, width: 1280, height: 180 } });

  // Check if any img in page failed or has naturalWidth === 0
  const imageReport = await page.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll('img'));
    return imgs.map(img => ({
      src: img.src,
      alt: img.alt,
      naturalWidth: img.naturalWidth,
      displayed: img.offsetWidth > 0 && img.offsetHeight > 0,
      className: img.className
    }));
  });

  console.log('Image status in detail page:');
  const brokenImgs = imageReport.filter(img => img.naturalWidth === 0);
  console.log('Broken images count:', brokenImgs.length);
  if (brokenImgs.length > 0) {
    console.log('Broken images:', brokenImgs);
  }

  // Screenshot sidebar related articles
  const sidebar = await page.$('.article-sidebar-col');
  if (sidebar) {
    await sidebar.screenshot({ path: path.join(rootDir, 'scratch', 'test-sidebar-detail.png') });
  }

  // Check all 6 articles
  const articles = [
    'standar-ketebalan-ducting-bjls-smacna.html',
    'perbedaan-ducting-polyurethane-pu-dan-bjls.html',
    'cara-mencegah-kondensasi-pada-ducting-ac.html',
    'tips-perawatan-dan-cleaning-air-duct-gedung.html',
    'fungsi-dan-jenis-damper-pada-sistem-hvac.html',
    'panduan-memilih-flexible-duct-berinsulasi.html'
  ];

  for (const art of articles) {
    const artUrl = 'file:///' + path.join(rootDir, 'artikel', art).replace(/\\/g, '/');
    await page.goto(artUrl, { waitUntil: 'load' });
    await page.waitForTimeout(300);
    const broken = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img'));
      return imgs.filter(img => img.naturalWidth === 0).map(img => img.src);
    });
    console.log(`Article: ${art} -> Broken images: ${broken.length} ${broken.length ? JSON.stringify(broken) : 'OK'}`);
  }

  // Also check layanan.html
  const layananUrl = 'file:///' + path.join(rootDir, 'layanan.html').replace(/\\/g, '/');
  await page.goto(layananUrl, { waitUntil: 'load' });
  await page.waitForTimeout(400);
  const faqSection = await page.$('#faq');
  if (faqSection) {
    await faqSection.screenshot({ path: path.join(rootDir, 'scratch', 'test-layanan-faq.png') });
  }

  await browser.close();
  console.log('Verification done!');
}

testPages().catch(err => {
  console.error(err);
  process.exit(1);
});
