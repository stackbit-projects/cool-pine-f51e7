import * as React from 'react';
import classNames from 'classnames';

export default function Marquee(props) {
    const { label } = props;
    const annotationPrefix = props['data-sb-field-path'] || '';
    const annotations = [
        `${annotationPrefix}`
    ];
    const cssClasses = props.className || null;

    return (
        <marquee
            className={classNames('sb-component', 'sb-component-section', 'sb-component-marquee', cssClasses)}
            data-sb-field-path={annotations.join(' ').trim()}
        >
            <h2 data-sb-field-path={`${annotationPrefix}.label`}>{label}</h2>
        </marquee>
    );
}
