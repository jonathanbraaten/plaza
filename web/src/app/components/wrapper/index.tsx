import clsx from 'clsx';
type Props = {
  optionalStyle?: string;
  children: React.ReactNode;
};
export default function Wrapper({ optionalStyle, children }: Props) {
  return <div className={clsx(optionalStyle, 'max-w-7xl w-full mx-auto')}>{children}</div>;
}
