/**
 * RealQuant Unified Marketing Attribution & Multi-Pixel Tracking Engine
 * Tracks traffic sources from: Meta (FB/IG), TikTok, KakaoTalk, YouTube, Google, Naver, Telegram, etc.
 * Supports: Meta Pixel, TikTok Pixel, Kakao Pixel, Google Analytics/Tag, Naver Log
 */

export type TrafficChannel = 
  | 'meta' 
  | 'tiktok' 
  | 'kakaotalk' 
  | 'youtube' 
  | 'google' 
  | 'naver' 
  | 'telegram' 
  | 'direct' 
  | 'other';

export interface AttributionData {
  id: string;
  channel: TrafficChannel;
  channelName: string;
  source: string;
  medium: string;
  campaign: string;
  content: string;
  term: string;
  referrer: string;
  landingPage: string;
  timestamp: string;
  converted: boolean;
  conversionAction?: string;
  conversionTimestamp?: string;
}

export interface PixelConfig {
  metaPixelId: string;
  tiktokPixelId: string;
  kakaoPixelId: string;
  googleTagId: string;
  naverPixelId: string;
}

const PIXEL_CONFIG_STORAGE_KEY = 'realquant_pixel_config';
const ATTRIBUTION_SESSION_KEY = 'realquant_current_attribution';
const VISIT_LOGS_STORAGE_KEY = 'realquant_visit_logs';

export const CHANNEL_METADATA: Record<TrafficChannel, { name: string; color: string; bg: string }> = {
  meta: { name: 'Meta (Instagram / Facebook)', color: '#1877F2', bg: 'rgba(24, 119, 242, 0.15)' },
  tiktok: { name: 'TikTok', color: '#FE2C55', bg: 'rgba(254, 44, 85, 0.15)' },
  kakaotalk: { name: 'KakaoTalk', color: '#FEE500', bg: 'rgba(254, 229, 0, 0.15)' },
  youtube: { name: 'YouTube', color: '#FF0000', bg: 'rgba(255, 0, 0, 0.15)' },
  google: { name: 'Google Ads / Search', color: '#4285F4', bg: 'rgba(66, 133, 244, 0.15)' },
  naver: { name: 'Naver Search / GFA', color: '#03C75A', bg: 'rgba(3, 199, 90, 0.15)' },
  telegram: { name: 'Telegram', color: '#229ED9', bg: 'rgba(34, 158, 217, 0.15)' },
  direct: { name: 'Direct / Bookmark', color: '#A1A1AA', bg: 'rgba(161, 161, 170, 0.15)' },
  other: { name: 'Other Referral', color: '#8B5CF6', bg: 'rgba(139, 92, 246, 0.15)' },
};

/**
 * Get current configured Pixel IDs from LocalStorage or Environment Variables
 */
export function getPixelConfig(): PixelConfig {
  let stored: Partial<PixelConfig> = {};
  try {
    const raw = localStorage.getItem(PIXEL_CONFIG_STORAGE_KEY);
    if (raw) stored = JSON.parse(raw);
  } catch {
    // fallback
  }

  const env = (import.meta as any).env || {};
  return {
    metaPixelId: stored.metaPixelId || (env.VITE_META_PIXEL_ID as string) || '',
    tiktokPixelId: stored.tiktokPixelId || (env.VITE_TIKTOK_PIXEL_ID as string) || '',
    kakaoPixelId: stored.kakaoPixelId || (env.VITE_KAKAO_PIXEL_ID as string) || '',
    googleTagId: stored.googleTagId || (env.VITE_GOOGLE_TAG_ID as string) || '',
    naverPixelId: stored.naverPixelId || (env.VITE_NAVER_PIXEL_ID as string) || '',
  };
}

/**
 * Save updated Pixel IDs into LocalStorage
 */
export function savePixelConfig(config: PixelConfig) {
  try {
    localStorage.setItem(PIXEL_CONFIG_STORAGE_KEY, JSON.stringify(config));
    // Reinitialize pixels with new IDs
    initializePixels(config);
  } catch (e) {
    console.error('Failed to save pixel config:', e);
  }
}

/**
 * Parse incoming request parameters and referrer to detect traffic channel
 */
export function detectTrafficSource(): AttributionData {
  if (typeof window === 'undefined') {
    return {
      id: 'server',
      channel: 'direct',
      channelName: CHANNEL_METADATA.direct.name,
      source: 'direct',
      medium: 'none',
      campaign: 'none',
      content: '',
      term: '',
      referrer: '',
      landingPage: '',
      timestamp: new Date().toISOString(),
      converted: false,
    };
  }

  // Check if attribution already cached in this browser session
  const cached = sessionStorage.getItem(ATTRIBUTION_SESSION_KEY);
  if (cached) {
    try {
      return JSON.parse(cached);
    } catch {
      // parse error, continue detection
    }
  }

  const url = new URL(window.location.href);
  const params = url.searchParams;

  const utmSource = (params.get('utm_source') || '').toLowerCase();
  const utmMedium = (params.get('utm_medium') || '').toLowerCase();
  const utmCampaign = params.get('utm_campaign') || '';
  const utmContent = params.get('utm_content') || '';
  const utmTerm = params.get('utm_term') || '';

  const fbclid = params.get('fbclid');
  const ttclid = params.get('ttclid');
  const gclid = params.get('gclid') || params.get('gad_source');
  const nclid = params.get('nclid') || params.get('n_ad') || params.get('n_keyword');
  const referrer = (document.referrer || '').toLowerCase();

  let channel: TrafficChannel = 'direct';

  // 1. URL parameter click IDs (Most accurate)
  if (fbclid || utmSource.includes('facebook') || utmSource.includes('instagram') || utmSource.includes('meta')) {
    channel = 'meta';
  } else if (ttclid || utmSource.includes('tiktok')) {
    channel = 'tiktok';
  } else if (utmSource.includes('kakao') || params.get('kakao') !== null) {
    channel = 'kakaotalk';
  } else if (utmSource.includes('youtube')) {
    channel = 'youtube';
  } else if (gclid || utmSource.includes('google') || utmSource.includes('adwords')) {
    channel = 'google';
  } else if (nclid || utmSource.includes('naver')) {
    channel = 'naver';
  } else if (utmSource.includes('telegram') || utmSource.includes('tg')) {
    channel = 'telegram';
  }
  // 2. Referrer detection if not specified in UTM
  else if (referrer) {
    if (referrer.includes('facebook.com') || referrer.includes('instagram.com') || referrer.includes('fb.me')) {
      channel = 'meta';
    } else if (referrer.includes('tiktok.com')) {
      channel = 'tiktok';
    } else if (referrer.includes('kakao.com') || referrer.includes('kakaocorp.com') || referrer.includes('talk.kakao.com')) {
      channel = 'kakaotalk';
    } else if (referrer.includes('youtube.com') || referrer.includes('youtu.be')) {
      channel = 'youtube';
    } else if (referrer.includes('google.')) {
      channel = 'google';
    } else if (referrer.includes('naver.com')) {
      channel = 'naver';
    } else if (referrer.includes('t.me') || referrer.includes('telegram.org')) {
      channel = 'telegram';
    } else {
      channel = 'other';
    }
  }

  const attribution: AttributionData = {
    id: `visit_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    channel,
    channelName: CHANNEL_METADATA[channel].name,
    source: utmSource || channel,
    medium: utmMedium || (channel === 'direct' ? 'direct' : 'referral'),
    campaign: utmCampaign || 'none',
    content: utmContent,
    term: utmTerm,
    referrer: document.referrer || 'direct',
    landingPage: window.location.href,
    timestamp: new Date().toISOString(),
    converted: false,
  };

  // Cache in session
  try {
    sessionStorage.setItem(ATTRIBUTION_SESSION_KEY, JSON.stringify(attribution));
    recordVisitLog(attribution);
  } catch {
    // Ignore storage quota
  }

  return attribution;
}

/**
 * Record a visit log in LocalStorage for admin analytics
 */
function recordVisitLog(item: AttributionData) {
  try {
    const raw = localStorage.getItem(VISIT_LOGS_STORAGE_KEY);
    const logs: AttributionData[] = raw ? JSON.parse(raw) : [];
    // Keep last 150 records
    const updated = [item, ...logs.filter(l => l.id !== item.id)].slice(0, 150);
    localStorage.setItem(VISIT_LOGS_STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to record visit log:', e);
  }
}

/**
 * Get all stored visit logs
 */
export function getVisitLogs(): AttributionData[] {
  try {
    const raw = localStorage.getItem(VISIT_LOGS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/**
 * Clear stored visit logs
 */
export function clearVisitLogs() {
  localStorage.removeItem(VISIT_LOGS_STORAGE_KEY);
}

/**
 * Calculate channel statistics (visits, conversions, conversion rate)
 */
export function getInflowStats() {
  const logs = getVisitLogs();
  const counts: Record<TrafficChannel, { visits: number; conversions: number; cr: number }> = {
    meta: { visits: 0, conversions: 0, cr: 0 },
    tiktok: { visits: 0, conversions: 0, cr: 0 },
    kakaotalk: { visits: 0, conversions: 0, cr: 0 },
    youtube: { visits: 0, conversions: 0, cr: 0 },
    google: { visits: 0, conversions: 0, cr: 0 },
    naver: { visits: 0, conversions: 0, cr: 0 },
    telegram: { visits: 0, conversions: 0, cr: 0 },
    direct: { visits: 0, conversions: 0, cr: 0 },
    other: { visits: 0, conversions: 0, cr: 0 },
  };

  let totalVisits = 0;
  let totalConversions = 0;

  logs.forEach(log => {
    const ch = counts[log.channel] ? log.channel : 'other';
    counts[ch].visits += 1;
    totalVisits += 1;
    if (log.converted) {
      counts[ch].conversions += 1;
      totalConversions += 1;
    }
  });

  // Calculate Conversion Rate
  (Object.keys(counts) as TrafficChannel[]).forEach(ch => {
    const item = counts[ch];
    item.cr = item.visits > 0 ? Number(((item.conversions / item.visits) * 100).toFixed(1)) : 0;
  });

  const totalCr = totalVisits > 0 ? Number(((totalConversions / totalVisits) * 100).toFixed(1)) : 0;

  return {
    channelStats: counts,
    totalVisits,
    totalConversions,
    totalCr,
  };
}

/**
 * Inject SDK scripts dynamically and initialize configured pixels
 */
export function initializePixels(customConfig?: PixelConfig) {
  if (typeof window === 'undefined') return;

  const config = customConfig || getPixelConfig();
  const attribution = detectTrafficSource();

  // 1. Meta Pixel
  if (config.metaPixelId && !(window as any)._fbq_initialized) {
    try {
      /* eslint-disable */
      (function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
        if (f.fbq) return;
        n = f.fbq = function() {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
      /* eslint-enable */

      (window as any).fbq('init', config.metaPixelId);
      (window as any).fbq('track', 'PageView', {
        traffic_channel: attribution.channel,
        utm_source: attribution.source,
        utm_campaign: attribution.campaign,
      });
      (window as any)._fbq_initialized = true;
      console.log(`[RealQuant Tracker] Meta Pixel initialized (${config.metaPixelId})`);
    } catch (e) {
      console.error('Meta Pixel init failed:', e);
    }
  }

  // 2. TikTok Pixel
  if (config.tiktokPixelId && !(window as any)._ttq_initialized) {
    try {
      /* eslint-disable */
      (function(w: any, d: any, t: any) {
        w.TiktokAnalyticsObject = t;
        var ttq = w[t] = w[t] || [];
        ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"];
        ttq.setAndDefer = function(t: any, e: any) {
          t[e] = function() {
            t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
          };
        };
        for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
        ttq.instance = function(t: any) {
          for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++) ttq.setAndDefer(e, ttq.methods[n]);
          return e;
        };
        ttq.load = function(e: any, n: any) {
          var i = "https://analytics.tiktok.com/i18n/pixel/events.js";
          ttq._i = ttq._i || {};
          ttq._i[e] = [];
          ttq._i[e]._u = i;
          ttq._t = ttq._t || {};
          ttq._t[e] = +new Date;
          ttq._o = ttq._o || {};
          ttq._o[e] = n || {};
          var o = document.createElement("script");
          o.type = "text/javascript";
          o.async = !0;
          o.src = i + "?sdkid=" + e + "&lib=" + t;
          var a = document.getElementsByTagName("script")[0];
          a.parentNode?.insertBefore(o, a);
        };
      })(window, document, 'ttq');
      /* eslint-enable */

      (window as any).ttq.load(config.tiktokPixelId);
      (window as any).ttq.page();
      (window as any)._ttq_initialized = true;
      console.log(`[RealQuant Tracker] TikTok Pixel initialized (${config.tiktokPixelId})`);
    } catch (e) {
      console.error('TikTok Pixel init failed:', e);
    }
  }

  // 3. Kakao Pixel
  if (config.kakaoPixelId && !(window as any)._kakao_initialized) {
    try {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = '//t1.daumcdn.net/kas/static/ba.min.js';
      script.onload = () => {
        try {
          if (typeof (window as any).kakaoPixel === 'function') {
            (window as any).kakaoPixel(config.kakaoPixelId).pageView();
            console.log(`[RealQuant Tracker] Kakao Pixel PageView tracked (${config.kakaoPixelId})`);
          }
        } catch {
          // ignore
        }
      };
      document.head.appendChild(script);
      (window as any)._kakao_initialized = true;
    } catch (e) {
      console.error('Kakao Pixel init failed:', e);
    }
  }

  // 4. Google Tag (GA4 / Google Ads)
  if (config.googleTagId && !(window as any)._gtag_initialized) {
    try {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${config.googleTagId}`;
      document.head.appendChild(script);

      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: any[]) {
        (window as any).dataLayer.push(args);
      }
      (window as any).gtag = gtag;
      gtag('js', new Date());
      gtag('config', config.googleTagId, {
        traffic_channel: attribution.channel,
        traffic_source: attribution.source,
        campaign_name: attribution.campaign,
      });
      (window as any)._gtag_initialized = true;
      console.log(`[RealQuant Tracker] Google Tag initialized (${config.googleTagId})`);
    } catch (e) {
      console.error('Google Tag init failed:', e);
    }
  }

  // 5. Naver Common Inflow Script (wcs)
  if (config.naverPixelId && !(window as any)._naver_initialized) {
    try {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = '//wcs.naver.net/wcslog.js';
      script.onload = () => {
        try {
          if ((window as any).wcs) {
            (window as any).wcs_add = (window as any).wcs_add || {};
            (window as any).wcs_add['wa'] = config.naverPixelId;
            (window as any).wcs.inflow('realquant.top');
            (window as any).wcs_do();
            console.log(`[RealQuant Tracker] Naver wcs tracked (${config.naverPixelId})`);
          }
        } catch {
          // ignore
        }
      };
      document.head.appendChild(script);
      (window as any)._naver_initialized = true;
    } catch (e) {
      console.error('Naver Log init failed:', e);
    }
  }

  console.log(`[RealQuant Attribution] User arrived from: ${attribution.channelName} (${attribution.channel})`);
}

/**
 * Track conversion / lead event across all active pixels
 * Triggered when user clicks "Join Community" (Telegram) or "1:1 Chat"
 */
export function trackLead(actionName: string = 'Telegram_Join_Click', metadata: Record<string, any> = {}) {
  const attribution = detectTrafficSource();
  const config = getPixelConfig();

  // Mark conversion in current attribution session and logs
  attribution.converted = true;
  attribution.conversionAction = actionName;
  attribution.conversionTimestamp = new Date().toISOString();

  try {
    sessionStorage.setItem(ATTRIBUTION_SESSION_KEY, JSON.stringify(attribution));

    const raw = localStorage.getItem(VISIT_LOGS_STORAGE_KEY);
    if (raw) {
      const logs: AttributionData[] = JSON.parse(raw);
      const idx = logs.findIndex(l => l.id === attribution.id);
      if (idx !== -1) {
        logs[idx].converted = true;
        logs[idx].conversionAction = actionName;
        logs[idx].conversionTimestamp = attribution.conversionTimestamp;
        localStorage.setItem(VISIT_LOGS_STORAGE_KEY, JSON.stringify(logs));
      }
    }
  } catch {
    // ignore
  }

  // 1. Meta Pixel Lead
  if (typeof (window as any).fbq === 'function') {
    try {
      (window as any).fbq('track', 'Lead', {
        content_name: actionName,
        traffic_channel: attribution.channel,
        ...metadata,
      });
      // Custom event for exact routing
      (window as any).fbq('trackCustom', 'CommunityClick', {
        action: actionName,
        channel: attribution.channel,
      });
    } catch (e) {
      console.warn('Meta Lead error:', e);
    }
  }

  // 2. TikTok Pixel CompleteRegistration / Contact
  if ((window as any).ttq && typeof (window as any).ttq.track === 'function') {
    try {
      (window as any).ttq.track('CompleteRegistration', {
        content_name: actionName,
        channel: attribution.channel,
      });
    } catch (e) {
      console.warn('TikTok Lead error:', e);
    }
  }

  // 3. Kakao Pixel Participation
  if (typeof (window as any).kakaoPixel === 'function' && config.kakaoPixelId) {
    try {
      (window as any).kakaoPixel(config.kakaoPixelId).participation(actionName);
    } catch (e) {
      console.warn('Kakao Lead error:', e);
    }
  }

  // 4. Google Tag Event (generate_lead)
  if (typeof (window as any).gtag === 'function') {
    try {
      (window as any).gtag('event', 'generate_lead', {
        event_category: 'engagement',
        event_label: actionName,
        traffic_channel: attribution.channel,
        ...metadata,
      });
    } catch (e) {
      console.warn('Google Lead error:', e);
    }
  }

  // 5. Naver Conversion Event
  if ((window as any).wcs && typeof (window as any).wcs.trans === 'function' && config.naverPixelId) {
    try {
      const _nasa = {};
      (window as any).wcs.trans(_nasa);
    } catch (e) {
      console.warn('Naver conversion error:', e);
    }
  }

  console.log(`[RealQuant Tracker] Conversion Tracked: "${actionName}" from channel: ${attribution.channelName}`);
}

/**
 * Simulate inbound traffic for testing attribution channels
 */
export function simulateTrafficChannel(channel: TrafficChannel) {
  const params: Record<TrafficChannel, string> = {
    meta: '?utm_source=meta&utm_medium=cpc&utm_campaign=spring_brand_boost&fbclid=sample_fbclid_123',
    tiktok: '?utm_source=tiktok&utm_medium=video_ad&utm_campaign=algo_growth&ttclid=sample_ttclid_456',
    kakaotalk: '?utm_source=kakaotalk&utm_medium=channel_msg&utm_campaign=quant_weekly',
    youtube: '?utm_source=youtube&utm_medium=video_description&utm_campaign=backtest_review',
    google: '?utm_source=google&utm_medium=cpc&utm_campaign=brand_search&gclid=sample_gclid_789',
    naver: '?utm_source=naver&utm_medium=sa&utm_campaign=powerlink&n_keyword=퀀트투자',
    telegram: '?utm_source=telegram&utm_medium=channel_forward&utm_campaign=realquant_main',
    direct: '',
    other: '?utm_source=newsletter&utm_medium=email',
  };

  sessionStorage.removeItem(ATTRIBUTION_SESSION_KEY);
  const targetUrl = window.location.pathname + params[channel];
  window.history.pushState({}, '', targetUrl);
  
  // Re-detect and log
  const newAttr = detectTrafficSource();
  initializePixels();
  return newAttr;
}
