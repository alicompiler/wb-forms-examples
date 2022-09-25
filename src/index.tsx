import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <div className={'p-4'}>
            <h1 className={'text-primary-500 text-lg'}>wb-forms examples</h1>
        </div>
    </React.StrictMode>
);
