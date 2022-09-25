import React from 'react';
import {RoutesWrapper} from './RoutesWrapper';
import {Link} from 'react-router-dom';

export const App: React.FC = () => {
    return <div className={'container mx-auto'}>
        <div className={'flex items-center justify-center gap-2 py-2'}>
            <NavigationLink target={'/basic'} title={'Basic Elements'}/>
            <NavigationLink target={'/tailwindcss'} title={'Tailwindcss Elements'}/>
            <NavigationLink target={'/builder'} title={'Form Builder'}/>
        </div>
        <div>
            <RoutesWrapper/>
        </div>
    </div>;
};

const NavigationLink: React.FC<{ target: string, title: string }> = ({target, title}) => {
    return <Link to={target}>
        <button data-target={'/basic'}
                className={'p-2 w-200 border border-primary-400 rounded cursor-pointer hover:bg-primary-500 hover:text-white'}>
            {title}
        </button>
    </Link>;
};
