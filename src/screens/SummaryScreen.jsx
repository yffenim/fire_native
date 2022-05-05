import React, { useState, useEffect } from "react";
import { VStack, Center, Text, Box, Button, Dimensions } from "native-base";
// import DisplayButtons from '../containers/DisplayButtons';
// import DisplayMomentsList from '../containers/DisplayMomentsList';
// import HideDisplayButton from '../containers/HideDisplayButton';
// import DisplaySecondsList from '../containers/DisplaySecondsList';
// import { getRequest, getAuthenticatedRequest } from '../functions/MomentsApiRequests.jsx';
// import {CSVLink, CSVDownload} from 'react-csv';
import l from "../../helpers/consolelog.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TabView, SceneMap } from 'react-native-tab-view';
import { View, useWindowDimensions } from 'react-native';

// https://www.npmjs.com/package/react-native-tab-view
