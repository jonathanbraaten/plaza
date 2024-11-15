import Wrapper from '../components/wrapper';

export default function FAQ() {
  return (
    <section>
      <Wrapper optionalStyle="flex flex-col gap-10 px-10 lg:px-20">
        <h1 className="text-mobile-h1 md:text-mobile-h1">Personvernerklæring</h1>
        <article>
          <h2 className="text-mobile-h2 md:text-mobile-h3">Behandling av personopplysninger</h2>
          <div>
            <p>Når du kontakter oss via kontaktskjemaet, samler vi følgende informasjon:</p>
            <ul className="list-disc px-5">
              <li>Navn</li>
              <li>E-post</li>
              <li>Telefonnummer (valgfritt)</li>
            </ul>
          </div>
        </article>
        <article>
          <h2 className="text-mobile-h2 md:text-mobile-h2"> Hvordan vi behandler dataen</h2>
          <p className="mb-1">
            Vi bruker tjenesten EmailJS for å motta kontaktskjemaet. Informasjonen sendes som en
            e-post via EmailJS sine systemer. Din melding og informasjon blir lagret på EmailJS sine
            servere på ubestemt tid. Vi har ikke teknisk mulighet til å automatisk slette dataene
            fra EmailJS sine systemer. Vi bruker informasjonen kun for å svare på din henvendelse.
          </p>
          <p>
            Din henvendelse lagres i EmailJS sitt system. Ved forespørsel om sletting kan vi kun
            garantere sletting av vår lokale kopi av e-posten. Vi jobber med å implementere et nytt
            system som vil gi bedre kontroll over datalagring.
          </p>
        </article>
        <article>
          <h2 className="text-mobile-h2 md:text-mobile-h2">Dine rettigheter</h2>
          <div>
            <p>Du har rett til å:</p>
            <ul className="list-disc px-5">
              <li>Be om innsyn i dine personopplysninger</li>
              <li>Be om sletting av dine personopplysninger (så langt det er teknisk mulig)</li>
              <li>Trekke tilbake ditt samtykke</li>
            </ul>
          </div>
        </article>
        <article>
          <h2 className="text-mobile-h2 md:text-mobile-h2">Kontakt</h2>
          <p>For spørsmål om personvern, kontakt oss via plazakafe@hotmail</p>
        </article>
      </Wrapper>
    </section>
  );
}

/*
Dine rettigheter
Du har rett til å:

Be om innsyn i dine personopplysninger
Be om sletting av dine personopplysninger (så langt det er teknisk mulig)
Trekke tilbake ditt samtykke

Kontakt
For spørsmål om personvern, kontakt oss via [din e-post].
Sist oppdatert: [dagens dato] */
