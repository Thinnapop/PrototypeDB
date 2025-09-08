import './globals.css';
import type { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-950 text-neutral-100">
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
