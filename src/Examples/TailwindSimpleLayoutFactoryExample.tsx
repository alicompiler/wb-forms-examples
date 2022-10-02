import React from 'react';
import {useTailwindStylesheet} from '../Hooks/UseTailwindStylesheet';
import {SimpleFormFactory} from 'wb-forms-tailwindcss';
import {ExtraOptionsBase} from 'wb-forms-tailwindcss/build/Factories/FormFactoryBase';
import {FormOptions} from 'wb-forms';
import {LogServiceFactory} from '../Shared/LogServiceFactory';

export const TailwindSimpleLayoutFactoryExample: React.FC = () => {
    useTailwindStylesheet();
    const factory = new SimpleFormFactory();
    const configuration: FormOptions<ExtraOptionsBase> = {
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
            }
        }
    };
    return <div className={'tailwind'}>
        {
            factory.create(configuration)
        }
    </div>;
};
