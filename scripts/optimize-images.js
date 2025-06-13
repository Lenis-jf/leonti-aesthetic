// scripts/optimize-images.js
import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const exts = ['.jpg', '.jpeg', '.png'];

async function processDir(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await processDir(fullPath);
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (!exts.includes(ext)) continue;

      const outPath = fullPath.replace(ext, '.webp');

      try {
        if (ext === '.png') {
          // Convierte PNG a WebP lossless (sin pérdida)
          await sharp(fullPath)
            .webp({ lossless: true })
            .toFile(outPath);
        } else {
          // Convierte JPG/JPEG a WebP con pérdida leve (quality 85)
          await sharp(fullPath)
            .webp({ quality: 85, effort: 4 })
            .toFile(outPath);
        }
        console.log(`✅ Converted ${fullPath} → ${outPath}`);
      } catch (err) {
        console.error(`❌ Error converting ${fullPath}:`, err);
      }
    }
  }
}

async function main() {
  const root = process.cwd();
  await Promise.all([
    processDir(path.join(root, 'fotos-to-compress')),
  ]);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
