import React, {useCallback} from 'react';
import {FieldValidator, FieldValue, Form, ServiceFactory} from 'wb-forms';
import {TextField} from 'wb-forms-tailwindcss';
import {useTailwindStylesheet} from '../Hooks/UseTailwindStylesheet';
import {useServiceFactory} from 'wb-core-provider';

export const CustomValidatorExample: React.FC = () => {
    useTailwindStylesheet();
    return <div className={'tailwind'}>
        <Form fieldConfiguration={{
            field1: {
                validationRules: '^[a-z]+$'
            },
            field2: {
                fieldValidator: () => new ExactValueValidator(),
                validationRules: 'WebBox'
            },
            field3: {
                fieldValidator: () => new Between4And6LengthValidator(),
                validationRules: true
            }
        }}>
            <span className={'text-lg'}>This field uses the default validator (RegexValidator), only lower case characters are valid</span>
            <TextField name={'field1'} />
            <br/>

            <span className={'text-lg'}>uses custom validator, the field will be valid only when the value is &apos;WebBox&apos;</span>
            <TextField name={'field2'} />
            <br/>

            <span className={'text-lg'}>uses custom validator, the field will be valid only when the length between 4 and 6</span>
            <TextField name={'field3'} />
            <br/>

            <ValidateButton />
        </Form>
    </div>;
};

const ValidateButton: React.FC = () => {
    const serviceFactory = useServiceFactory<ServiceFactory>();
    const onValidate = useCallback(() => serviceFactory.createFormValidator().validate(), [serviceFactory]);
    return <button className={'bg-primary-500 text-white p-2 rounded'} onClick={onValidate}>
        Validate Form
    </button>;
};


class ExactValueValidator implements FieldValidator {
    validate(value: FieldValue, matchWord: string): boolean {
        return value === matchWord;
    }
}

class Between4And6LengthValidator implements FieldValidator {
    validate(value: FieldValue): boolean {
        return value.length >= 4 && value.length <= 6;
    }
}
