import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'ar'];

export function middleware(request: NextRequest) {
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
  
  // Get locale from cookie or default to English
  const preferredLocale = request.cookies.get('locale')?.value || 'en';
  
  // Only redirect if not already on a locale path
  return NextResponse.redirect(
    new URL(`/${preferredLocale}${normalizedPath}`, request.url)
  );
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