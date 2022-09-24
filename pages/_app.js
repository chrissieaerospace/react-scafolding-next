import App from "next/app";
import { Provider } from "react-redux";
import { withRedux, withReduxSaga } from "react-boilerplate-redux-saga-hoc";
import { Store } from "../store";
import "../styles/globals.css";
function MyApp({ Component, pageProps, store }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const store = appContext.ctx ? appContext.ctx.store : appContext.store;
  const appProps = await App.getInitialProps(appContext);
  const isServer = appContext.ctx
    ? appContext.ctx.isServer
    : appContext.isServer;
  return { ...appProps, store, isServer };
};

export default withRedux(Store)(MyApp);
