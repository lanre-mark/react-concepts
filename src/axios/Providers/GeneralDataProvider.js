import React, { createContext, useContext } from "react";
import { useApiServiceClient } from "../useApiCallWrapper";
// import { API_STATUS } from "../constants";

const GeneralDataContext = createContext(null);

export const GeneralDataAdapter = () => useContext(GeneralDataContext);

export function GeneralDataContextProvider({ children }) {
  const getGeneralData = useGeneralDataAdapter();

  return (
    <GeneralDataContext.Provider value={{ getGeneralData }}>
      {children}
    </GeneralDataContext.Provider>
  );
}

const useGeneralDataAdapter = () => {
  const {
    resetSets,
    apiClient,
    payload,
    apiResponse,
    apiStatus,
    modelType,
  } = useApiServiceClient({
    describe: "generaldata",
  });

  async function getFeatureFlags() {
    await resetSets("storyflag");
    return await apiClient.get(`/admin/storyFlag`);
  }

  async function getAgeRanges() {
    await resetSets("agerange");
    return await apiClient.get(`/data/ageRange`);
  }
  async function getGender() {
    await resetSets("gender");
    return await apiClient.get(`/data/gender`);
  }

  return {
    resetSets,
    payload,
    getFeatureFlags,
    getAgeRanges,
    getGender,
    apiResponse,
    apiStatus,
    modelType,
  };
};
