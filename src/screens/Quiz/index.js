import React, { useEffect, useState } from 'react';

import Footer from '../../components/Footer';
import GitHubCorner from '../../components/GitHubCorner';
import QuizBackground from '../../components/QuizBackground';
import QuizContainer from '../../components/QuizContainer';
import QuizLogo from '../../components/QuizLogo';
import LoadingWidget from '../../components/Widget/LoadingWidget';
import ResultWidget from '../../components/Widget/ResultWidget';
import QuestionWidget from '../../components/Widget/QuestionWidget';

const screenStates = {
    QUIZ: 'QUIZ',
    LOADING: 'LOADING',
    RESULT: 'RESULT',
};

export default function Quiz({ background, questions }) {
    const [screenState, setScreenState] = useState(screenStates.LOADING);

    const [questionIndex, setQuestionIndex] = useState(0);
    const [results, setResults] = useState([]);

    const questionsLength = questions.length;
    const question = questions[questionIndex];

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
        <QuizBackground backgroundImage={background}>
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