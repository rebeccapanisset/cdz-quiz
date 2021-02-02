import React, { useRef, useState } from 'react';
import { Form } from '@unform/web';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import Button from '../src/components/Button';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Link from '../src/components/Link';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';

import db from '../db.json';

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
			<Widget 
				as={motion.section}
				transition={{ 
					delay: 0,
					duration: 0.5 
				}}
				variants={{
					show: { 
						opacity: 1,
						y: '0' 
					},
					hidden: { 
						opacity: 0,
						y: '100%'
					},
				}}
				initial="hidden"
				animate="show"
			>
				<Widget.Header>
					<h1>Os Cavaleiros do Zodíaco</h1>
				</Widget.Header>
				<Widget.Content>
					<p>
						Teste seus conhecimentos sobre Os Cavaleiros do Zodíaco 
						e divirta-se criando o seu AluraQuiz!
					</p>
					<Form ref={formRef} onSubmit={handleSubmit}>
						<Input 
							name="name" 
							onChange={handleChange} 
							placeholder="Diz aí seu nome" 
							type="text"
						/>
						<Button 
							color="blackText" 
							disabled={name.length === 0} 
							type="submit"
						>
							Jogar
						</Button>
					</Form>
				</Widget.Content>
			</Widget>
			<Widget
				as={motion.section}
				transition={{ 
					delay: 0.5,
					duration: 0.5 
				}}
				variants={{
					show: { 
						opacity: 1,
						y: '0' 
					},
					hidden: { 
						opacity: 0,
						y: '100%'
					},
				}}
				initial="hidden"
				animate="show"
			>
				<Widget.Content>
					<h1>Quizes da galera</h1>
					<p>
						Dá uma olhada nesses quizes incríveis que 
						o pessoal da Imersão React Next.js fez:
					</p>
					<ul>
						{db.external.map((link) => {
							const [repoName, user] = link
								.replace(/\//g, '')
								.replace('http:', '')
								.replace('.vercel.app', '')
								.split('.');
							
							return (
								<li key={link}>
									<Widget.Topic 
										as={Link}
										href={`/quiz/${repoName}___${user}`}
									>
										{`${user}/${repoName}`}
									</Widget.Topic>
								</li>
							);
						})}
					</ul>
				</Widget.Content>
			</Widget>
			<Footer 
				as={motion.footer}
				transition={{ 
					delay: 1,
					duration: 0.5 
				}}
				variants={{
					show: { 
						opacity: 1,
						y: '0' 
					},
					hidden: { 
						opacity: 0,
						y: '100%'
					},
				}}
				initial="hidden"
				animate="show"
			/>
		</QuizContainer>
		<GitHubCorner projectUrl="https://github.com/rebeccapanisset" />
    </QuizBackground>
	);
}
