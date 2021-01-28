import React, { useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

export default function Input({ name, ...rest }) {
    const inputRef = useRef(null);
    const { fieldName, defaultValue, registerField, error } = useField(name);

    const [isFocused, setFocused] = useState(false);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    return (
        <Container isFocused={isFocused}>
            <input 
                defaultValue={defaultValue} 
                id={name} 
                ref={inputRef} 
                onFocus={() => setFocused(true)}
                {...rest}
            />
        </Container>
    );
}