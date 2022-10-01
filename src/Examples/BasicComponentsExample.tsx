import React from 'react';
import {Checkbox, Dropdown, Form, PasswordField, RadioButton, TextField} from 'wb-forms';
import {ShowStateButton} from '../Components/ShowStateButton';

export const BasicComponentsExample: React.FC = () => {
    return <Form>
        <TextField name={'text'}/>
        <br/>
        <PasswordField name={'password'}/>
        <br/>
        <RadioButton options={['Option 1', 'Option 2', 'Option 3']} name={'radio'}/>
        <br/>
        <Checkbox name={'checkbox'} label={'checkbox'}/>
        <br/>
        <Dropdown options={['Dropdown Option 1', 'Dropdown Option 2', 'Dropdown Option 3']} name={'dropdown'}/>
        <br/>
        <ShowStateButton />
    </Form>;
};
