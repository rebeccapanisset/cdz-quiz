import React, { useEffect, useRef, useState } from 'react';

import Button from '../src/components/Button';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import RadioInput from '../src/components/RadioInput';
import Widget from '../src/components/Widget';
import LoadingWidget from '../src/components/Widget/LoadingWidget';
import ResultWidget from '../src/components/Widget/ResultWidget';
import QuestionWidget from '../src/components/Widget/QuestionWidget';

import db from '../db.json';

const screenStates = {
    QUIZ: 'QUIZ',
    LOADING: 'LOADING',
    RESULT: 'RESULT',
};

export default function Quiz() {
    const [screenState, setScreenState] = useState(screenStates.LOADING);

    const [questionIndex, setQuestionIndex] = useState(0);
    const [results, setResults] = useState([]);

    const questionsLength = db.questions.length;
    const question = db.questions[questionIndex];

    function addResult(result) {
        setResults([...results, result]);
    }

    function handleSubmit(data) {
        console.log(data);

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
                        addResult={addResult}
                    />
                )}
                {screenState === screenStates.LOADING && <LoadingWidget />}
                {screenState === screenStates.RESULT && 
                    <ResultWidget results={results} total={questionsLength} />}
                <Footer />
            </QuizContainer>
            <GitHubCorner projectUrl="https://github.com/omariosouto" />
        </QuizBackground>
    );
}