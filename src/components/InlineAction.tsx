import * as React from 'react';
import classNames from 'classnames';

export default function Action(props) {
    const { label } = props;
    const annotationPrefix = props['data-sb-field-path'] || '';
    const annotations = [
        `${annotationPrefix}`,
        `.label`
    ];
    const cssClasses = props.className || null;

    return (
        <div
            className={classNames('sb-component', 'sb-component-block', cssClasses)}
            data-sb-field-path={annotations.join(' ').trim()}
        >
            {label}
        </div>
    );
}
