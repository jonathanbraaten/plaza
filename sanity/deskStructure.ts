import { StructureResolver } from 'sanity/structure';
import { PiBowlFood, PiForkKnife } from 'react-icons/pi';

export const customStructure: StructureResolver = (S) =>
  S.list()
    .title('Dokumenter')
    .items([
      S.listItem()
        .title('Sider')
        .child(
          S.list()
            .title('Sider')
            .items([
              S.listItem().title('Forside').child(S.documentTypeList('page')),
              S.listItem().title('Meny').child(S.documentTypeList('menu')),
            ]),
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['lunch', 'burgers', 'pizza', 'kidsMenu', 'dessert', 'page', 'menu', 'dish'].includes(
            listItem.getId() as string,
          ),
      ),
      /*
      S.divider(),
      S.listItem()
        .title('Matretter')
        .icon(PiForkKnife)
        .child(
          S.list()
            .title('Kategorier')
            .items([
              S.listItem().icon(PiBowlFood).title('Lunsj').child(S.documentTypeList('lunch')),
              S.listItem().icon(PiBowlFood).title('Hamburger').child(S.documentTypeList('burgers')),
              S.listItem()
                .icon(PiBowlFood)
                .title('Pizza')
                .schemaType('pizza')
                .child(S.documentTypeList('pizza')),
              S.listItem()
                .icon(PiBowlFood)
                .title('Barnemeny')
                .schemaType('kidsMenu')
                .child(S.documentTypeList('kidsMenu')),
              S.listItem()
                .icon(PiBowlFood)
                .title('Desserter')
                .schemaType('dessert')
                .child(S.documentTypeList('dessert')),
            ]),
        ), */
    ]);
