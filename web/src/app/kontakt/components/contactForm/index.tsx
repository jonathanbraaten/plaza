'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import FormInput from '@/app/components/formInput';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema } from './contactSchema';
import sendEmail from '@/lib/sendEmail';
import { useState } from 'react';
import SuccessAlert from '@/ui/successAlert';
import Link from 'next/link';

export type Inputs = {
  name: string;
  email: string;
  telephone: string;
  message: string;
  consent: boolean;
};

export default function ContactForm() {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(contactSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      telephone: '',
      message: '',
      consent: false,
    },
  });

  const message = watch('message');
  const messageCount = message?.length || 0;
  const consent = watch('consent');
  console.log(consent);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    sendEmail(data);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      reset();
    }, 5000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div className="flex flex-col gap-3 w-full">
        <FormInput
          htmlFor="name"
          labelText="Navn"
          id="name"
          name="name"
          type="text"
          optional={false}
          errors={errors}
          register={register}
        />
        <FormInput
          htmlFor="email"
          labelText="E-postadresse"
          id="email"
          name="email"
          type="text"
          optional={false}
          errors={errors}
          register={register}
        />
        <FormInput
          htmlFor="telephone"
          labelText="Telefon"
          id="telephone"
          name="telephone"
          type="tel"
          optional={true}
          errors={errors}
          register={register}
        />
        <FormInput
          htmlFor="message"
          labelText="Melding"
          id="message"
          name="message"
          type="message"
          optional={false}
          errors={errors}
          register={register}
          msgLength={messageCount}
        />

        <label className="flex flex-col gap-2 mb-4" htmlFor="consent">
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="consent"
              {...register('consent', { required: true })}
              className="h-5 w-5 accent-blue-500"
            />
            <p className="text-gray-700 font-light text-sm inline-block">
              Jeg forstår at min informasjon sendes via EmailJS og samtykker til at opplysningene
              behandles i henhold til{' '}
              <Link href="/personvern" className="underline hover:text-gray-900 inline-block">
                personvernerklæringen
              </Link>
            </p>
          </div>
          {errors.consent && <span className="text-red-500 text-sm">Samtykke er påkrevd</span>}
        </label>
      </div>

      {success ? (
        <SuccessAlert optionalStyle="sm:self-start self-stretch text-green-600 text-lg">
          Takk! Vi svarer deg så fort vi kan.
        </SuccessAlert>
      ) : (
        <button
          type="submit"
          className="sm:self-start self-stretch bg-primary transition-opacity hover:opacity-90 focus:opacity-90 duration-150 ease-in-out text-white py-3 px-20 rounded-md"
        >
          Send
        </button>
      )}
    </form>
  );
}
