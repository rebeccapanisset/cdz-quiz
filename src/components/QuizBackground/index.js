import React from 'react';

import { Container } from './styles';

export default function QuizBackground({ backgroundImage, children }) {
    return(
        <Container backgroundImage={backgroundImage}>
            { children }
        </Container>
    );
}
