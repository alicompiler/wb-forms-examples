import React from 'react';
import {Dropdown, Form} from 'wb-forms';
import {useField} from 'wb-forms/build/Field/Hooks';
import {BasicComponentsExample} from './BasicComponentsExample';
import {TailwindComponentsExample} from './TailwindComponentsExample';
import {TailwindSimpleLayoutFactoryExample} from './TailwindSimpleLayoutFactoryExample';
import {TailwindTableLayoutFactoryExample} from './TailwindTableLayoutFactoryExample';
import {CustomValidatorExample} from './CustomValidatorExample';

const ExampleNotReady: React.FC = () => <h1 style={{textAlign: 'center'}}>Example Not Ready Yet</h1>;
const ExampleNotSelected: React.FC = () => <h1 style={{textAlign: 'center'}}>Example Not Selected</h1>;

const options: Record<string, React.ComponentType> = {
    '-': ExampleNotSelected,
    'Basic Components': BasicComponentsExample,
    'Tailwind Components': TailwindComponentsExample,
    'Tailwind - Simple Layout Factory': TailwindSimpleLayoutFactoryExample,
    'Tailwind - Table Layout Factory': TailwindTableLayoutFactoryExample,
    'Custom Validator': CustomValidatorExample,
    'X Clear Values Example': ExampleNotReady,
    'X DefaultsProvider': ExampleNotReady,
    'X Custom Reducer': ExampleNotReady,
    'X Initial Values': ExampleNotReady,
    'X Custom Service Factory': ExampleNotReady,
    'X Login Example': ExampleNotReady,
    'X User Registration Example': ExampleNotReady,
    'X Form Review Example': ExampleNotReady
};


export const ExamplesPage: React.FC = () => {
    const dropdownOptions = Object.keys(options);
    return <div>
        <Form>
            <div className={'examples-toolbox'}>
                <div className={'examples-toolbox-select-wrapper'}>
                    <label>SELECT EXAMPLE:</label>
                    <Dropdown options={dropdownOptions} name={'example'}/>
                </div>
            </div>
            <ExampleView/>
        </Form>
    </div>;
};


const ExampleView: React.FC = () => {
    const exampleField = useField('example');
    if (exampleField == null) {
        return null;
    }
    const ViewComponent = options[exampleField.value] ?? ExampleNotSelected;
    return <div style={{border: '1px dashed #444', padding: 16}}>
        <ViewComponent/>
    </div>;
};
