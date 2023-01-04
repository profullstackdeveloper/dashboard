import React from 'react';
import { ButtonTypes } from '../../utils/helpers';

interface PropTypes extends React.ButtonHTMLAttributes<unknown> {
    content: string;
    shape?: ButtonTypes;
}

export default function RoundButton({ content, shape }: PropTypes): JSX.Element {
    return (
        <button className={'rounded-full ' + (shape ? shape : '')}>
            {
                content
            }
        </button>
    )
}