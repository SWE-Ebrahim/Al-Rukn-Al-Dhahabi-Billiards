import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'ar'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Skip static files and special paths
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }
  
  // Check if pathname already has a locale
  const hasLocale = locales.some(locale => 
    pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  if (hasLocale) {
    return NextResponse.next();
  }
  
  // Get locale from cookie or Accept-Language header
  const locale = request.cookies.get('locale')?.value || 'en';
  
  // Redirect root to locale-prefixed path
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
}

export const config = {
  matcher: [
    '/((?!_next|api|.*\\..*|_next/static|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};