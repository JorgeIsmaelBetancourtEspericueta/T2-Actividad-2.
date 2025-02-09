/**
 * @typedef {Object} Usuario
 * @property {number} id
 * @property {string} email
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} avatar
 */

/**
 * @typedef {Object} Support
 * @property {string} url
 * @property {string} text
 */

/**
 * @typedef {Object} ReqRespUsuarioListado
 * @property {number} page
 * @property {number} per_page
 * @property {number} total
 * @property {number} total_pages
 * @property {Usuario[]} data
 * @property {Support} support
 */

/** 
 * Exportación de los modelos de datos para la respuesta de la API de usuarios 
 */
export const reqRespUsuarioListado = {
    page: 1,
    per_page: 6,
    total: 12,
    total_pages: 2,
    data: [
        {
            id: 1,
            email: "george.bluth@reqres.in",
            first_name: "George",
            last_name: "Bluth",
            avatar: "https://reqres.in/img/faces/1-image.jpg"
        },
        {
            id: 2,
            email: "janet.weaver@reqres.in",
            first_name: "Janet",
            last_name: "Weaver",
            avatar: "https://reqres.in/img/faces/2-image.jpg"
        }
    ],
    support: {
        url: "https://reqres.in/#support-heading",
        text: "For support, contact us at support@reqres.in."
    }
};
