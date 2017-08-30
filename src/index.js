import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Container} from 'cerebral/react'
import controller from './controller'

injectTapEventPlugin();

render((
  <Container controller={controller}>
    <App /> 
  </Container>
), document.getElementById('root'));

registerServiceWorker();
