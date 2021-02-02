import React, { useEffect, useRef, useState } from 'react';
import { Form } from '@unform/web';

import BackLinkArrow from '../../BackLinkArrow';
import Button from '../../Button';
import RadioInput from '../../RadioInput';
import Widget from '../../Widget';

export default function QuestionWidget({ 
    addResult,
    onSubmit, 
    question, 
    questionIndex, 
    questionsLength 
}) {
    const formRef = useRef(null);

    const [options, setOptions] = useState([]);
    const [selectedAlternative, setSelectedAlternative] = useState(undefined);
    const [isSubmited, setIsSubmited] = useState(false);

    const isCorrect = selectedAlternative === question.answer;
    const hasSelectedAlternative = selectedAlternative !== undefined;
    
    function handleChange(event) {
        const value = parseInt(event.target.value);

        setSelectedAlternative(value);
    }

    function handleSubmit() {
        setIsSubmited(true);
        addResult(isCorrect);

        setTimeout(() => {
            onSubmit();
            setIsSubmited(false);
            setSelectedAlternative(undefined);
        }, 1000);
    }

    useEffect(() => {
        const alternatives = question.alternatives.map((alternative, index) => {
            return {
                id: index,
                label: alternative,
            };
        });

        setOptions(alternatives);
    }, [question]);

    return (
        <Widget>
            <Widget.Header>
                <BackLinkArrow href="/" />
                <h3>
                    {`Pergunta ${questionIndex + 1} de ${questionsLength}`}
                </h3>
            </Widget.Header>
            <img
                alt="Descrição"
                style={{
                    width: '100%',
                    height: '150px',
                    objectFit: 'cover',
                }}
                src={question.image}
            />
            <Widget.Content>
                <h2>
                    {question.title}
                </h2>
                <p>
                    {question.description}
                </p>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <RadioInput 
                        name="questionAlternatives" 
                        options={options} 
                        onChange={handleChange}
                        selected={selectedAlternative}
                        isSubmited={isSubmited}
                        isCorrect={isCorrect}
                    />
                    <Button 
                        color="blackText" 
                        disabled={!hasSelectedAlternative}
                        type="submit" 
                    >
                        Confirmar
                    </Button>
                    {isSubmited && isCorrect && <p>Você acertou!</p>}
                    {isSubmited && !isCorrect && <p>Você errou!</p>}
                </Form>
            </Widget.Content>
        </Widget>
    );
}