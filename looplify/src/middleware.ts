export { auth as middleware } from 'next-auth';

export const config = {
  matcher: [
    '/library/:path*',
    '/playlists/:path*',
    '/upload/:path*',
  ]
};
