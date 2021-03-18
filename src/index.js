import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Ap from './Ap';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
	<>
  <BrowserRouter>
    <Ap />
  </BrowserRouter>
  </>,
  document.getElementById('root')
);

