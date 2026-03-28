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

// Deleted:import { NextRequest, NextResponse } from 'next/server';
// Deleted:
// Deleted:const locales = ['en', 'ar'];
// Deleted:
// Deleted:export function middleware(request: NextRequest) {
// Deleted:  const { pathname } = request.nextUrl;
// Deleted:  
// Deleted:  // Skip static files and special paths
// Deleted:  if (
// Deleted:    pathname.startsWith('/_next') ||
// Deleted:    pathname.startsWith('/api') ||
// Deleted:    pathname.includes('.')
// Deleted:  ) {
// Deleted:    return NextResponse.next();
// Deleted:  }
// Deleted:  
// Deleted:  // Check if pathname already has a locale
// Deleted:  const hasLocale = locales.some(locale => 
// Deleted:    pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
// Deleted:  );
// Deleted:  
// Deleted:  if (hasLocale) {
// Deleted:    return NextResponse.next();
// Deleted:  }
// Deleted:  
// Deleted:  // Get locale from cookie or Accept-Language header
// Deleted:  const locale = request.cookies.get('locale')?.value || 'en';
// Deleted:  
// Deleted:  // Redirect root to locale-prefixed path
// Deleted:  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
// Deleted:}
// Deleted:
// Deleted:export const config = {
// Deleted:  matcher: [
// Deleted:    '/((?!_next|api|.*\\..*|_next/static|favicon.ico|sitemap.xml|robots.txt).*)',
// Deleted:  ],
// Deleted:};