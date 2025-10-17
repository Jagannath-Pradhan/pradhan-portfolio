import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ToastContainer } from 'react-toastify';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  metadataBase: new URL('https://pradhan-portfolio-rust.vercel.app/'),
  title: 'Portfolio - J. Pradhan | Full Stack Web Developer',
  description:
    'I\'m a passionate MERN Stack and Next.js developer who loves building responsive, modern web applications with clean UI and strong functionality. Check out my projects, skills, and experience here.',
  icons: {
    icon: '/my-image.png',
  },
  keywords: [
    'Jagannath Pradhan',
    'Portfolio',
    'MERN Developer',
    'Next.js Developer',
    'Full Stack Web Developer',
    'React.js',
    'Node.js',
    'JavaScript',
    'Tailwind CSS',
    'Web Developer',
    'Frontend Developer',
    'Backend Developer',
    'Web Applications',
    'Responsive Design',
    'UI/UX',
    'Software Engineer',
    'Programming',
    'Tech Enthusiast',
    'Open Source',
    'Developer Portfolio',
  ],
  authors: [{ name: 'Jagannath Pradhan' }],
  creator: 'Jagannath Pradhan',
  openGraph: {
    title: 'Jagannath Pradhan | MERN & Next.js Developer',
    description:
      'Explore my portfolio showcasing projects, skills, and experience in MERN Stack and Next.js development.',
    url: 'https://pradhan-portfolio-rust.vercel.app/',
    siteName: 'Pradhan Portfolio',
    images: [
      {
        url: '/my-image.png',
        width: 1200,
        height: 630,
        alt: 'Pradhan Portfolio Preview',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}