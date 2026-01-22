import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const language = request.cookies.get('language')?.value || 'en';
  
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-language', language);
  
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: '/:path*',
};