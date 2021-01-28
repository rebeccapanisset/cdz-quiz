import styled, { css } from 'styled-components';

import db from '../../../db.json';

const color = db.theme.colors;

export const Container = styled.div`
    position: relative;
    display: flex;

    border: 1px solid ${color.gray};
    border-radius: 4px;

    margin-bottom: 25px;

    /* ${(props) => 
        props.isFocused &&
        css`
            border: 1px solid ${color.gold};
        `
    } */

    input {
        background: transparent;
        border: none;
        border-radius: 4px;
        color: ${color.contrastText};
        padding: 8px 0 8px 8px;
        flex: 1;
    }
`;