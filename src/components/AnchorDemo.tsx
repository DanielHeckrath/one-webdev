import { ElementType, FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import './AnchorDemo.css';
import CodeBlock from '@/components/Codeblock';
import BaselineStatus from '@/components/BaselineStatus';

/* language=css */
const SCOPED_ANCHOR = `
li {
    anchor-scope: --anchor-el;
    
    button {
        anchor-name: --anchor-el;
    }
    
    .positioned-notice {
        position-anchor: --anchor-el;
    }
}
`.trim();

interface AnchorDemoProps extends HTMLAttributes<HTMLDivElement> {}

export interface AsProp<As extends ElementType = ElementType> {
    as?: As;
}

interface AnchorProps<As extends ElementType = ElementType>
    extends HTMLAttributes<HTMLDivElement>,
        AsProp<As> {
    name: string;
}

const Anchor: FC<AnchorProps> = ({ as, name, className, style, ...rest }) => {
    const anchorStyle: any = {
        'anchor-name': name,
    };
    const Component = as || 'div';
    return (
        <Component
            className={classNames('anchor', className)}
            style={{ ...style, ...anchorStyle }}
            {...rest}
        >
            <p>⚓︎</p>
        </Component>
    );
};

interface PositionedElementProps<As extends ElementType = ElementType>
    extends HTMLAttributes<HTMLDivElement>,
        AsProp<As> {
    anchor?: string;
}

const PositionedElement: FC<PositionedElementProps> = ({
    as,
    anchor,
    className,
    style,
    children,
    ...rest
}) => {
    const anchorStyle: any = {};
    if (anchor) {
        anchorStyle['position-anchor'] = anchor;
    }
    const Component = as || 'div';
    return (
        <Component
            className={classNames('positioned-element', className)}
            style={{ ...style, ...anchorStyle }}
            {...rest}
        >
            {children}
        </Component>
    );
};

const AnchorDemo: FC<AnchorDemoProps> = ({ className, ...rest }) => {
    return (
        <section className={classNames(className, 'popover-demo')} {...rest}>
            <h2>Anchors</h2>
            <h3>Creating anchors</h3>
            <p>
                Elements can be anchored to one another, by setting the
                anchor-name and position-anchor properties in CSS
            </p>

            <CodeBlock language="css">{
                /* language=css */ `
                .anchor-button {
                    anchor-name: --anchor-el;
                }
                
                .positioned-notice {
                    position-anchor: --anchor-el;
                    bottom: anchor(top);
                    left: anchor(right);
                }
            `
            }</CodeBlock>

            <Anchor name="--basic-anchor"></Anchor>
            <PositionedElement
                anchor="--basic-anchor"
                className="anchor-b-t anchor-l-r"
            >
                <h3>This is a positioned element</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    adipisci architecto asperiores blanditiis cumque, dolores
                    ducimus nam nostrum odit pariatur quae quod, repellat sed,
                    tempora totam vel veritatis voluptate voluptatum.
                </p>
            </PositionedElement>

            <h3>Explicit Anchors</h3>
            <CodeBlock language="css">{
                /* language=css */ `
                .anchor-button {
                    anchor-name: --anchor-el;
                }
                
                .positioned-notice {
                    top: anchor(--anchor-el top);
                    left: anchor(--anchor-el right);
                }
            `
            }</CodeBlock>

            <Anchor name="--explicit-anchor"></Anchor>
            <PositionedElement
                style={{
                    top: 'anchor(--explicit-anchor top)',
                    left: 'anchor(--explicit-anchor right)',
                }}
            >
                <h3>This is a positioned element</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    adipisci architecto asperiores blanditiis cumque, dolores
                    ducimus nam nostrum odit pariatur quae quod, repellat sed,
                    tempora totam vel veritatis voluptate voluptatum.
                </p>
            </PositionedElement>

            <h3>Positioning using inset-area</h3>
            <p>
                The positioned element can be placed relatively to the anchor by
                setting the inset-area property in CSS. This can be used as an
                alternative to setting the top/right/bottom/left properties. The
                following demo is available on{' '}
                <a href="https://anchor-tool.com">https://anchor-tool.com</a>
            </p>
            <iframe
                height="580"
                style={{ border: '2px solid dimgray', width: '100%' }}
                scrolling="no"
                src="https://anchor-tool.com"
                frameBorder="no"
                loading="lazy"
                data-title="Anchor tool"
            ></iframe>

            <h3>Positioning using anchor-center</h3>
            <p>
                In case we want to center the positioned element in relation to
                it&#39;s anchor, we can use the new <code>anchor-center</code>{' '}
                value which can be used with the justify-self, align-self,
                justify-items, and align-items properties
            </p>

            <h3>Using anchor with top-layer elements</h3>
            <Anchor
                name="--popover-anchor"
                as="button"
                popoverTarget="popover"
            />
            <PositionedElement
                anchor="--popover-anchor"
                id="popover"
                popover="auto"
                style={
                    {
                        position: 'fixed',
                        insetArea: 'bottom',
                        marginTop: '1rem',
                    } as any
                }
            >
                <h3>This is a positioned element</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    adipisci architecto asperiores blanditiis cumque, dolores
                    ducimus nam nostrum odit pariatur quae quod, repellat sed,
                    tempora totam vel veritatis voluptate voluptatum.
                </p>
            </PositionedElement>

            <h3>Reusing anchor names - Not yet supported</h3>

            <p>
                If the same anchor name is reused multiple times, then elements
                using the anchor use the last element visible to them in DOM
                order.
            </p>
            <p>
                We can restrict the visibility of anchors by setting the
                anchor-scope property on a the anchor, or one of it&#39;s parent
                elements to limit the visibility the scopes descendants
            </p>
            <CodeBlock language="css">{
                /* language=css */ `
                li {
                    anchor-scope: --anchor-el;
                    
                    button {
                        anchor-name: --anchor-el;
                    }
                    
                    .positioned-notice {
                        position-anchor: --anchor-el;
                    }
                }
            `
            }</CodeBlock>
            <p>
                Chrome intends to ship support for anchor-scope in 127{' '}
                <a href="https://groups.google.com/a/chromium.org/g/blink-dev/c/D2-NxrsMKe4/m/JgY2fBb7AQAJ">
                    https://groups.google.com/a/chromium.org/g/blink-dev/c/D2-NxrsMKe4/m/JgY2fBb7AQAJ
                </a>
            </p>

            <ul className="scoped-anchors">
                <li style={{ anchorScope: '--scoped-anchor' } as any}>
                    <Anchor
                        name="--scoped-anchor"
                        as="button"
                        popoverTarget="scoped-popover-1"
                        style={{
                            margin: 0,
                        }}
                    />
                    <PositionedElement
                        anchor="--scoped-anchor"
                        id="scoped-popover-1"
                        popover="auto"
                        style={
                            {
                                position: 'fixed',
                                insetArea: 'right',
                                marginLeft: '1rem',
                            } as any
                        }
                    >
                        <h3>This is a positioned element</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ad adipisci architecto asperiores blanditiis
                            cumque, dolores ducimus nam nostrum odit pariatur
                            quae quod, repellat sed, tempora totam vel veritatis
                            voluptate voluptatum.
                        </p>
                    </PositionedElement>
                </li>
                <li style={{ anchorScope: '--scoped-anchor' } as any}>
                    <Anchor
                        name="--scoped-anchor"
                        as="button"
                        popoverTarget="scoped-popover-2"
                        style={{
                            margin: 0,
                        }}
                    />
                    <PositionedElement
                        anchor="--scoped-anchor"
                        id="scoped-popover-2"
                        popover="auto"
                        style={
                            {
                                position: 'fixed',
                                insetArea: 'right',
                                marginLeft: '1rem',
                            } as any
                        }
                    >
                        <h3>This is a positioned element</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ad adipisci architecto asperiores blanditiis
                            cumque, dolores ducimus nam nostrum odit pariatur
                            quae quod, repellat sed, tempora totam vel veritatis
                            voluptate voluptatum.
                        </p>
                    </PositionedElement>
                </li>
                <li style={{ anchorScope: '--scoped-anchor' } as any}>
                    <Anchor
                        name="--scoped-anchor"
                        as="button"
                        popoverTarget="scoped-popover-3"
                        style={{
                            margin: 0,
                        }}
                    />
                    <PositionedElement
                        anchor="--scoped-anchor"
                        id="scoped-popover-3"
                        popover="auto"
                        style={
                            {
                                position: 'fixed',
                                insetArea: 'right',
                                marginLeft: '1rem',
                            } as any
                        }
                    >
                        <h3>This is a positioned element</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ad adipisci architecto asperiores blanditiis
                            cumque, dolores ducimus nam nostrum odit pariatur
                            quae quod, repellat sed, tempora totam vel veritatis
                            voluptate voluptatum.
                        </p>
                    </PositionedElement>
                </li>
            </ul>

            <h3>Availability</h3>
            <BaselineStatus
                headline="Limited Availability - 42.42%"
                chrome
                edge
            />
        </section>
    );
};

export default AnchorDemo;
