import Footer from '../components/footer';
import Header from '../components/header';
import Wrapper from '../components/wrapper';
import FAQ from './FAQ';

export default function Page() {
  return (
    <>
      <Header />
      <main className="bg-secondary py-10">
        <Wrapper>
          <FAQ />
        </Wrapper>
      </main>
      <Footer />
    </>
  );
}
