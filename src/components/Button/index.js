import React from 'react';

import { Container } from './styles';

import { theme } from '../../../db.json';

export default function Button({ color, children, type, ...rest }){
    const colors = theme.colors;
    
    return (
        <Container color={colors[color]}>
            <button type={type} {...rest}>
                { children }
            </button>
        </Container>
    );
}