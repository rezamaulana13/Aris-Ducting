import fs from 'fs';
import path from 'path';

const files = fs.readdirSync('artikel').filter(f => f.endsWith('.html'));

console.log('=== CHECKING ALL ARTIKEL HTML FILES ===');
for (const f of files) {
  const filePath = path.join('artikel', f);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Check header
  const headerMatch = content.match(/<header[\s\S]*?<\/header>/);
  const hasHeaderContainer = headerMatch ? headerMatch[0].includes('header-container') : false;
  const hasJustifyContentEnd = headerMatch ? headerMatch[0].includes('justify-content-end') : false;
  
  // Check TOC shortcut links
  const hasTocShortcuts = content.includes('toc-ext-links') || content.includes('📦 Produk:');
  
  // Check images
  const featuredImg = content.match(/<figure class="article-featured-figure">[\s\S]*?<img[^>]*src="([^"]*)"/);
  const secondaryImg = content.match(/<figure class="article-secondary-figure[^"]*">[\s\S]*?<img[^>]*src="([^"]*)"/);
  
  // Check related articles images
  const relatedImgMatches = [...content.matchAll(/<div class="d-flex align-items-center gap-3">[\s\S]*?<img[^>]*src="([^"]*)"/g)].map(m => m[1]);
  
  // Check Baca Juga
  const bacaJugaMatches = content.match(/<aside class="article-baca-juga"/g);
  const bacaJugaCount = bacaJugaMatches ? bacaJugaMatches.length : 0;
  
  // Verify images exist on disk
  const allImages = [];
  if (featuredImg) allImages.push(featuredImg[1]);
  if (secondaryImg) allImages.push(secondaryImg[1]);
  allImages.push(...relatedImgMatches);
  
  const missingImages = [];
  for (const img of allImages) {
    const resolvedPath = path.resolve('artikel', img);
    if (!fs.existsSync(resolvedPath)) {
      missingImages.push(img);
    }
  }

  console.log(`\nFile: ${f}`);
  console.log(`  Header Container: ${hasHeaderContainer}, justify-content-end: ${hasJustifyContentEnd}`);
  console.log(`  TOC Shortcuts present: ${hasTocShortcuts}`);
  console.log(`  Featured Image: ${featuredImg ? featuredImg[1] : 'NONE'}`);
  console.log(`  Secondary Image: ${secondaryImg ? secondaryImg[1] : 'NONE'}`);
  console.log(`  Related Images count: ${relatedImgMatches.length}, items: ${relatedImgMatches.join(', ')}`);
  console.log(`  Missing Images: ${missingImages.length > 0 ? missingImages.join(', ') : 'NONE (all exist)'}`);
  console.log(`  Baca Juga count: ${bacaJugaCount}`);
}
