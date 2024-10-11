import blocks from './blocks';
import documents from './documents';
import embed from './embed';
import fieldTypes from './fieldTypes';

export const schemaTypes = [...documents, ...blocks, ...embed, ...fieldTypes];
