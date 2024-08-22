
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { ScrollProvider } from './context/ScrollContext';
import ScrollHandler from "./components/ScrollHandler/ScrollHandler";
import { ToggledProvider } from "./context/ToggledContext";
import { SmallScreenProvider } from "./context/SmallScreenContext";
import AuthProvider from "./providers/AuthProvider";

export const metadata = {
  title: {
    default: 'Social Cyber',
    template: '%s - Social Cyber',
  },
  description: 'חשבון הסושיאל שלך נפרץ, נחסם או הושעה? Social Cyber מתמחה בשחזור חשבונות והגנה מקצועית מפני איומי סייבר. קבל ייעוץ והדרכה לשמירה על המידע והפרטיות שלך ברשת. אל תיתן להאקרים לנצח - צור קשר עוד היום!',
  openGraph: {
    type: 'website',
    url: 'https://socialcyber.co.il',
    title: 'שחזור חשבונות סושיאל - מהיר ומקצועי 🔓',
    description: 'חשבון הסושיאל שלך נפרץ, נחסם או הושעה? אל תתייאש! Social Cyber מתמחה בשחזור מהיר של חשבונות ובניית הגנה מקצועית מפני איומי סייבר. צור קשר עוד היום והחזר את השליטה לידיים שלך!',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/OG-CARD-OPENGRAPH.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
    title: 'שחזור חשבונות סושיאל - מהיר ומקצועי 🔓',
    description: 'חשבון הסושיאל שלך נפרץ, נחסם או הושעה? אל תתייאש! Social Cyber מתמחה בשחזור מהיר של חשבונות ובניית הגנה מקצועית מפני איומי סייבר. צור קשר עוד היום והחזר את השליטה לידיים שלך'
  },
  robots: ['index, follow'],
  canonical: 'https://socialcyber.co.il',
  amp: 'socialcyber.co.il/amp',
  next: 'socialcyber.co.il',
  sitemap: ''
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body style={{margin: 0, padding: 0, boxSizing: 'border-box'}}>
        <AuthProvider>
          <ScrollProvider>
            <ToggledProvider>
              <SmallScreenProvider>
                <ScrollHandler />
                <Navbar />
                {children}
                <Footer />
              </SmallScreenProvider>
            </ToggledProvider>
          </ScrollProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

export function BlogLayout({ children }) {
  return (
    <div>
      <AuthProvider>
        {children}
      </AuthProvider>
    </div>
  );
}