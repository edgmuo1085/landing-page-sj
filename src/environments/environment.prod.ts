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
  URL_API: 'https://general2-https.ddns.net/Mesa-1/',
  URL_CORREO: 'https://sjasociadossas.com/',
  rutaImg: 'imagenes/',
  rutaDoc: 'documentos/',
  rutaImgPhp: 'imagenes',
  rutaDocPhp: 'documentos',
};
