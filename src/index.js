import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as firebase from 'firebase';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

var config = {
  apiKey: "AIzaSyBj5MhrV5qphOqx6zWwzYOR-gmXMhNgwEo",
  authDomain: "shoppingpostverify.firebaseapp.com",
  databaseURL: "https://shoppingpostverify.firebaseio.com",
  projectId: "shoppingpostverify",
  storageBucket: "shoppingpostverify.appspot.com",
  messagingSenderId: "573291164750"
};

firebase.initializeApp(config);

var messaging = firebase.messaging();

messaging.requestPermission().then(function(){
  console.log('permission');
  return messaging.getToken();
}).then(function(token) {
  console.log(token);
}).catch(function(err) {
   console.log('error');
});

messaging.onMessage(function(payload) {
  console.log("Message received. ", payload);
  // ...
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
