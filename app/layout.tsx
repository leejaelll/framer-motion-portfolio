import type { Metadata } from 'next';
import { Georama, Edu_NSW_ACT_Hand_Pre, IBM_Plex_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

export const metadata: Metadata = {
  title: '이재린 | Lee Jaerin',
  description: '디테일과 간결함에 주의를 기울이는 프론트엔드 개발자입니다. Next.js, React, TypeScript, GSAP를 활용한 인터랙티브한 웹 경험을 만듭니다.',
  keywords: [
    '이재린',
    'Lee Jaerin',
    '프론트엔드 개발자',
    'Frontend Developer',
    'Next.js',
    'React',
    'TypeScript',
    'GSAP',
    'Tailwind CSS',
    'Interactive Portfolio',
    'UX/UI Developer',
    'Web Developer',
  ],
  authors: [{ name: '이재린 (Lee Jaerin)', url: 'https://github.com/jaerinjaerin' }],
  creator: '이재린 (Lee Jaerin)',
  metadataBase: new URL('https://jaerinjaerin.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://jaerinjaerin.vercel.app',
    title: '이재린 | Lee Jaerin - Frontend Developer',
    description: '디테일과 간결함에 주의를 기울이는 프론트엔드 개발자입니다. Next.js, React, TypeScript, GSAP를 활용한 인터랙티브한 웹 경험을 만듭니다.',
    siteName: '이재린 Portfolio',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: '이재린 포트폴리오',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '이재린 | Lee Jaerin - Frontend Developer',
    description: '디테일과 간결함에 주의를 기울이는 프론트엔드 개발자입니다. Next.js, React, TypeScript, GSAP를 활용한 인터랙티브한 웹 경험을 만듭니다.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'your-google-verification-code', // Google Search Console에서 발급받은 코드를 추가하세요
    // other: {
    //   naver: 'your-naver-verification-code', // 네이버 서치어드바이저 코드
    // },
  },
};

const georama = Georama({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--georama',
});
const playwrite = Edu_NSW_ACT_Hand_Pre({
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--playwrite',
});
const sansCode = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--sansCode',
});
const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  variable: '--pretendard',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: '이재린',
    alternateName: 'Lee Jaerin',
    url: 'https://jaerinjaerin.vercel.app',
    image: 'https://jaerinjaerin.vercel.app/images/og-image.png',
    jobTitle: 'Frontend Developer',
    description: '디테일과 간결함에 주의를 기울이는 프론트엔드 개발자',
    sameAs: [
      'https://github.com/jaerinjaerin',
      'https://jaerinjaerin.github.io/',
      'https://www.instagram.com/lee_jaell/',
    ],
    knowsAbout: [
      'Next.js',
      'React',
      'TypeScript',
      'GSAP',
      'Tailwind CSS',
      'Flutter',
      'Frontend Development',
      'Web Development',
    ],
  };

  return (
    <html lang='ko'>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`h-dvh w-dvw overflow-hidden ${pretendard.className} ${georama.variable} ${playwrite.variable} ${sansCode.variable}`}
        style={{
          backgroundImage: 'url(/images/wallpaper.png)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        {children}
      </body>
    </html>
  );
}
