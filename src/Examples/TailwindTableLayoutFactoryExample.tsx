import React from 'react';
import {useTailwindStylesheet} from '../Hooks/UseTailwindStylesheet';
import {TableLayoutFormFactory} from 'wb-forms-tailwindcss';
import {FormOptions} from 'wb-forms';
import {LogServiceFactory} from '../Shared/LogServiceFactory';
import {TableLayoutExtraOptions} from 'wb-forms-tailwindcss/build/Factories/TableLayoutFormFactory';

export const TailwindTableLayoutFactoryExample: React.FC = () => {
    useTailwindStylesheet();
    const factory = new TableLayoutFormFactory();
    const configuration: FormOptions<TableLayoutExtraOptions> = {
        fields: {
            name: {
                type: 'text',
                options: {
                    name: 'name',
                    label: 'Name'
                }
            },
            email: {
                type: 'text',
                options: {
                    name: 'email',
                    label: 'Email'
                }
            },
            department: {
                type: 'select',
                options: {
                    name: 'Department',
                    options: [
                        {text: 'IT', value: 1},
                        {text: 'Sales', value: 2},
                        {text: 'Marketing', value: 3},
                        {text: 'Finance', value: 4},
                    ]
                }
            },
            message: {
                type: 'textarea',
                options: {
                    name: 'message',
                    rows: 5,
                    label: 'Message',
                    placeholder: 'Say Something'
                }
            }
        },
        formOptions: {
            serviceProvider: (dispatch, state, props) => new LogServiceFactory(state, dispatch, props)
        },
        extraOptions: {
            button: {
                text: 'CLICK ME'
            },
            labelWidth: 160,
            labelAlignment: 'start'
        }
    };
    return <div className={'tailwind'}>
        {
            factory.create(configuration)
        }
    </div>;
};
