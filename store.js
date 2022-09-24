import { nextStore as createStore } from "react-boilerplate-redux-saga-hoc";
import { AuthSaga, AuthReducer } from "./app/Shared/hoc/Authentication";
import { DashSaga, DashReducer } from "./app/Shared/hoc/Dashboard";
const INITIAL_STATE = {};
export const Store = createStore({
  saga: [AuthSaga, DashSaga],
  reducer: [AuthReducer, DashReducer],
});
export const store = Store(INITIAL_STATE);
