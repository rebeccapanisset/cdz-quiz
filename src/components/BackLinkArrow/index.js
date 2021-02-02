import React from 'react';

import Link from '../Link';

import { StyledLink, SVG } from './styles';

export default function BackLinkArrow({ href }) {
    return (
        <StyledLink href={href}>
            <SVG 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                heigth="24" 
                viewBox="0 0 24 24"
                fill="none"
            >
                <path 
                    fillRule="evenodd" 
                    clipRule="evenodd" 
                    d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" 
                    fill="white" 
                    fillOpacity="0.87" 
                />
            </SVG>
        </StyledLink>
    );
}
