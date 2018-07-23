import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Jobs from './components/Jobs/Jobs.js';
import Header from './components/navigation/Header/Header.js';
import registerServiceWorker from './registerServiceWorker';

const content = 
    <div>
        <Header/>
        <Jobs/>
    </div>

ReactDOM.render(content, document.getElementById('root'));
registerServiceWorker();
