import { IContactFooter } from '@/sanity/lib/types/types';

const ContactFooterComponent = ({ phone, email }: IContactFooter) => {
  return (
    <div>
      <h1 className="mb-6 text-xl font-semibold">Kontakt</h1>
      <div className="flex flex-col gap-3">
        <a href={`mailto:${email}`}>{email}</a>
        <a href={`tel:${phone}`}>{phone}</a>
      </div>
    </div>
  );
};

export default ContactFooterComponent;
