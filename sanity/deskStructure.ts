import { StructureResolver } from 'sanity/structure';
import { PiBowlFood, PiForkKnife } from 'react-icons/pi';

export const customStructure: StructureResolver = (S) =>
  S.list()
    .title('Documents')
    .items([
      // Dishes folder
      ...S.documentTypeListItems().filter(
        (listItem) => !['lunch', 'burgers'].includes(listItem.getId() as string),
      ),
      S.divider(),
      S.listItem()
        .title('Matretter')
        .icon(PiBowlFood)
        .child(
          S.list()
            .title('Kategorier')
            .items([
              S.listItem().icon(PiForkKnife).title('Lunsj').child(S.documentTypeList('lunch')),
              S.listItem().icon(PiForkKnife).title('Burgers').child(S.documentTypeList('burgers')),
            ]),
        ),
    ]);
