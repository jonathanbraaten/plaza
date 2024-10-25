import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { Inputs } from '@/app/kontakt/components/contactForm';
import clsx from 'clsx';
type Props = {
  htmlFor: string;
  labelText: string;
  id: string;
  name: keyof Inputs;
  type: string;
  optional: boolean;
  errors: FieldErrors;
  register: UseFormRegister<Inputs>;
  msgLength?: number;
};

export default function FormInput({
  type,
  id,
  name,
  htmlFor,
  labelText,
  optional,
  errors,
  register,
  msgLength,
}: Props) {
  /*   console.log(errors, name); */
  {
    switch (type) {
      case 'text':
      case 'tel':
      case 'email':
        return (
          <label className="flex flex-col" htmlFor={htmlFor}>
            <div className="flex flex-col">
              <p className="text-left">
                {labelText}{' '}
                {optional ? <span>(valgfri)</span> : <span className="text-md">(påkrevd)</span>}
              </p>
              <input
                className={clsx('border border-stroke-strong/20 py-2 pl-3 rounded-md ', {
                  'border-red-500': errors[name]?.message,
                  'border-stroke-strong/20': !errors[name]?.message,
                })}
                type={type}
                id={id}
                aria-invalid={errors.name ? 'true' : 'false'}
                {...register(name)}
              />
            </div>
            <span role="alert" className="min-h-6  text-left text-red-500 font-bold text-sm">
              {errors[name]?.message?.toString()}
            </span>
          </label>
        );

      case 'message':
        return (
          <label className="flex flex-col" htmlFor={htmlFor}>
            <p className="flex w-full justify-between items-center  gap-1">
              {optional ? (
                <span> {labelText} (valgfri)</span>
              ) : (
                <span className="text-md"> {labelText} (påkrevd)</span>
              )}
              <span className="text-sm">500/{msgLength}</span>
            </p>
            <textarea
              className={clsx('border border-stroke-strong/20 py-2 pl-3 rounded-md ', {
                'border-red-500': errors[name]?.message,
                'border-stroke-strong/20': !errors[name]?.message,
              })}
              rows={5}
              id={id}
              {...register(name)}
            ></textarea>
            <span role="alert" className="min-h-6  text-left  text-red-500 text-sm font-bold">
              {errors[name]?.message?.toString()}
            </span>
          </label>
        );
      default:
        return null;
    }
  }
}
