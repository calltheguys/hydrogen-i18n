const localeJSONs = import.meta.glob('../../../public/locales/**/*.json');

let locales = {};

export async function api(request, {}) {
  const lng = new URL(request.normalizedUrl).searchParams.get('lng') ?? 0;

  if (locales?.[lng]) return locales[lng];

  for (const path in localeJSONs) {
    const lang = path.split('/translation.json')[0].split('/').pop();
    locales[lang] = await localeJSONs[path]();
  }

  return locales[lng];
}
