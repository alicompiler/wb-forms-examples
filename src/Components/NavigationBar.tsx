import React from 'react';
import {Link} from 'react-router-dom';

interface Props {
    items: { title: string, to: string }[];
    alignItems?: 'center' | 'start' | 'end'
}

export const NavigationBar: React.FC<Props> = (props) => {
    const {items} = props;
    const alignItems = props.alignItems ?? 'center';
    return <div className={`flex items-center justify-${alignItems} gap-2 py-2`}>
        {
            items.map((item, index) =>
                <NavigationLink key={index} target={item.to} title={item.title}/>
            )
        }
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
