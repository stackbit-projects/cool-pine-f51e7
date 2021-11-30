import * as React from 'react';
import classNames from 'classnames';

export default function Marquee(props) {
    const { label } = props;
    const annotationPrefix = props['data-sb-field-path'] || '';
    const annotations = [
        `${annotationPrefix}`,
        `${annotationPrefix}.label`
    ];
    const cssClasses = props.className || null;

    return (
        <marquee
            className={classNames('sb-component', cssClasses)}
            data-sb-field-path={annotations.join(' ').trim()}
        >
            <h2>{label}</h2>
        </marquee>
    );
}
