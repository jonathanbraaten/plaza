import { Metadata } from 'next';
import Footer from '../components/footer';
import Header from '../components/header';
import Wrapper from '../components/wrapper';
import ContactForm from './components/contactForm';
export const metadata: Metadata = {
  title: 'Plaza Kafe & Spiseri - Kontakt',
  description:
    'Ta kontakt med Plaza Kafe & Spiseri for spørsmål om meny, catering, og bestilling. Vi er her for å hjelpe deg med alle førespurnadar, anten du planlegg eit arrangement eller berre vil reservere eit bord. Du finn oss i Lonevåg sentrum på Osterøy.',
  keywords: ['Plaza Kafe & Spieri', 'Kontakt', 'Kontakt oss', 'Lonevåg', 'Osterøy'],
  openGraph: {
    title: 'Plaza Kafe & Spiseri - Kontakt',
    images: {
      url: '/public/open-graph-plaza-logo.png',
      alt: 'Plaza Kafe & Spiseri logo',
    },
    description: 'Utforsk vårt breie utval av smakfulle rettar hos Plaza Kafe & Spiseri..',
    type: 'website',
    siteName: 'Plaza Kafe & Spiseri',
    locale: 'nn_NO',
    url: 'https://plazakafe.no',
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex justify-center items-center px-20 bg-secondary">
        <section className="max-w-[45rem] w-full">
          <Wrapper optionalStyle="text-center">
            <h1 className="text-mobile-h1 md:text-mobile-h2">Kontakt oss</h1>
            <ContactForm />
          </Wrapper>
        </section>
      </main>
      <Footer />
    </>
  );
}
