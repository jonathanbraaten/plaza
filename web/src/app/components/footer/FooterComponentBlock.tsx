import { PAGE_QUERYResult } from '@/sanity/lib/sanity.types';
import React from 'react';
import Wrapper from '../wrapper';
import AddressFooterBlockComponent from './AddressFooterBlock';
import OpeningHoursFooterBlockComponent from './openingHoursFooterBlock';
import ContactFooterBlockComponent from './contactFooterBlock';
import SocialMediaFooterBlockComponent from './socialMediaFooterBlock';

const FooterComponentBlock = ({ data }: { data: PAGE_QUERYResult }) => {
  return (
    <footer>
      <Wrapper optionalStyle="grid grid-cols-4  gap-4 pb-20">
        {data?.footer?.map((block) => {
          switch (block._type) {
            case 'addressFooterBlock':
              return (
                <AddressFooterBlockComponent
                  key={block._key}
                  streetName={block.streetName}
                  streetNumber={block.streetNumber}
                  postalCode={block.postalCode}
                  town={block.town}
                />
              );
            case 'openingHoursFooterBlock':
              return (
                <OpeningHoursFooterBlockComponent
                  sunday={block.sunday}
                  monday={block.monday}
                  tuesdayThursday={block.tuesdayThursday}
                  fridaySaturday={block.fridaySaturday}
                />
              );
            case 'contactFooterBlock':
              return (
                <ContactFooterBlockComponent telephone={block.telephone} email={block.email} />
              );
            case 'socialMediaFooterBlock':
              return (
                <SocialMediaFooterBlockComponent
                  facebook={block.facebook}
                  instagram={block.instagram}
                />
              );
          }
        })}
      </Wrapper>
    </footer>
  );
};

export default FooterComponentBlock;
