import { StructureBuilder } from 'sanity/structure';
import { PiBowlFood } from 'react-icons/pi';

export const customStructure = (S: StructureBuilder) =>
  S.list()
    .title('Documents')
    .items([
      ...S.documentTypeListItems().filter(
        (listItem) => !['lunch'].includes(listItem.getId() as string),
      ),
      S.listItem()
        .icon(PiBowlFood)
        .title('Dishes')
        .child(
          S.list()
            .title('Dish')
            .items([
              S.listItem()
                .title('Lunch')
                .child(S.document().schemaType('lunch').documentId('lunch')),
            ]),
        ),
    ]);
