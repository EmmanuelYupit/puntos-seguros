import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Map from './pages/Map';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import RegisterPoint from './pages/RegisterPoint';
import Point from './pages/Point';
import store from './store';
import theme from './config/theme';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App = () => (
  <IonApp>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/map" component={Map} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/register" component={Register} exact />
            <Route path="/profile" component={Profile} exact />
            <Route path="/register-point" component={RegisterPoint} exact />
            <Route path="/point/:id" component={Point} exact />
            <Route exact path="/" render={() => <Redirect to="/map" />} />
          </IonRouterOutlet>
        </IonReactRouter>
      </Provider>
    </ThemeProvider>
  </IonApp>
);

export default App;
