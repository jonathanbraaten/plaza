import clsx from 'clsx';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
type Props = {
  children: React.ReactNode;
  optionalStyle?: string;
};
export default function SuccessAlert({ optionalStyle, children }: Props) {
  return (
    <div
      role="alert"
      aria-live="polite"
      className={clsx(
        optionalStyle,
        'flex justify-center items-center  gap-5   py-3  border  border-green-500/20 text-primary bg-green-500/10  rounded-md',
      )}
    >
      <IoMdCheckmarkCircleOutline size={25} />
      <p> {children} </p>
    </div>
  );
}
