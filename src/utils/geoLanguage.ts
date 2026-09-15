import { Language } from '../data/content';

export const SUPPORTED_LANGUAGES: Language[] = [
  'ko',
  'en',
  'zh',
  'ja',
  'ru',
  'de',
  'fr',
  'hi',
  'es',
  'ar',
];

const COUNTRY_TO_LANG: Record<string, Language> = {
  // Korea
  KR: 'ko',

  // Japan
  JP: 'ja',

  // Greater China
  CN: 'zh',
  TW: 'zh',
  HK: 'zh',
  MO: 'zh',

  // Russian-speaking
  RU: 'ru',
  BY: 'ru',
  KZ: 'ru',
  KG: 'ru',
  TJ: 'ru',
  UZ: 'ru',

  // German-speaking
  DE: 'de',
  AT: 'de',
  CH: 'de',
  LI: 'de',

  // French-speaking
  FR: 'fr',
  BE: 'fr',
  MC: 'fr',
  LU: 'fr',

  // India
  IN: 'hi',

  // Spanish-speaking
  ES: 'es',
  MX: 'es',
  AR: 'es',
  CO: 'es',
  CL: 'es',
  PE: 'es',
  VE: 'es',
  EC: 'es',
  GT: 'es',
  CU: 'es',
  BO: 'es',
  DO: 'es',
  HN: 'es',
  PY: 'es',
  SV: 'es',
  NI: 'es',
  CR: 'es',
  PR: 'es',
  PA: 'es',
  UY: 'es',
  GQ: 'es',

  // Arabic-speaking
  SA: 'ar',
  AE: 'ar',
  EG: 'ar',
  QA: 'ar',
  KW: 'ar',
  BH: 'ar',
  OM: 'ar',
  JO: 'ar',
  LB: 'ar',
  IQ: 'ar',
  MA: 'ar',
  TN: 'ar',
  DZ: 'ar',
  LY: 'ar',
  YE: 'ar',
  SD: 'ar',
  SY: 'ar',
  PS: 'ar',

  // English-speaking
  US: 'en',
  GB: 'en',
  CA: 'en',
  AU: 'en',
  NZ: 'en',
  IE: 'en',
  SG: 'en',
  ZA: 'en',
  PH: 'en',
};

/**
 * Detect language from regional Timezone
 */
export function getLanguageFromTimezone(): Language | null {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (!tz) return null;

    // Korea
    if (tz === 'Asia/Seoul' || tz === 'ROK') return 'ko';

    // Japan
    if (tz === 'Asia/Tokyo') return 'ja';

    // China / Taiwan / HK / Macau
    if (
      [
        'Asia/Shanghai',
        'Asia/Chongqing',
        'Asia/Harbin',
        'Asia/Urumqi',
        'Asia/Taipei',
        'Asia/Hong_Kong',
        'Asia/Macau',
      ].includes(tz)
    ) {
      return 'zh';
    }

    // Russian-speaking regions
    if (
      tz.startsWith('Europe/Moscow') ||
      tz.startsWith('Europe/Samara') ||
      tz.startsWith('Europe/Volgograd') ||
      tz.startsWith('Asia/Yekaterinburg') ||
      tz.startsWith('Asia/Novosibirsk') ||
      tz.startsWith('Asia/Krasnoyarsk') ||
      tz.startsWith('Asia/Irkutsk') ||
      tz.startsWith('Asia/Yakutsk') ||
      tz.startsWith('Asia/Vladivostok') ||
      tz.startsWith('Asia/Magadan') ||
      tz.startsWith('Asia/Kamchatka') ||
      tz.startsWith('Asia/Almaty') ||
      tz.startsWith('Europe/Minsk')
    ) {
      return 'ru';
    }

    // German-speaking
    if (['Europe/Berlin', 'Europe/Vienna', 'Europe/Zurich'].includes(tz)) {
      return 'de';
    }

    // French-speaking
    if (['Europe/Paris', 'Europe/Brussels', 'Europe/Monaco'].includes(tz)) {
      return 'fr';
    }

    // India
    if (['Asia/Kolkata', 'Asia/Calcutta'].includes(tz)) {
      return 'hi';
    }

    // Spanish-speaking
    if (
      [
        'Europe/Madrid',
        'America/Mexico_City',
        'America/Bogota',
        'America/Buenos_Aires',
        'America/Santiago',
        'America/Lima',
        'America/Caracas',
        'America/Montevideo',
      ].includes(tz)
    ) {
      return 'es';
    }

    // Arabic-speaking
    if (
      [
        'Asia/Riyadh',
        'Asia/Dubai',
        'Africa/Cairo',
        'Asia/Qatar',
        'Asia/Kuwait',
        'Asia/Bahrain',
        'Asia/Muscat',
        'Asia/Amman',
        'Asia/Beirut',
        'Asia/Baghdad',
        'Africa/Casablanca',
        'Africa/Tunis',
        'Africa/Algiers',
      ].includes(tz)
    ) {
      return 'ar';
    }

    // English-dominant regions
    if (
      tz.startsWith('America/New_York') ||
      tz.startsWith('America/Chicago') ||
      tz.startsWith('America/Los_Angeles') ||
      tz.startsWith('America/Denver') ||
      tz.startsWith('America/Phoenix') ||
      tz.startsWith('Europe/London') ||
      tz.startsWith('Australia/') ||
      tz.startsWith('Pacific/Auckland') ||
      tz.startsWith('Canada/')
    ) {
      return 'en';
    }
  } catch {
    // Ignore timezone error
  }
  return null;
}

/**
 * Detect language from browser preferences (navigator.languages / navigator.language)
 */
export function getLanguageFromBrowser(): Language | null {
  try {
    if (typeof navigator === 'undefined') return null;

    const rawLangs =
      navigator.languages && navigator.languages.length
        ? navigator.languages
        : [navigator.language || ''];

    for (const raw of rawLangs) {
      if (!raw) continue;
      const lower = raw.toLowerCase().trim();
      const prefix = lower.split('-')[0];

      if (prefix === 'ko') return 'ko';
      if (prefix === 'ja') return 'ja';
      if (prefix === 'zh') return 'zh';
      if (prefix === 'ru') return 'ru';
      if (prefix === 'de') return 'de';
      if (prefix === 'fr') return 'fr';
      if (prefix === 'hi') return 'hi';
      if (prefix === 'es') return 'es';
      if (prefix === 'ar') return 'ar';
      if (prefix === 'en') return 'en';
    }

    // If browser language is configured to an unsupported language (e.g., pt, it, th, vi, etc.),
    // return 'en' (English) as requested: "사용언어가 일치하지 않는다면 영어"
    if (rawLangs.length > 0 && rawLangs[0]) {
      return 'en';
    }
  } catch {
    // Ignore
  }
  return null;
}

/**
 * Async IP-based geolocation check using fast country lookup endpoint
 */
export async function detectLanguageFromGeoIP(): Promise<Language | null> {
  try {
    if (typeof fetch === 'undefined') return null;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500); // 2.5s timeout

    const response = await fetch('https://api.country.is', {
      signal: controller.signal,
      headers: { Accept: 'application/json' },
    });
    clearTimeout(timeoutId);

    if (!response.ok) return null;
    const data = await response.json();
    const countryCode = (data?.country || '').toUpperCase();

    if (countryCode && COUNTRY_TO_LANG[countryCode]) {
      return COUNTRY_TO_LANG[countryCode];
    } else if (countryCode) {
      // Detected country is not in supported languages -> Default to English
      return 'en';
    }
  } catch {
    // Silently ignore network or timeout errors
  }
  return null;
}

/**
 * Main function to determine initial language synchronously on page load
 */
export function getInitialLanguage(): Language {
  // 1. Manual user override stored in localStorage
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = localStorage.getItem('realquant_user_lang') as Language | null;
      if (saved && SUPPORTED_LANGUAGES.includes(saved)) {
        return saved;
      }
    }
  } catch {
    // Ignore storage errors
  }

  // 2. Check browser language
  const browserLang = getLanguageFromBrowser();
  if (browserLang) {
    return browserLang;
  }

  // 3. Check timezone
  const tzLang = getLanguageFromTimezone();
  if (tzLang) {
    return tzLang;
  }

  // 4. Default to English if no match
  return 'en';
}

/**
 * Save manual user selection
 */
export function saveUserLanguagePreference(lang: Language): void {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('realquant_user_lang', lang);
    }
  } catch {
    // Ignore storage errors
  }
}
