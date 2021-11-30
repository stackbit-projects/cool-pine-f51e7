import * as React from 'react';
import classNames from 'classnames';

export default function Markquee(props) {
    const { label } = props;
    const annotationPrefix = props['data-sb-field-path'] || '';
    const annotations = [
        `${annotationPrefix}`,
        `${annotationPrefix}.label`
    ];

    return (
        <marquee
            className={classNames('sb-component', cssClasses)}
            data-sb-field-path={annotations.join(' ').trim()}
        >
            {label}
        </marquee>
    );
}
