import { PrismaClient } from '@prisma/client';
import { log } from 'console';
import { readdir, rename, writeFile } from 'fs/promises';
import { join } from 'path';

async function renameFiles() {
  const filesPath = join(__dirname, '/uploads/importedLeads');
  const files = await readdir(filesPath);
  for (const file of files) {
    await rename(join(filesPath, file), join(filesPath, file.toLowerCase()));
  }
}

async function getBrandsWithoutLogos() {
  const prisma = new PrismaClient();

  const brands = await prisma.brand.findMany({
    where: {
      OR: [
        {
          logo: 'default',
        },
        {
          logo: '',
        },
        {
          logo: undefined,
        },
      ],
    },
  });

  return brands.map((brand) => {
    return {
      id: brand.id,
      name: brand.name,
      logo: brand.logo,
    };
  });
}

(async () => {
  await renameFiles();
  /*
  const brands = await getBrandsWithoutLogos();
  await writeFile(
    join(__dirname, 'missing_logos.json'),
    JSON.stringify(brands, null, 2),
  );*/
  log('DONE');
})();
