import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'ar'];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Normalize pathname (remove trailing slashes except for root)
  const normalizedPath = pathname.endsWith('/') && pathname !== '/' 
    ? pathname.slice(0, -1) 
    : pathname;
  
  // Skip static files, API routes, and file extensions
  if (
    normalizedPath.startsWith('/_next') ||
    normalizedPath.startsWith('/api') ||
    /\.[^/]+$/.test(normalizedPath)
  ) {
    return NextResponse.next();
  }
  
  // Check if pathname already has a locale prefix
  const pathnameHasLocale = locales.some(locale => 
    normalizedPath === `/${locale}` || normalizedPath.startsWith(`/${locale}/`)
  );
  
  // If already has locale, allow it through without redirect
  if (pathnameHasLocale) {
    return NextResponse.next();
  }
  
  // Get locale: check cookie first, then Accept-Language header, then default to 'en'
  const savedLocale = request.cookies.get('NEXT_LOCALE')?.value
    || request.cookies.get('locale')?.value;

  let preferredLocale = 'en';
  if (savedLocale && locales.includes(savedLocale)) {
    preferredLocale = savedLocale;
  } else {
    // Parse browser Accept-Language header for first-time visitors
    const acceptLang = request.headers.get('accept-language') ?? '';
    const browserLang = acceptLang
      .split(',')
      .map(l => l.split(';')[0].trim().toLowerCase().slice(0, 2))
      .find(l => locales.includes(l));
    if (browserLang) preferredLocale = browserLang;
  }

  // Redirect and persist locale choice in cookie
  const redirectUrl = new URL(`/${preferredLocale}${normalizedPath}`, request.url);
  const response = NextResponse.redirect(redirectUrl);
  response.cookies.set('NEXT_LOCALE', preferredLocale, {
    maxAge: 60 * 60 * 24 * 365,
    path: '/',
    sameSite: 'lax',
  });
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all pathnames except:
     * - _next directory (Next.js internal files)
     * - api directory (API routes)
     * - files with extensions (images, favicon, etc.)
     * - sitemap.xml and robots.txt
     */
    '/((?!_next|api|.*\\..*|_next/static|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
