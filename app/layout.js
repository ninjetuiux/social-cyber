
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { ScrollProvider } from './context/ScrollContext';
import ScrollHandler from "./components/ScrollHandler/ScrollHandler";
import { ToggledProvider } from "./context/ToggledContext";
export const metadata = {
  title: 'Social Cyber',
  description: 'Social Cyber is a digital agency dedicated to providing high-quality cybersecurity solutions.',
  openGraph: {
    type: 'website',
    url: 'https://socialcyber.co.il',
    title: 'Social Cyber',
    description: 'Social Cyber is a digital agency dedicated to providing high-quality cybersecurity solutions.',
    images: [
      {
        url: 'https://socialcyber.co.il/socialcyber-logo.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
  },
  robots: ['index, follow'],
  canonical: 'https://socialcyber.co.il',
  amp: 'socialcyber.co.il/amp',
  next: 'socialcyber.co.il',
  sitemap: ''
}

function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body style={{margin: 0, padding: 0, boxSizing: 'border-box'}}>

          <ScrollProvider>
            <ToggledProvider>
              <ScrollHandler />
              <Navbar />
              {children}
              <Footer />
            </ToggledProvider>
          </ScrollProvider>
      </body>
    </html>
  );
}
export default RootLayout;
