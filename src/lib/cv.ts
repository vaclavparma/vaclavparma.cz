import fs from 'node:fs';
import path from 'node:path';

export type CvLang = 'en' | 'cs';

export function getLatestCvUrl(lang: CvLang): string {
  const dir = path.resolve(`./public/cv/${lang}`);
  const pdf = fs
    .readdirSync(dir)
    .filter((f) => f.toLowerCase().endsWith('.pdf'))
    .sort()
    .at(-1);

  if (!pdf) {
    throw new Error(`No CV PDF found in public/cv/${lang}`);
  }

  return `/cv/${lang}/${pdf}`;
}
