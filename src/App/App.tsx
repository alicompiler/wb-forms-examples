import React from 'react';
import {RoutesWrapper} from './RoutesWrapper';
import {NavigationBar} from '../Components/NavigationBar';

export const App: React.FC = () => {
    return <div style={{margin: '0 auto', width: 1200}}>
        <div className={'tailwind'}>
            <NavigationBar items={[
                {title: 'Examples', to: '/examples'},
                {title: 'Form Builder', to: '/builder'},
            ]}/>
        </div>
        <div>
            <RoutesWrapper/>
        </div>
    </div>;
};
