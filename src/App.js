import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import './pages/homepage/homepage.styles.scss';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth } from './firebase/firebase.utils';
import Header from './components/header/header.component'

import { auth } from './firebase/firebase.utils'

function App() {

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let unSubscribeFromAll = auth.onAuthStateChanged( user => {
      setCurrentUser(user)
      console.log(user)
    })
    return function cleanup() {
      unSubscribeFromAll()
    };
  })

  return (
    <div >
     <Header currentUser={currentUser}/>
     <Switch>
       <Route exact path='/' component={HomePage}/>
       <Route exact path='/shop' component={ShopPage}/>
       <Route exact path='/signin' component={SignInAndSignUpPage}/>
     </Switch>
    </div>
  );
}

export default App;
