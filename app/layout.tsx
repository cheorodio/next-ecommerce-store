import './globals.scss';
// import { Caveat, Poppins } from 'next/font/google';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

// const poppins = Poppins({ subsets: ['latin'], weight: '400' });
// const caveat = Caveat({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: { default: 'Vida | Handmade Jewellery' },
  description: 'Dedicated for best quality handmade jewellery',
};

type LayoutProps = {
  children: string;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
