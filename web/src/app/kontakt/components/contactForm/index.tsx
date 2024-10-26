'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import FormInput from '@/app/components/formInput';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema } from './contactSchema';
import sendEmail from '@/lib/sendEmail';
import { useState } from 'react';
import SuccessAlert from '@/ui/successAlert';
export type Inputs = {
  name: string;
  email: string;
  telephone: string;
  message: string;
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
    },
  });

  const message = watch('message');
  const messageCount = message?.length || 0;

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
          labelText="Beskjed"
          id="message"
          name="message"
          type="message"
          optional={false}
          errors={errors}
          register={register}
          msgLength={messageCount}
        />
      </div>

      {success ? (
        <SuccessAlert optionalStyle="sm:self-start self-stretch px-20">
          Melding er sendt.
        </SuccessAlert>
      ) : (
        <button
          type="submit"
          className="sm:self-start self-stretch bg-primary text-white py-3 px-20 rounded-md"
        >
          Send
        </button>
      )}
    </form>
  );
}
