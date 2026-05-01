import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'London IVC — A second life in London. Since 1946.',
  description: '400+ members. 50+ events a month. Wine tastings, open mics, walks, theatre, weekends away. Try a free event — no card required.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
