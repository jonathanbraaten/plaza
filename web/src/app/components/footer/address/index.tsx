import { IAddressFooter } from '@/sanity/lib/types/types';

const AddressFooterComponent = ({ streetName, streetNumber, postalCode, town }: IAddressFooter) => {
  return (
    <div>
      <h2 className="mb-6 text-xl font-semibold">Address</h2>
      <div className="flex items-center gap-3 mb-2">
        <div>{streetName}</div>
        <div>{streetNumber}</div>
      </div>
      <div className="flex items-center gap-3">
        <div>{postalCode}</div>
        <div>{town}</div>
      </div>
    </div>
  );
};

export default AddressFooterComponent;
