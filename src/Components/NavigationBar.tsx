import React from 'react';
import {Link} from 'react-router-dom';

interface Props {
    items: { title: string, to: string }[];
}

export const NavigationBar: React.FC<Props> = (props) => {
    const {items} = props;
    return <div className={'navigation-bar'}>
        {
            items.map((item, index) =>
                <NavigationLink key={index} target={item.to} title={item.title}/>
            )
        }
    </div>;
};

const NavigationLink: React.FC<{ target: string, title: string }> = ({target, title}) => {
    return <Link to={target}>
        <button className={'navigation-button'}>
            {title}
        </button>
    </Link>;
};
