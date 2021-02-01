import React from 'react';

import { Container } from './styles';

export default function QuizContainer({ children }) {
    return (
        <Container>
            { children }
        </Container>
    );
}