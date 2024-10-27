import clsx from 'clsx';
import Footer from '../components/footer';
import Header from '../components/header';
import Wrapper from '../components/wrapper';
import { montserrat } from '@/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plaza Kafe & Spiseri - Om oss',

  description:
    'Plaza Kafe og Spiseri ligg i sentrum av Lonevåg på Osterøy. Staden vart opna 21. april 2021 av kokken Fabio Franza. Me får levert bakevarer frå Hjelle bakeri som du kan nyte til ein kopp kaffi i eit koseleg lokale. Om du vil, kan du bestille brød og heile kaker frå Hjelle via oss. Fabio lagar heimelaga retter både til lunsj og middag, og til dessert kan du få tiramisu, panacotta eller kake. Me har også skjenkeløyve for øl og vin. Det er mogleg å ta mat med heim. På bestilling leverer me tapas, snittar eller møtepakke, og du kan ta kontakt om du ynskjer bestille middag til konfirmasjon, bryllup eller liknande.',

  openGraph: {
    title: 'Plaza Kafe & Spiseri - Om oss',
    images: [
      {
        url: '/plaza-logo-use.png',
        alt: 'Plaza Kafe & Spiseri logo',
        width: 1200,
        height: 630,
      },
    ],
    description: 'Utforsk vårt breie utval av smakfulle rettar hos Plaza Kafe & Spiseri..',
    type: 'website',
    siteName: 'Plaza Kafe & Spiseri',
    locale: 'nn_NO',
    url: 'https://plazakafe.no/om-oss',
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex justify-center items-center flex-col bg-secondary">
        <section>
          <Wrapper optionalStyle="flex flex-col gap-4 ">
            <h1 className={clsx(montserrat.className, 'text-mobile-h1 md:text-desktop-h1')}>
              Om oss
            </h1>
            <p className="max-w-[75ch]">
              Plaza kafe og spiseri ligg i sentrum av Lonevåg på Osterøy. Staden vart opna 21.april
              2021 av kokken, Fabio Franza. Me får levert bakevarer frå Hjelle bakeri som du kan
              nyte til ein kopp kaffi i eit koseleg lokale. Om du vil, kan du bestille brød og heile
              kaker frå Hjelle via oss. Fabio lagar heimelaga retter både til lunsj og middag , og
              til dessert kan du få tiramisu, panacotta eller kake. Me har også skjenkeløyve for øl
              og vin. Det er mogleg å ta mat med heim. På bestilling leverer me tapas, snittar eller
              møtepakke og du kan ta kontakt om du ynskjer bestille middag til konfirmasjon, bryllup
              eller liknande.
            </p>
          </Wrapper>
        </section>
      </main>
      <Footer />
    </>
  );
}
