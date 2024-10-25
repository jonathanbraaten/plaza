import Footer from '../components/footer';
import Header from '../components/header';
import Wrapper from '../components/wrapper';
import ContactForm from './components/contactForm';

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
