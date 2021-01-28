import React, { useRef, useState } from 'react';
import { Form } from '@unform/web';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import Button from '../src/components/Button';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';

import db from '../db.json';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 5%;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const formRef = useRef(null);

  const router = useRouter();
  const [name, setName] = useState('');

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(data) {
    console.log(data);

    router.push(`/quiz?name=${data.name}`);
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Os Cavaleiros do Zodíaco</h1>
          </Widget.Header>
          <Widget.Content>
            <p>
              Teste seus conhecimentos sobre Os Cavaleiros do Zodíaco 
              e divirta-se criando o seu AluraQuiz!
            </p>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input name="name" onChange={handleChange} placeholder="Diz aí seu nome" type="text"/>
              <Button color="gold" disabled={name.length === 0} type="submit">
                Jogar
              </Button>
            </Form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes da galera</h1>
            <p>
              Dá uma olhada nesses quizes incríveis que 
              o pessoal da Imersão React Next.js fez:
            </p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/omariosouto" />
    </QuizBackground>
  );
}
