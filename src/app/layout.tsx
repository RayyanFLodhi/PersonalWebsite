import type { Metadata } from 'next';
import { Inter, Bricolage_Grotesque, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { resumeData } from '@/data/resumeData';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  weight: ['500', '600', '700', '800'],
  display: 'swap',
});
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', weight: ['400', '500'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(resumeData.site),
  title: 'Rayyan Lodhi — Computer Engineering, uOttawa',
  description:
    'Rayyan Lodhi builds systems that sense, decide and move: Counter-UAS simulation at uOttawa, agentic AI at Statistics Canada, computer vision at Retailogists, and the robotic arm on the uOttawa Mars Rover.',
  openGraph: {
    title: 'Rayyan Lodhi',
    description: 'Computer Engineering student at uOttawa. Counter-UAS simulation, computer vision, embedded systems, data pipelines.',
    url: resumeData.site,
    siteName: 'Rayyan Lodhi',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: resumeData.name,
  url: resumeData.site,
  email: `mailto:${resumeData.email}`,
  jobTitle: 'Computer Engineering Student',
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of Ottawa' },
  address: { '@type': 'PostalAddress', addressLocality: 'Ottawa', addressRegion: 'ON', addressCountry: 'CA' },
  sameAs: [resumeData.github, resumeData.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${bricolage.variable} ${mono.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <Navbar />
        <main id="top">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
