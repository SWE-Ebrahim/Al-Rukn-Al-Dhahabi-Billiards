import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const SUPPORTED_LOCALES = ['en', 'ar'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files and special paths
  const isStaticFile = /\.(pdf|png|jpg|jpeg|ico|svg|webp)$/i.test(pathname);
  const isSpecialPath = ['/robots.txt', '/sitemap.xml', '/site.webmanifest'].some(
    (path) => pathname === path
  );
  const isNextPath = pathname.startsWith('/_next');
  
  if (isStaticFile || isSpecialPath || isNextPath) {
    return NextResponse.next();
  }

  // Check if pathname already has a locale
  const pathnameHasLocale = SUPPORTED_LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Get locale from cookie or Accept-Language header
  let locale = request.cookies.get('locale')?.value;
  
  if (!locale) {
    const acceptLanguage = request.headers.get('accept-language');
    if (acceptLanguage && acceptLanguage.includes('ar')) {
      locale = 'ar';
    } else {
      locale = 'en';
    }
  }

  // Redirect to locale-specific path
  const newPathname = `/${locale}${pathname}`;
  const url = request.nextUrl.clone();
  url.pathname = newPathname;
  
  // Set the locale cookie on the response to ensure consistency
  const response = NextResponse.redirect(url);
  response.cookies.set('locale', locale, {
    path: '/',
    maxAge: 31536000,
    sameSite: 'lax',
  });
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};