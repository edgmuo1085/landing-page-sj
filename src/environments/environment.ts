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
  production: false,
  ...constants,
  
  URL_API: 'http://localhost:9099/mesa/',
  URL_CORREO: 'https://sjasociadossas.com/',
  rutaImg: 'imagenes_p/',
  rutaDoc: 'documentos_p/',
  rutaImgPhp: 'imagenes_p',
  rutaDocPhp: 'documentos_p',
};
