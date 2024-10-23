import { FOOTER_QUERYResult } from '@/sanity/lib/sanity.types';
import Wrapper from '../wrapper';
import AddressFooterComponent from './address';
import ContactFooterComponent from './contact';
import OpeningHoursFooterComponent from './openingHours';
import SocialMediaFooterComponent from './socialMedia';

export default function Footer({ data }: { data: FOOTER_QUERYResult }) {
  return (
    <footer>
      <Wrapper optionalStyle="grid grid-cols-4  gap-4 pb-20">
        <AddressFooterComponent
          streetName={data.address.streetName}
          streetNumber={data.address.streetNumber}
          postalCode={data.address.postalCode}
          town={data.address.town}
        />
        <OpeningHoursFooterComponent openingHours={data.openingHours} />
        <ContactFooterComponent phone={data.contact.phone} email={data.contact.email} />
        <SocialMediaFooterComponent socialMedias={data.socialMedia} />
      </Wrapper>
    </footer>
  );
}
