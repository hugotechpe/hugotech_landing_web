const fs = require('fs');
const path = require('path');

function collectKeys(obj, prefix = '') {
  const keys = [];
  if (typeof obj !== 'object' || obj === null) return keys;
  for (const k of Object.keys(obj)) {
    const val = obj[k];
    const full = prefix ? `${prefix}.${k}` : k;
    if (typeof val === 'string') {
      keys.push(full);
    } else if (Array.isArray(val)) {
      // if array of strings (like intro paragraphs), still consider key present
      keys.push(full);
    } else if (typeof val === 'object' && val !== null) {
      // dive
      const child = collectKeys(val, full);
      if (child.length === 0) {
        // empty object => still include
        keys.push(full);
      } else {
        keys.push(...child);
      }
    }
  }
  return keys;
}

function loadJson(p) {
  const raw = fs.readFileSync(p, 'utf8');
  try {
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to parse', p, e.message);
    process.exit(1);
  }
}

const esPath = path.join(__dirname, '..', 'messages', 'es', 'common.json');
const enPath = path.join(__dirname, '..', 'messages', 'en', 'common.json');

const es = loadJson(esPath);
const en = loadJson(enPath);

const esKeys = collectKeys(es).sort();
const enKeys = collectKeys(en).sort();

const enSet = new Set(enKeys);
const esSet = new Set(esKeys);

const missingInEn = esKeys.filter(k => !enSet.has(k));
const missingInEs = enKeys.filter(k => !esSet.has(k));

const report = {
  esCount: esKeys.length,
  enCount: enKeys.length,
  missingInEn: missingInEn,
  missingInEs: missingInEs,
};

const outPath = path.join(__dirname, 'translation-compare-report.json');
fs.writeFileSync(outPath, JSON.stringify(report, null, 2));

console.log('Report written to', outPath);
console.log('ES keys:', esKeys.length, 'EN keys:', enKeys.length);
console.log('Missing in EN:', missingInEn.length);
console.log('Missing in ES:', missingInEs.length);
if (missingInEn.length > 0) console.log('First missing in EN example:', missingInEn[0]);
if (missingInEs.length > 0) console.log('First missing in ES example:', missingInEs[0]);

process.exit(0);
