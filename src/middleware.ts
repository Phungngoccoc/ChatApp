import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


const privatePath = [''];
const authPath = [''];


export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (pathname === '/') {
        return NextResponse.next();
    }

    return NextResponse.next();
}

export const config = {
    // matcher: ['/', '/(vi|en)', '/(vi|en)/admin/:path*', '/(vi|en)/login', '/(vi|en)/register'],
};
