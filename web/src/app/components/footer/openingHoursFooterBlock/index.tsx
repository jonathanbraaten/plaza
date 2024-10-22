import { IOpeningHoursFooter } from '@/sanity/lib/types/types';

const OpeningHoursFooterBlockComponent = ({
  sunday,
  monday,
  tuesdayThursday,
  fridaySaturday,
}: IOpeningHoursFooter) => {
  return (
    <div>
      <h2 className="mb-6 text-xl font-semibold">Åpningstider</h2>
      <div className="flex flex-col gap-3">
        <div className="flex gap-2">
          <p>Mandag:</p>
          <p>{monday}</p>
        </div>
        <div className="flex gap-2">
          <p>Tirsard-Torsdag:</p>
          <p>{tuesdayThursday}</p>
        </div>
        <div className="flex gap-2">
          <p>TFredag -Lørdag:</p>
          <p>{fridaySaturday}</p>
        </div>
        <div className="flex gap-2">
          <p>Søndag:</p>
          <p>{sunday}</p>
        </div>
      </div>
    </div>
  );
};

export default OpeningHoursFooterBlockComponent;
