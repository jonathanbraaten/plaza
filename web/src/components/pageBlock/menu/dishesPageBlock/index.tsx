import Grid from './grid';
import Wrapper from '@/app/components/wrapper';
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
      {data.map(({ _id, title, dishes }) => (
        <section key={_id}>
          <Wrapper optionalStyle="flex  flex-col gap-[10rem] ">
            <h2 className="text-4xl  self-center">{title}</h2>
            <Grid>
              {dishes.map(({ _type, title, dineInPrice, takeAwayPrice, description, allergy }) => (
                <article className="bg-pink-500" key={_type}>
                  <p>{title}</p>
                  <p>{description}</p>
                  <div>
                    <p className="flex justify-between">
                      <span>Spise inne:</span>
                      ..................
                      <span> {dineInPrice}kr</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Ta med:</span>
                      <span> ..................</span>
                      <span>{dineInPrice}kr</span>
                    </p>
                  </div>

                  <div>
                    <>
                      <p className=" inline-block">
                        Allergier:{' '}
                        {allergy?.map((ele, index) => (
                          <span key={index}>
                            {ele} {index < allergy.length - 1 && ', '}
                          </span>
                        ))}
                      </p>
                    </>
                  </div>
                </article>
              ))}
            </Grid>
          </Wrapper>
        </section>
      ))}
    </section>
  );
}
