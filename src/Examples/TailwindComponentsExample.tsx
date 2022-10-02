import React from 'react';
import {
    Checkbox,
    DateField,
    DateTimeField,
    PasswordField,
    RadioButton,
    SelectField,
    TextArea,
    TextField,
    TimeField
} from 'wb-forms-tailwindcss';
import {ShowStateButton} from '../Components/ShowStateButton';
import {Form} from 'wb-forms';
import {useTailwindStylesheet} from '../Hooks/UseTailwindStylesheet';

export const TailwindComponentsExample: React.FC = () => {
    useTailwindStylesheet();
    return <div className={'tailwind'}>
        <Form>
            <TextField name={'text'}/>
            <PasswordField name={'password'}/>
            <Checkbox name={'checkbox'}/>
            <RadioButton name={'radio'} orientation={'vertical'} options={[
                {value: '1', text: 'Option 1'},
                {value: '2', text: 'Option 2'},
            ]}/>
            <SelectField name={'select'} options={[
                {value: 1, text: 'Select Option 1'},
                {value: 2, text: 'Select Option 2'},
                {value: 3, text: 'Select Option 3'},
                {value: 4, text: 'Select Option 4'},
            ]}/>
            <DateField name={'date'}/>
            <TimeField name={'time'}/>
            <DateTimeField name={'datetime'}/>
            <TextArea name={'textarea'} rows={5}/>

            <ShowStateButton/>
        </Form>
    </div>;
};
