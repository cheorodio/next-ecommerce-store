import './globals.scss';
import { Poppins } from 'next/font/google';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

const poppins = Poppins({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: { default: 'Vida | Handmade Jewellery' },
  description: 'Dedicated for best quality handmade jewellery',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
