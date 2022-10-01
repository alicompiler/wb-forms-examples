import React, {useMemo, useState} from 'react';
import {useState as useFormState} from 'wb-core-provider/build/Hooks/Hooks';
import {State} from 'wb-forms';

export const ShowStateButton: React.FC = () => {
    const state = useFormState<State>();
    const [showCode, setShowCode] = useState(false);
    const keys = Object.keys(state.fields);
    const values = useMemo(() => {
        return keys.reduce((acc, value) => ({...acc, [value]: state.fields[value].value}), {});
    }, [state]);
    return <>
        <button onClick={() => setShowCode(!showCode)}>
            {showCode ? 'HIDE VALUES' : 'SHOW VALUES'}
        </button>
        {
            showCode &&
            <div style={{paddingTop: 16, paddingBottom: 16}}>
                <code style={{
                    whiteSpace: 'pre',
                    background: '#EEE',
                    padding: 8,
                    width: '100%',
                    display: 'block'
                }}>{JSON.stringify(values, null, 4)}</code>
            </div>
        }
    </>;
};
