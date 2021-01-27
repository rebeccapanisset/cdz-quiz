import styled from 'styled-components';
import db from '../../../db.json';

const color = db.theme.colors;

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${color.gold};
  background-color: ${color.widgetBg};
  border-radius: 4px;
  overflow: hidden;

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background: linear-gradient(#FD8A02, #FED636, #FD8A02);
  
  * {
    margin: 0;
  }
  
  h1, h2, h3 {
    font-size: 23px;
    background: -webkit-linear-gradient(#2196f3, #8cc9f7, #2196f3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

export default Widget;