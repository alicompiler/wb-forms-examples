import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {BasicElementsPage} from '../Basic/BasicElementsPage';
import {BuilderPage} from '../Builder/BuilderPage';
import {TailwindcssElementsPage} from '../Tailwindcss/TailwindcssElementsPage';

export const RoutesWrapper: React.FC = () => {
    return <Routes>
            <Route path={'/'} element={<div/>}/>
            <Route path={'basic'} element={<BasicElementsPage />} />
            <Route path={'tailwindcss'} element={<TailwindcssElementsPage />} />
            <Route path={'builder'} element={<BuilderPage />} />
        </Routes>;
};
