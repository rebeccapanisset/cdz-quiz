import styled from 'styled-components';

import { theme } from '../../../db.json';

const color = theme.colors;

export const Container = styled.div`
    display: flex;

    button {
        border: none;
        border-radius: 4px;

        background: ${(props) => props.color};
        /* color: ${color.black} */

        align-items: center;
        display: flex;
        flex: 1;
        justify-content: center;

        padding: 8px 10px;
        margin: 0 3px;
        height: 40px;

        &:hover {
            opacity: 0.8;
        }
    }
`;