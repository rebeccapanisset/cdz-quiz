import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    button {
        border: none;
        border-radius: 4px;

        background: ${({ theme }) => theme.colors.secondary};
        color: ${({ color, theme }) => { 
            return color ? color : theme.colors.contrastText;
        }};

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