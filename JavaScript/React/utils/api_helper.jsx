import axios from "axios";
import Cookies from "js-cookie";
import { decryptJSON } from "./encrypt_json";

// Instance Axios untuk API_KKN
const apiKKN = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_KKN_LIVE,
});

const jwt = Cookies.get("jwt");

const setAuthorization = (jwt_input = null) => {
  if (jwt) {
    apiKKN.defaults.headers.common["Authorization"] = jwt;
    return true;
  } else if (jwt_input) {
    apiKKN.defaults.headers.common["Authorization"] = jwt_input;
    return true;
  } else {
    return false;
  }
}

const checkAuthorization = () => {
  if(jwt) {
    return true;
  } else {
    return false;
  }
}

// validasi header
if(jwt) apiKKN.defaults.headers.common["Authorization"] = jwt;

apiKKN.interceptors.response.use(
  function (response) {
    return response.data ? response.data : response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    let message;
    switch (error.rc) {
      case 500:
        message = "Internal Server Error";
        break;
      case 401:
        message = "Invalid credentials";
        break;
      case 403:
        message = "Invalid credentials";
        break;
      case 404:
        message = "Sorry! the data you are looking for could not be found";
        break;
      default:
        message = error.error_msg ? error.error_msg : error;
    }
    return Promise.reject(message);
  }
);



export { apiKKN, jwt, setAuthorization, checkAuthorization }

// const getDataAdmin = async () => {
//     try {
//         const response = await apiBKD.post('/admin/list', {
//             nipd: '',
//             nama: '',
//             status: ''
//         })
//         // if (response.rc === 403) {
//         //     dispatch(logoutUser());
//         // }
//         setDataAdmin(response.data)
//         console.log('user', response);
//     } catch (error) {
//         toast.error('Gagal memuat data admin, periksa jaringan Anda lalu coba lagi', {
//             position: toast.POSITION.TOP_RIGHT
//         });
//         console.log(error);
//     }
//     setPending(false);
// }