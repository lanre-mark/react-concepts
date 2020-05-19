import axios from "axios";
import { MAIN_API, API_STATUS } from "./constants";

export class ServiceClient {
  constructor({
    userToken,
    isAuthenticated,
    setPayload,
    setApiResponse,
    setApiStatus,
    describe,
  }) {
    this._token = userToken;
    this._isAuthenticated = isAuthenticated;
    this._setPayload = setPayload;
    this._setApiResponse = setApiResponse;
    this._setApiStatus = setApiStatus;
    this._callDescriptor = describe;
    this.defaultOptions = {
      baseURL: MAIN_API,
      timeout: 5000,
    };
    this._client = axios.create(this.defaultOptions);
    // add headers
    this._client.interceptors.request.use(function (config) {
      config.headers["Content-Type"] = "application/json";
      config.headers["Accept"] = "application/json";
      config.headers["Authorization"] =
        userToken && isAuthenticated ? `Bearer ${userToken}` : null;
      return config;
    });
  }

  _onError = (error) => {
    const response = error.response;
    this._setApiStatus(API_STATUS.SERVICE_ERROR);
    if (response && response.statusText) {
      // dispatch Error's statusText
      // decorate error message beyond this
      // `${this._callDescriptor}: ${response.statusText}`
      // console.log("Dispatch the error here");
    }
    console.error(
      `${this._callDescriptor}[${
        response && response.status ? response.status : error
      }]`,
      response
    );
    this._setApiResponse(response);
    this._setPayload(response && response.data ? response.data : undefined);
    return response;
  };

  _onSuccess = (response) => {
    if (response.status < 200 || response.status >= 300) {
      this._setApiStatus(API_STATUS.SERVICE_ERROR);
      console.warn(
        `Warning ${this._callDescriptor}[${response.status}]`,
        response
      );
    } else {
      this._setApiStatus(API_STATUS.SERVICE_SUCCESS);
      if (process.env.NODE_ENV === "development") {
        console.log(`Success ${this._callDescriptor}[200]`, response);
      }
    }
    this._setApiResponse(response);
    this._setPayload(response.data);
    return response;
  };

  delete(route, conf = {}) {
    this._setApiStatus(API_STATUS.SERVICE_PENDING);
    return this._client
      .delete(route, conf)
      .then((res) => this._onSuccess(res))
      .catch(this._onError);
  }

  del(route, conf = {}) {
    return this.delete(route, conf);
  }

  get(route, conf = {}) {
    this._setApiStatus(API_STATUS.SERVICE_PENDING);
    return this._client
      .get(route, conf)
      .then((res) => this._onSuccess(res))
      .catch(this._onError);
  }

  put(route, data = {}, conf = {}) {
    this._setApiStatus(API_STATUS.SERVICE_PENDING);
    // build POST BODY
    // add method: "PATCH"
    return this._client
      .put(route, data, conf)
      .then((res) => this.onSuccess(res))
      .catch(this.onError);
  }

  patch(route, data = {}, conf = {}) {
    return this.put(route, data, conf);
  }

  post(route, data = {}, conf = {}) {
    this._setApiStatus(API_STATUS.SERVICE_PENDING);
    // build POST BODY
    // add method: "POST"
    return this._client
      .post(route, data, conf)
      .then((res) => this._onSuccess(res))
      .catch(this._onError);
  }
}

// class ApiClient {
//   constructor(baseUrl = null) {
//     this.axiosInstance = getClient(baseUrl);
//   }

//   get(url, conf = {}) {
//     return this.axiosInstance
//       .get(url, conf)
//       .then((response) => Promise.resolve(response))
//       .catch((error) => Promise.reject(error));
//   }

//   delete(url, conf = {}) {
//     return this.axiosInstance
//       .delete(url, conf)
//       .then((response) => Promise.resolve(response))
//       .catch((error) => Promise.reject(error));
//   }

//   post(url, data = {}, conf = {}) {
//     return this.axiosInstance
//       .post(url, data, conf)
//       .then((response) => Promise.resolve(response))
//       .catch((error) => Promise.reject(error));
//   }

//   put(url, data = {}, conf = {}) {
//     return this.axiosInstance
//       .put(url, data, conf)
//       .then((response) => Promise.resolve(response))
//       .catch((error) => Promise.reject(error));
//   }

//   patch(url, data = {}, conf = {}) {
//     return this.axiosInstance
//       .patch(url, data, conf)
//       .then((response) => Promise.resolve(response))
//       .catch((error) => Promise.reject(error));
//   }
// }

// export { ApiClient };
