import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import  { Provider } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper';
import store from './store'

function MyApp({ Component, pageProps }) {
  return(<>
    <Provider store={store}>
        
          <Component {...pageProps} />
        
    </Provider>
    </>
  )
}


const makestore = () => store;
const wrapper = createWrapper(makestore);
export default wrapper.withRedux(MyApp);