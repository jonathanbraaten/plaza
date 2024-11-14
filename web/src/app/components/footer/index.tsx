import { FaFacebookF, FaInstagram } from 'react-icons/fa';

async function fetchFooterData() {
  const data = await sanityFetch({
    query: FOOTER_QUERY,
    revalidate: 3600,
    tags: [],
  });
  return data;
}
import { FOOTER_QUERY } from '@/sanity/queries/footerQuery';
import Wrapper from '../wrapper';
import { sanityFetch } from '@/sanity/lib/client';

export default async function Footer() {
  const data = await fetchFooterData();
  const openingHours = data?.openingHours || [];
  const socialMedia = data?.socialMedia || [];

  return (
    <footer className="py-20">
      <Wrapper optionalStyle="flex justify-between flex-col md:flex-wrap md:flex-row gap-5">
        <div className="grow">
          <p className="font-bold mb-1">Adresse</p>
          <address className="flex flex-col gap-1 not-italic">
            <p className="flex gap-2">
              <span>Fotlandsvegen</span>
              <span>5</span>
            </p>
            <p className="flex gap-2">
              <span>5282</span>
              <span>Lonevåg</span>
            </p>
          </address>
        </div>
        {openingHours?.length > 0 && (
          <div className="grow">
            <p className="font-bold mb-1">Åpningstider</p>
            <ul>
              {openingHours.map(({ _key, day, time }) => (
                <li key={_key}>
                  <p className="flex gap-2">
                    <span>{day}:</span>
                    <span>{time}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="grow flex flex-col">
          <p className="font-bold mb-1">Kontakt</p>
          <ul className="self-start">
            <li>
              <a href="tel:56392500" className="flex gap-2">
                <span>Telefon:</span>
                <span className="underline">56392500</span>
              </a>
            </li>
            <li>
              <a href="mailto:plazakafe@hotmail.com" className="flex gap-2">
                <span>E-post:</span>
                <span className="underline">plazakafe@hotmail.com</span>
              </a>
            </li>
          </ul>
        </div>
        {socialMedia?.length > 0 && (
          <div className="grow flex flex-col">
            <p className="font-bold mb-1">Sosiale medier</p>
            <ul className="self-start">
              {socialMedia.map(({ _key, socialType, socialLinks }) => (
                <li className="self-start" key={_key}>
                  <a className="flex items-center gap-2" href={socialLinks}>
                    <span>
                      {socialType === 'Facebook' ? (
                        <FaFacebookF size={20} />
                      ) : (
                        <FaInstagram size={20} />
                      )}
                    </span>

                    <span>{socialType}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Wrapper>
    </footer>
  );
}
