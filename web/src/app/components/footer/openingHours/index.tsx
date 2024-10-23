import { IOpeningHourFooter } from '@/sanity/lib/types/types';

const OpeningHoursFooterComponent = ({ openingHours }: { openingHours: IOpeningHourFooter }) => {
  return (
    <div>
      <h2 className="mb-6 text-xl font-semibold">Åpningstider</h2>
      {openingHours.map(({ _key, day, hours }) => (
        <div key={_key} className="mb-2">
          <div className="flex items-center gap-3">
            <p>{day}:</p>
            <span>{hours}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OpeningHoursFooterComponent;
