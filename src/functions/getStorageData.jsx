import React from 'react';
import l from "../../helpers/consolelog.js";
import AsyncStorage from "@react-native-async-storage/async-storage";


// helpers for getting async storage data 

export const getString = async (key="access-token") => {
    try {
      const value = await AsyncStorage.getItem('access-token')
      if(value !== null) {
        // l("access-token from ExportScreen: ", value);
        // return value
      }
      } catch(e) {
        l("error with async storage: ", e);
      }
};

export const getHeaders = async ({setheaders}) => {
    try {
      const jsonValue = await AsyncStorage.getItem('requestHeaders')
        if(jsonValue !== null) {
        let value = JSON.parse(jsonValue)
        l("value is: ", value);
        setHeaders(value);
      }
      } catch(e) {
        l("error with async storage: ", e);
    }
  };
