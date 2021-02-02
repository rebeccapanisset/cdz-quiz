import React, { Children } from 'react';
import NextLink from 'next/link';

export default function Link({ children, href, ...rest }) {
    return (
        <NextLink href={href} passHref>
            <a {...rest}>
                {children}
            </a>
        </NextLink>
    );
}