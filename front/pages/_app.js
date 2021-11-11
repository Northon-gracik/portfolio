//import { Provider } from "react-redux";
//import { PersistGate } from "redux-persist/integration/react";

//import { persistor, store } from "../src/store";
//import { AuthProvider } from '../src/components/authContext';

import '../styles/globals.css';
import '../styles/index.css';
import '../styles/store.css';
import '../styles/cart.css';

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}
export default MyApp

    //   <AuthProvider>
    //   <Provider store={store} > 
    //      <PersistGate loading={undefined} persistor={persistor}> 
    //      </PersistGate >
    //   </Provider >
    // </AuthProvider > 


