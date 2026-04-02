import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Priyanshu Raj | Portfolio',
  description: 'Personal portfolio of Priyanshu Raj, a computer science undergraduate and software developer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Background decorative elements */}
        <div className="fixed inset-0 z-[-1] bg-[#020617]">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px]" />
        </div>
        {children}
      </body>
    </html>
  );
}
