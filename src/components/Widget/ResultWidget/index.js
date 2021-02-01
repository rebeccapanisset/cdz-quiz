import React from 'react';

import Widget from '../../Widget';

export default function ResultWidget({ results, total }) {
    const avg = total / 2; //averange
    // const result = results.reduce((sum, res) => res ? sum + 1 : sum, 0);
    const result = results.filter((res) => res).length;


    return (
        <Widget>
            <Widget.Header>
                <h3>
                    {result > avg ? 'Parabéns!!!' : 'Sinto Muito...'}
                </h3>
            </Widget.Header>
            <Widget.Content>
                <p>Você acertou {result} de {total} perguntas!!!</p>
                <ul>
                    {results.map((result, index) => (
                        <li key={index}>
                            {`Questão ${index + 1} - ${
                                result ? 'Certa' : 'Errada'
                            }`}
                        </li>
                    ))}
                </ul>
            </Widget.Content>
        </Widget>
    );
}