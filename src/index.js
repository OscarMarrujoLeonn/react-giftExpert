import React from 'react';
import './index.css';
import { GifExpertApp } from './GifExpertApp';
import { createRoot } from 'react-dom/client';

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GifExpertApp />
);
*/
const rootDiv = document.querySelector('#root');
const root  = createRoot(rootDiv);

root.render( <GifExpertApp/> );

