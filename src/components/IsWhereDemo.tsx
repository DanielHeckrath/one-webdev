import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import BaselineStatus from '@/components/BaselineStatus';
import CodeBlock from '@/components/Codeblock';
import './IsWhereDemo.css';

interface IsWhereDemoProps extends HTMLAttributes<HTMLDivElement> {}

const IsWhereDemo: FC<IsWhereDemoProps> = ({ className, ...rest }) => {
    return (
        <>
            <div className={classNames(className, 'is-where-demo')} {...rest}>
                <h2>:is() and :where()</h2>
                <p>
                    The :is() and :where() pseudo-class functions take a list
                    selector and select any element that can be matched by one
                    of the selectors.
                </p>
                <h3>Example 1</h3>
                <CodeBlock language="css">{
                    /* language=css */ `
                    /* 3-deep (or more) unordered lists use a square */
                    ol ol ul,
                    ol ul ul,
                    ol menu ul,
                    ol dir ul,
                    ol ol menu,
                    ol ul menu,
                    ol menu menu,
                    ol dir menu,
                    ol ol dir,
                    ol ul dir,
                    ol menu dir,
                    ol dir dir,
                    ul ol ul,
                    ul ul ul,
                    ul menu ul,
                    ul dir ul,
                    ul ol menu,
                    ul ul menu,
                    ul menu menu,
                    ul dir menu,
                    ul ol dir,
                    ul ul dir,
                    ul menu dir,
                    ul dir dir,
                    menu ol ul,
                    menu ul ul,
                    menu menu ul,
                    menu dir ul,
                    menu ol menu,
                    menu ul menu,
                    menu menu menu,
                    menu dir menu,
                    menu ol dir,
                    menu ul dir,
                    menu menu dir,
                    menu dir dir,
                    dir ol ul,
                    dir ul ul,
                    dir menu ul,
                    dir dir ul,
                    dir ol menu,
                    dir ul menu,
                    dir menu menu,
                    dir dir menu,
                    dir ol dir,
                    dir ul dir,
                    dir menu dir,
                    dir dir dir {
                        list-style-type: square;
                    }
                `
                }</CodeBlock>
                <CodeBlock language="css">{
                    /* language=css */ `
                    /* 3-deep (or more) unordered lists use a square */
                    :is(ol, ul, menu, dir) :is(ol, ul, menu, dir) :is(ul, menu, dir) {
                        list-style-type: square;
                    }
                `
                }</CodeBlock>
                <h3>Example 2</h3>
                <CodeBlock language="css">{
                    /* language=css */ `
                    /* Level 0 */
                    h1 {
                        font-size: 30px;
                    }

                    /* Level 1 */
                    section h1,
                    article h1,
                    aside h1,
                    nav h1 {
                        font-size: 25px;
                    }

                    /* Level 2 */
                    section section h1,
                    section article h1,
                    section aside h1,
                    section nav h1,
                    article section h1,
                    article article h1,
                    article aside h1,
                    article nav h1,
                    aside section h1,
                    aside article h1,
                    aside aside h1,
                    aside nav h1,
                    nav section h1,
                    nav article h1,
                    nav aside h1,
                    nav nav h1 {
                        font-size: 20px;
                    }

                    /* Level 3 */
                    /* don't even think about it! */
                `
                }</CodeBlock>
                <CodeBlock language="css">{
                    /* language=css */ `
                    /* Level 0 */
                    h1 {
                        font-size: 30px;
                    }
                    /* Level 1 */
                    :is(section, article, aside, nav) h1 {
                        font-size: 25px;
                    }
                    /* Level 2 */
                    :is(section, article, aside, nav) :is(section, article, aside, nav) h1 {
                        font-size: 20px;
                    }
                    /* Level 3 */
                    :is(section, article, aside, nav)
                      :is(section, article, aside, nav)
                      :is(section, article, aside, nav)
                      h1 {
                        font-size: 15px;
                    }
                `
                }</CodeBlock>
                <h2>Forgiving selector parsing</h2>
                <p>Both :is() and :where() accept a forgiving selector list.</p>
                <CodeBlock language="css">{
                    /* language=css */ `
                    :where(:valid, :unsupported) {
                        /* Block is applied to :valid */
                    }
                `
                }</CodeBlock>
                <CodeBlock language="css">{
                    /* language=css */ `
                    :valid,
                    :unsupported {
                        /* Whole block becomes invalid */
                    }
                `
                }</CodeBlock>
                <h2>Difference between :is() and :where()</h2>
                <CodeBlock language="css">{
                    /* language=css */ `
                    :is(section.is-styling, aside.is-styling, footer.is-styling) a {
                        color: red;
                    }

                    :where(section.where-styling, aside.where-styling, footer.where-styling) a {
                        color: orange;
                    }

                    footer a {
                        color: blue;
                    }
                `
                }</CodeBlock>
                <article>
                    <h2>:is()-styled links</h2>
                    <section className="is-styling">
                        <p>
                            Here is my main content. This{' '}
                            <a href="https://mozilla.org">contains a link</a>.
                        </p>
                    </section>

                    <aside className="is-styling">
                        <p>
                            Here is my aside content. This{' '}
                            <a href="https://developer.mozilla.org">
                                also contains a link
                            </a>
                            .
                        </p>
                    </aside>

                    <footer className="is-styling">
                        <p>
                            This is my footer, also containing{' '}
                            <a href="https://github.com/mdn">a link</a>.
                        </p>
                    </footer>
                </article>

                <article>
                    <h2>:where()-styled links</h2>
                    <section className="where-styling">
                        <p>
                            Here is my main content. This{' '}
                            <a href="https://mozilla.org">contains a link</a>.
                        </p>
                    </section>

                    <aside className="where-styling">
                        <p>
                            Here is my aside content. This{' '}
                            <a href="https://developer.mozilla.org">
                                also contains a link
                            </a>
                            .
                        </p>
                    </aside>

                    <footer className="where-styling">
                        <p>
                            This is my footer, also containing{' '}
                            <a href="https://github.com/mdn">a link</a>.
                        </p>
                    </footer>
                </article>

                <BaselineStatus
                    headline="Baseline Widely Available - 95.37% + 1.57% = 96.94%"
                    status="high"
                    chrome
                    edge
                    firefox
                    safari
                >
                    <p>
                        This feature is well established and works across many
                        devices and browser versions. It’s been available across
                        browsers since January 2021.
                    </p>
                </BaselineStatus>
                <BaselineStatus
                    headline="Baseline Widely Available - 94.48%"
                    status="high"
                    chrome
                    edge
                    firefox
                    safari
                >
                    <p>
                        This feature is well established and works across many
                        devices and browser versions. It’s been available across
                        browsers since January 2021.
                    </p>
                </BaselineStatus>
            </div>
        </>
    );
};

export default IsWhereDemo;
