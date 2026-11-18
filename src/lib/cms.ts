import { HomePageData, AboutPageData, WorksPageData, ServicesPageData, SiteSettingsData, ContactPageData, MediaItem } from '@/types/cms';

const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3000';

export function getCmsBaseUrl(): string {
  return CMS_URL.replace(/\/$/, '');
}

/**
 * Resolves a MediaItem or relative URL to a fully qualified URL for images.
 */
export function getMediaUrl(media?: MediaItem | string | null): string | null {
  if (!media) return null;
  if (typeof media === 'string') {
    if (media.startsWith('http://') || media.startsWith('https://') || media.startsWith('/')) {
      return media;
    }
    return `${getCmsBaseUrl()}/${media}`;
  }
  if (media.url) {
    if (media.url.startsWith('http://') || media.url.startsWith('https://')) {
      return media.url;
    }
    return `${getCmsBaseUrl()}${media.url.startsWith('/') ? '' : '/'}${media.url}`;
  }
  return null;
}

/**
 * Fetches homepage data from Payload CMS.
 * Returns null if the CMS is unreachable or an error occurs, allowing components to use static fallbacks.
 */
export async function getHomePageData(): Promise<HomePageData | null> {
  try {
    const res = await fetch(`${getCmsBaseUrl()}/api/globals/homepage?depth=2`, {
      next: { revalidate: 10 },
      headers: {
        'Accept': 'application/json',
      },
      signal: AbortSignal.timeout(4000), // 4 second safety timeout
    });

    if (!res.ok) {
      console.warn(`[CMS] Failed to fetch homepage data: ${res.status} ${res.statusText}`);
      return null;
    }

    const data = await res.json();
    return data as HomePageData;
  } catch (error) {
    console.warn('[CMS] Could not connect to CMS endpoint, using default content fallbacks:', (error as Error).message);
    return null;
  }
}

/**
 * Fetches about page data from Payload CMS.
 * Returns null if the CMS is unreachable or an error occurs, allowing components to use static fallbacks.
 */
export async function getAboutPageData(): Promise<AboutPageData | null> {
  try {
    const res = await fetch(`${getCmsBaseUrl()}/api/globals/aboutpage?depth=2`, {
      next: { revalidate: 10 },
      headers: {
        'Accept': 'application/json',
      },
      signal: AbortSignal.timeout(4000), // 4 second safety timeout
    });

    if (!res.ok) {
      console.warn(`[CMS] Failed to fetch about page data: ${res.status} ${res.statusText}`);
      return null;
    }

    const data = await res.json();
    return data as AboutPageData;
  } catch (error) {
    console.warn('[CMS] Could not connect to CMS endpoint, using default content fallbacks:', (error as Error).message);
    return null;
  }
}

/**
 * Fetches works page data from Payload CMS.
 * Returns null if the CMS is unreachable or an error occurs, allowing components to use static fallbacks.
 */
export async function getWorksPageData(): Promise<WorksPageData | null> {
  try {
    const res = await fetch(`${getCmsBaseUrl()}/api/globals/workspage?depth=2`, {
      next: { revalidate: 10 },
      headers: {
        'Accept': 'application/json',
      },
      signal: AbortSignal.timeout(4000), // 4 second safety timeout
    });

    if (!res.ok) {
      console.warn(`[CMS] Failed to fetch works page data: ${res.status} ${res.statusText}`);
      return null;
    }

    const data = await res.json();
    return data as WorksPageData;
  } catch (error) {
    console.warn('[CMS] Could not connect to CMS endpoint, using default content fallbacks:', (error as Error).message);
    return null;
  }
}

/**
 * Fetches services page data from Payload CMS.
 * Returns null if the CMS is unreachable or an error occurs, allowing components to use static fallbacks.
 */
export async function getServicesPageData(): Promise<ServicesPageData | null> {
  try {
    const res = await fetch(`${getCmsBaseUrl()}/api/globals/servicespage?depth=2`, {
      next: { revalidate: 10 },
      headers: {
        'Accept': 'application/json',
      },
      signal: AbortSignal.timeout(4000), // 4 second safety timeout
    });

    if (!res.ok) {
      console.warn(`[CMS] Failed to fetch services page data: ${res.status} ${res.statusText}`);
      return null;
    }

    const data = await res.json();
    return data as ServicesPageData;
  } catch (error) {
    console.warn('[CMS] Could not connect to CMS endpoint, using default content fallbacks:', (error as Error).message);
    return null;
  }
}

/**
 * Fetches global site settings (company info, contact details, social links) from Payload CMS.
 * Returns null if unreachable, allowing components to use static fallbacks.
 */
export async function getSiteSettings(): Promise<SiteSettingsData | null> {
  try {
    const res = await fetch(`${getCmsBaseUrl()}/api/globals/site-settings?depth=1`, {
      next: { revalidate: 10 },
      headers: {
        'Accept': 'application/json',
      },
      signal: AbortSignal.timeout(4000), // 4 second safety timeout
    });

    if (!res.ok) {
      console.warn(`[CMS] Failed to fetch site settings: ${res.status} ${res.statusText}`);
      return null;
    }

    const data = await res.json();
    return data as SiteSettingsData;
  } catch (error) {
    console.warn('[CMS] Could not connect to CMS endpoint, using default site settings:', (error as Error).message);
    return null;
  }
}

/**
 * Fetches contact page data (hero, intro, form settings) from Payload CMS.
 * Returns null if unreachable, allowing components to use static fallbacks.
 */
export async function getContactPageData(): Promise<ContactPageData | null> {
  try {
    const res = await fetch(`${getCmsBaseUrl()}/api/globals/contactpage?depth=1`, {
      next: { revalidate: 10 },
      headers: {
        'Accept': 'application/json',
      },
      signal: AbortSignal.timeout(4000), // 4 second safety timeout
    });

    if (!res.ok) {
      console.warn(`[CMS] Failed to fetch contact page data: ${res.status} ${res.statusText}`);
      return null;
    }

    const data = await res.json();
    return data as ContactPageData;
  } catch (error) {
    console.warn('[CMS] Could not connect to CMS endpoint, using default contact page data:', (error as Error).message);
    return null;
  }
}
