import Grid from './grid';

type Props = {
  data: {
    _type: 'lunchBlock';
    title: string | null;
    _key: string;
    dishReference: Array<{
      _id: string;
      _type: 'lunch';
      title: string | null;
      description: string | null;
      dineInPrice: number | null;
      takeawayPrice: number | null;
      allergy: Array<string> | null;
    }> | null;
  };
};

export default function Dishes({ data }: Props) {
  return (
    <section>
      <Grid>
        {data.dishReference?.map(
          ({ title, description, dineInPrice, takeawayPrice, allergy, _id }) => (
            <article key={_id}>
              <p>{title}</p>
              <p>{description}</p>
              <div>
                <p>
                  <span>Spise inne</span> <span>{dineInPrice || 0}</span>
                </p>
                <p>
                  <span>Ta med</span> <span>{takeawayPrice || 0}</span>
                </p>
              </div>
              <>
                <p className="bg-purple-300 inline-block">
                  Allergier:{' '}
                  {allergy?.map((ele, index) => (
                    <span key={index}>
                      {ele} {index < allergy.length - 1 && ', '}
                    </span>
                  ))}
                </p>
              </>
            </article>
          ),
        )}
      </Grid>
    </section>
  );
}
