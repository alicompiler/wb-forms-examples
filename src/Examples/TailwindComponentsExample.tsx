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
            <label>Text</label>
            <TextField name={'text'}/>

            <br/>
            <label>Password</label>
            <PasswordField name={'password'}/>

            <br/>
            <Checkbox name={'checkbox'}/>
            <label>Checkbox</label>
            <br/>

            <br/>
            <RadioButton name={'radio'} orientation={'vertical'} options={[
                {value: '1', text: 'Option 1'},
                {value: '2', text: 'Option 2'},
            ]}/>

            <br/>
            <SelectField name={'select'} options={[
                {value: 1, text: 'Select Option 1'},
                {value: 2, text: 'Select Option 2'},
                {value: 3, text: 'Select Option 3'},
                {value: 4, text: 'Select Option 4'},
            ]}/>

            <br/>
            <label>Date</label>
            <DateField name={'date'}/>

            <br/>
            <label>Time</label>
            <TimeField name={'time'}/>

            <br/>
            <label>Datetime</label>
            <DateTimeField name={'datetime'}/>

            <br/>
            <label>TextArea</label>
            <TextArea name={'textarea'} rows={5}/>

            <br/>
            <ShowStateButton/>
        </Form>
    </div>;
};
