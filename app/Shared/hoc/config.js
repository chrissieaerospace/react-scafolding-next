import { HOC as HocConfigure } from "react-boilerplate-redux-saga-hoc";
import { newObject, typeOf } from "react-boilerplate-redux-saga-hoc/utils";
import {
  HOC_MAIN_SERVER_SIDE_CONFIG_DEFAULT,
  HOC_MAIN_CONFIG_KEY,
  ENV,
} from "react-boilerplate-redux-saga-hoc/constants";

import CREATE_REDUCER from "./createReducer";

const IS_DEVELOPMENT = process.env.NODE_ENV === ENV.DEVELOPMENT;

const EXTRA_CONFIG = {
  [HOC_MAIN_CONFIG_KEY.IS_DEVELOPMENT]: IS_DEVELOPMENT,
  [HOC_MAIN_CONFIG_KEY.CREATE_REDUCER]: CREATE_REDUCER,
};

export const HOC = HocConfigure(
  newObject(HOC_MAIN_SERVER_SIDE_CONFIG_DEFAULT, EXTRA_CONFIG)
);
