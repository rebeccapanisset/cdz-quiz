import styled, { css } from 'styled-components';

export const Container = styled.div`
    position: relative;
    display: flex;

    border: 1px solid ${({ theme }) => theme.colors.gray};
    border-radius: 4px;

    margin-bottom: 25px;

    /* ${(props) => 
        props.isFocused &&
        css`
            border: 1px solid ${({ theme }) => theme.colors.secondary};
        `
    } */

    input {
        background: transparent;
        border: none;
        border-radius: 4px;
        color: ${({ theme }) => theme.colors.contrastText};
        padding: 8px 0 8px 8px;
        flex: 1;
    }
`;