import React from 'react';
import {Dropdown, Form} from 'wb-forms';
import {useField} from 'wb-forms/build/Field/Hooks';
import {BasicComponentsExample} from './BasicComponentsExample';

const ExampleNotReady: React.FC = () => <h1 style={{textAlign: 'center'}}>Example Not Ready Yet</h1>;
const ExampleNotSelected: React.FC = () => <h1 style={{textAlign: 'center'}}>Example Not Selected</h1>;

const options: Record<string, React.ComponentType> = {
    '-': ExampleNotSelected,
    'X Basic Components': BasicComponentsExample,
    'X Tailwind Components': ExampleNotReady,
    'X Tailwind - Simple Layout Factory': ExampleNotReady,
    'X Tailwind - Table Layout Factory': ExampleNotReady,
    'X Custom Validator': ExampleNotReady,
    'X Clear Values Example': ExampleNotReady,
    'X DefaultsProvider': ExampleNotReady,
    'X Custom Reducer': ExampleNotReady,
    'X Initial Values': ExampleNotReady,
    'X Custom Service Factory': ExampleNotReady,
    'X Login Example': ExampleNotReady,
    'X User Registration Example': ExampleNotReady,
    'X Form Review Example': ExampleNotReady
};

const themes = [
    'Basic',
    'Tailwindcss'
];

export const ExamplesPage: React.FC = () => {
    const dropdownOptions = Object.keys(options);
    return <div>
        <Form>
            <div style={{padding: '16px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div style={{display: 'flex', gap: 8}}>
                    <label>SELECT EXAMPLE:</label>
                    <Dropdown options={dropdownOptions} name={'example'}/>
                </div>
                <div style={{display: 'flex', gap: 8}}>
                    <label>THEME:</label>
                    <Dropdown options={themes} name={'theme'} initialValue={'Basic'}/>
                </div>
            </div>
            <ExampleView/>
        </Form>
    </div>;
};


const ExampleView: React.FC = () => {
    const field = useField('example');
    if (!field) {
        return null;
    }
    const ViewComponent = options[field.value] ?? ExampleNotSelected;
    return <div style={{border: '1px dashed #444', padding: 16}}>
        <ViewComponent/>
    </div>;
};
