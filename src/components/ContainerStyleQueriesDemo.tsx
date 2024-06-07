import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import BaselineStatus from '@/components/BaselineStatus';
import CodeBlock from '@/components/Codeblock';
import './LayerDemo.css';

interface ContainerStyleQueriesDemoProps
    extends HTMLAttributes<HTMLDivElement> {}

const ContainerStyleQueriesDemo: FC<ContainerStyleQueriesDemoProps> = ({
    className,
    ...rest
}) => {
    return (
        <div
            className={classNames(className, 'container-style-queries-demo')}
            {...rest}
        >
            <h2>Container Style Queries</h2>
            <p>
                Container style queries allow us to query the computed styles of
                the container element in one or more <code>style()</code>{' '}
                functions. The syntax and logic used to combine style features
                into a single query are the same as for CSS feature queries.
            </p>
            <CodeBlock language="css">{
                /* language=css */ `
                @container style(<style-feature>),
                            not style(<style-feature>),
                            style(<style-feature>) and style(<style-feature>),
                            style(<style-feature>) or style(<style-feature>) {
                                /* <stylesheet> */
                            }
            `
            }</CodeBlock>

            <h3>Style queries for custom properties</h3>
            <p>
                Style queries for custom properties allow you to query the
                custom properties (CSS variables), of a parent element. There is
                a slightly different behaviour for registered vs. unregistered
                custom properties when querying for properties without a value.
            </p>
            <CodeBlock language="css">{
                /* language=css */ `
                :root {
                    --theme-color: rebeccapurple;
                }

                @container style(--theme-color) {
                    /* Matches everywhere, since the --theme-color is set on :root */
                }
            `
            }</CodeBlock>
            <CodeBlock language="css">{
                /* language=css */ `
                main {
                    --theme-color: rebeccapurple;
                }

                @container style(--theme-color) {
                    /* Only matches on descendants of main */
                }
            `
            }</CodeBlock>
            <CodeBlock language="css">{
                /* language=css */ `
                /* @property is not available in Firefox yet */
                @property --theme-color {
                    initial-value: rebeccapurple;
                    inherited: true;
                }

                :root {
                    --theme-color: rebeccapurple;
                }

                main {
                    --theme-color: blue;
                }

                @container style(--theme-color) {
                    /* Matches on descendants of main, as the property value is different from it's registered initial value */
                }
            `
            }</CodeBlock>

            <BaselineStatus
                headline="Limited Availability - 0% + 71.44% = 71.44%"
                status="limited"
                chrome
                edge
            ></BaselineStatus>

            <h5>Read More</h5>
            <ul>
                <li>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries">
                        MDN Documentation on Container Size and Style Queries
                    </a>
                </li>
                <li>
                    <a href="https://developer.chrome.com/docs/css-ui/style-queries">
                        Chrome Developer documentation on style queries
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default ContainerStyleQueriesDemo;
