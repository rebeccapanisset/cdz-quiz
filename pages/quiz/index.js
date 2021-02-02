import React, { useEffect, useRef, useState } from 'react';

import Quiz from '../../src/screens/Quiz';

import db from '../../db.json';

export default function MyQuiz() {
    return (
        <Quiz background={db.bg} questions={db.questions} />
    );
}