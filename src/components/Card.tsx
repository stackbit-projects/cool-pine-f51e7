import * as React from 'react';
import classNames from 'classnames';
import { getComponent } from '@stackbit/components/dist/components-registry';

export default function Card(props) {
    const { title, subtitle, actions = [] } = props;
    const cssClasses = props.className || null;

    const Action = getComponent('Action');

    return (
        <marquee
            className={classNames('sb-component', 'sb-component-section', 'sb-component-card', cssClasses)}
        >
            <h2 data-sb-field-path=".title">{title}</h2>
            {subtitle && <p data-sb-field-path=".subtitle">{subtitle}</p>}
            {actions.length && (
              <div>
                {actions.map((action, index) => <Action key={index} {...action} data-sb-field-path={`.${index}`} />)}
              </div>
            )}
        </marquee>
    );
}
