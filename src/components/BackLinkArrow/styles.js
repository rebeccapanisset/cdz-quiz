import styled from 'styled-components';

import Link from '../Link';

export const StyledLink = styled(Link)`
    width: 24px;
    height: 24px;
    display: inline-block;

    transition: .3s;
    &:hover {
        opacity: .5;
    }
`;

export const SVG = styled.svg`
    vertical-align: middle;
`;