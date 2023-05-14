import {
  parametrosSelect,
  requisitosPropiedades,
  nombresDocumentosAvaluoHipoteca,
  validacionPatterns,
  parametrosInmuebles,
} from './constants';

const constants = {
  ...parametrosSelect,
  ...requisitosPropiedades,
  ...validacionPatterns,
  ...parametrosInmuebles,
  ...nombresDocumentosAvaluoHipoteca,
};


export const environment = {
  production: true,
  ...constants,
  URL_API: 'https://sjasociadossas.com/',
  //URL_API: 'https://catastro.rionegro.gov.co/',
  //URL_API: 'http://192.168.20.49:8081/',
  //URL_API: 'http://44.203.200.178:8563/',
  rutaImg: 'imagenes/',
  rutaDoc: 'documentos/',
  rutaImgPhp: 'imagenes',
  rutaDocPhp: 'documentos',

};
