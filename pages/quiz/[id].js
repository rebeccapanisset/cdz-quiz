import React from 'react';
import { ThemeProvider } from 'styled-components';

import Quiz from '../../src/screens/Quiz';

export default function GuysQuiz({ externalDb }) {
    return (
        <ThemeProvider theme={externalDb.theme}>
            <Quiz background={externalDb.bg} questions={externalDb.questions} />
        </ThemeProvider>
    );
}

export async function getServerSideProps(context) {
    const [repoName, user] = context.query.id.split('___');

    try {
        const externalDb = 
            await fetch(`https://${repoName}.${user}.vercel.app/api/db`)
                .then((res) => {
                    if (res.ok) {
                        return res.json();
                    }
                    
                    throw new Error('Deu ruim!!');
                })
                .then((res) => res)
                // .catch((error) => {
                //     console.log(error);
                // });
        
        return {
            props: {
                externalDb,
            },
        };
    } catch (error) {
        throw new Error(error);
    }
}