import { StructureResolver } from 'sanity/structure';
import { IoMdDocument } from 'react-icons/io';
import { MdFastfood, MdDirectionsBike } from 'react-icons/md';

export const customStructure: StructureResolver = (S) =>
  S.list()
    .id('Base')
    .title('Base')
    .items([
      S.listItem()
        .title('Sider')
        .icon(IoMdDocument)
        .child(
          S.documentList()
            .filter('_type == "page" || _type == "menu" || _type == "cateringPage"')
            .id('sider'),
        ),
      S.divider(),
      S.listItem()
        .title('Meny')
        .icon(MdFastfood)
        .child(S.documentList().filter('_type == "dish"').id('dish')),
      S.divider(),
      S.listItem()
        .title('Catering')
        .icon(MdDirectionsBike)
        .child(S.documentList().filter('_type == "cateringDish"').id('catering')),

      S.divider(),
      S.listItem()
        .title('Footer')
        .child(S.documentList().filter('_type == "footer" ').id('footer')),
    ]);
