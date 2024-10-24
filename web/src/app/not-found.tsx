import Link from 'next/link';
import Footer from './components/footer';
import Header from './components/header';
import Wrapper from './components/wrapper';
import { FaArrowLeft } from 'react-icons/fa';

export default function Custom404() {
  return (
    <>
      <Header />
      <main>
        <section className="flex justify-center items-center h-full">
          <Wrapper optionalStyle="text-center">
            <div className="flex flex-col gap-3 items-center">
              <h1 className="text-2xl md:text-3xl">Beklager, siden du leter etter finnes ikke.</h1>
              <h2 className="group">
                <Link className="underline text-blue-600 flex items-center gap-4" href={'/'}>
                  <FaArrowLeft
                    className="group-hover:-translate-x-[5px] hidden md:block transition-transform duration-150"
                    size={25}
                  />
                  <span>Klikk for å gå tilbake til forsiden</span>
                </Link>
              </h2>
            </div>
          </Wrapper>
        </section>
      </main>
      <Footer />
    </>
  );
}
