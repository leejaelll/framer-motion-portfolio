import type { Metadata } from 'next';
import { Inter, Bungee } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });
const bungee = Bungee({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--bungee',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn(inter.className, bungee.variable, 'bg-[#030014] overflow-y-scroll overflow-x-hidden h-svh')}>{children}</body>
    </html>
  );
}
