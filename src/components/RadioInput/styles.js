import styled from 'styled-components';
import db from '../../../db.json';

export const Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block;

  &:hover,
  &:focus {
    opacity: .5;
  }

  &[data-selected="true"] {
    background-color: ${({ theme }) => theme.colors.secondary};
    
    &[data-status="SUCCESS"] {
      background-color: ${({ theme }) => theme.colors.success};
    }

    &[data-status="ERROR"] {
      background-color: ${({ theme }) => theme.colors.wrong};
    }
  }

  input {
	  display: none;
  }

`;