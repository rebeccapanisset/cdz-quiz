import React, { useEffect, useRef, useState } from 'react';
import { Form } from '@unform/web';

import Button from '../src/components/Button';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';

import db from '../db.json';

function LoadingWidget() {
    return (
        <Widget>
            <Widget.Header>
                <h3>
                    Carregando...
                </h3>
            </Widget.Header>
            <Widget.Content>
                [Desafio do Loading]
            </Widget.Content>
        </Widget>
    );
}

function ResultWidget() {
    return (
        <Widget>
            <Widget.Header>
                <h3>
                    Parabéns!!!
                </h3>
            </Widget.Header>
            <Widget.Content>
                Você acertou X de X perguntas!!!
            </Widget.Content>
        </Widget>
    );
}

function QuestionWidget({ onSubmit, question, questionIndex, questionsLength }) {
    const formRef = useRef(null);
    
    const questionId = `question_${questionIndex}`;

    return (
        <Widget>
            <Widget.Header>
                {/* <BackLinkArrow href="/" /> */}
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

                <Form ref={formRef} onSubmit={onSubmit}>
                    {question.alternatives.map((alternative, index) => {
                        const alternativeId = `alternative_${index}`;

                        return (
                            <Widget.Topic as="label" htmlFor={alternativeId}>
                                <input 
                                    id={alternativeId} 
                                    name={questionId} 
                                    style={{ display: 'none' }} 
                                    type="radio"
                                />
                                {alternative}
                            </Widget.Topic>
                        );
                    })}

                    <Button color="gold" type="submit">
                        Confirmar
                    </Button>
                </Form>
            </Widget.Content>
        </Widget>
    );
}

const screenStates = {
    QUIZ: 'QUIZ',
    LOADING: 'LOADING',
    RESULT: 'RESULT',
};

export default function Quiz() {
    const [screenState, setScreenState] = useState(screenStates.LOADING);

    const questionsLength = db.questions.length;
    const [questionIndex, setQuestionIndex] = useState(0);
    const question = db.questions[questionIndex];

    function handleSubmit() {
        const nextQuestion = questionIndex + 1;

        if (nextQuestion < questionsLength) {
            setQuestionIndex(nextQuestion);
        } else {
            setScreenState(screenStates.RESULT);
        }
    }

    // React chama de Efeitos || Effects
    // nasce === didMount
    // atualizado === willUpdate
    // morre === willUnmount

    useEffect(() => {
        setTimeout(() => {
            setScreenState(screenStates.QUIZ);
        }, 1 * 1000);
    }, []);

    return (
        <QuizBackground backgroundImage={db.bg}>
            <QuizContainer>
                <QuizLogo />
                {screenState === screenStates.QUIZ && (
                    <QuestionWidget 
                        question={question} 
                        questionIndex={questionIndex} 
                        questionsLength={questionsLength} 
                        onSubmit={handleSubmit}
                    />
                )}
                {screenState === screenStates.LOADING && <LoadingWidget />}
                {screenState === screenStates.RESULT && <ResultWidget />}
                <Footer />
            </QuizContainer>
            <GitHubCorner projectUrl="https://github.com/omariosouto" />
        </QuizBackground>
    );
}