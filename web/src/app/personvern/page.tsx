import { Metadata } from 'next';
import Footer from '../components/footer';
import Header from '../components/header';
import Wrapper from '../components/wrapper';
import FAQ from './FAQ';

export const metadata: Metadata = {
  title: 'Plaza Kafe & Spiseri - Personvern',
  description:
    'Personvernerklæring for Plaza Kafé & Spiseri. Her finn du informasjon om korleis me handterer personopplysningar, datahandsaming via EmailJS, og dine rettar knytt til personvern. Me samlar berre naudsynte opplysningar som namn, e-post og telefonnummer (valfritt) når du kontaktar oss.',

  openGraph: {
    title: 'Plaza Kafe & Spiseri - Personvern',
    images: [
      {
        url: '/plaza-logo-use.png',
        alt: 'Plaza Kafe & Spiseri logo',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
    siteName: 'Plaza Kafe & Spiseri',
    locale: 'nn_NO',
    url: 'https://plazakafe.no/personvern',
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="bg-secondary py-20">
        <Wrapper>
          <FAQ />
        </Wrapper>
      </main>
      <Footer />
    </>
  );
}
