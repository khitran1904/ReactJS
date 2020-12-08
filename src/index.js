import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './style/style';
import {createStore} from  'redux'; // component tạo store
import {Provider} from 'react-redux'; // component kết nối react vs redux lại với nhau
import rootReducer from './redux/reducers';



const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
