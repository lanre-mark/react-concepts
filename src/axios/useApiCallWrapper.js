import { useState } from "react";
import { API_STATUS } from "./constants";
import { ServiceClient } from "./ApiCallWrapper";
import { LoginAuthorization } from "../auth0/now/AuthContextProvider";

export function useApiServiceClient({ describe }) {
  const { authToken, isAuthenticated } = LoginAuthorization();
  const [apiStatus, setApiStatus] = useState(API_STATUS.SERVICE_IDLE);
  const [apiResponse, setApiResponse] = useState(null);
  const [payload, setPayload] = useState(null);
  const [modelType, setModelType] = useState("");

  const apiClient = new ServiceClient({
    userToken: authToken,
    isAuthenticated,
    setPayload,
    setApiResponse,
    setApiStatus,
    describe,
  });
  const resetSets = async (model) => {
    await setModelType(model);
    await setPayload(null);
    await setApiResponse(null);
  };

  return { resetSets, apiClient, payload, apiResponse, apiStatus, modelType };
}
