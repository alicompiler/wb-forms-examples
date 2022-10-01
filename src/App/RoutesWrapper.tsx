import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {BuilderPage} from '../Builder/BuilderPage';
import {ExamplesPage} from '../Examples/ExamplesPage';

export const RoutesWrapper: React.FC = () => {
    return <Routes>
            <Route path={'/'} element={<div/>}/>
            <Route path={'examples'} element={<ExamplesPage />} />
            <Route path={'builder'} element={<BuilderPage />} />
        </Routes>;
};
