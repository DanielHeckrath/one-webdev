import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import BaselineStatus from '@/components/BaselineStatus';
import CodeBlock from '@/components/Codeblock';
import './HasDemo.css';

interface HasDemoProps extends HTMLAttributes<HTMLDivElement> {}

const HasDemo: FC<HasDemoProps> = ({ className, ...rest }) => {
    return (
        <div className={classNames(className, 'has-demo')} {...rest}>
            <h2>:has()</h2>
            <img src="/one-webdev/has-meme.jpeg" alt=":has() meme" />
            <p>
                Using the :has() pseudo-class function allows us to select a
                parent or a previous sibling element in relevance to a relative
                selector list
            </p>
            <CodeBlock language="css">{
                /* language=css */ `
                :has(<relative-selector-list>) {
                    /* ... */
                }
            `
            }</CodeBlock>

            <section className="parent-demo">
                <h3>Selecting a parent element</h3>
                <CodeBlock language="css">{
                    /* language=css */ `
                    article:has(img) {
                        color-scheme: dark;
                        background-color: var(--background-color);
                        color: var(--primary-foreground-color);
                    }
                `
                }</CodeBlock>

                <article>
                    <h3>This is a text only article that contains no images</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eveniet, molestias velit. Accusamus aperiam
                        aspernatur debitis dolores, enim eveniet exercitationem
                        fugiat laboriosam libero minus nam odit placeat rerum
                        sapiente, vero voluptatem.
                    </p>
                </article>

                <article>
                    <h3>
                        This is an article that contains both text an images
                    </h3>
                    <img
                        src="https://picsum.photos/400/300"
                        alt="Placeholder image"
                    />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Cum ex ipsum modi numquam praesentium saepe sunt.
                        Ab adipisci dicta dolor ea expedita, harum, iste nemo
                        nulla qui rem, tempora temporibus.
                    </p>
                </article>
            </section>

            <section className="previous-sibling-demo">
                <h3>Selecting previous sibling elements</h3>
                <CodeBlock language="css">{
                    /* language=css */ `
                    :is(h1, h2, h3) {
                        margin: 0 0 1rem 0;
                    }
    
                    :is(h1, h2, h3):has(+ :is(h2, h3, h4)) {
                        margin: 0 0 0.25rem 0;
                    }
                `
                }</CodeBlock>

                <article>
                    <h1>Morning Times</h1>
                    <h2>Delivering you news every morning</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                </article>
                <article>
                    <h1>Morning Times</h1>
                    <h2>Delivering you news every morning</h2>
                    <h3>8:00 am</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                </article>
            </section>

            <section>
                <h3>Logical Operations</h3>
                <CodeBlock language="css">{
                    /* language=css */ `
                    body:has(video, audio) {
                        /* styles to apply if the content contains audio OR video */
                    }
                    body:has(video):has(audio) {
                        /* styles to apply if the content contains both audio AND video */
                    }
                `
                }</CodeBlock>
            </section>

            <section className="sibling-tree-demo">
                <h3>Selecting child based on child in sibling tree</h3>
                <CodeBlock language="css">{
                    /* language=css */ `
                    article h3 {
                        font-size: 2rem;
                    }
                        
                    article:has(img) h3 {
                        font-size: 1.75rem;
                    }
                `
                }</CodeBlock>
                <article>
                    <div className="text-container">
                        <h3>Article Headline</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Accusamus commodi culpa deleniti et facere
                            labore necessitatibus quos reprehenderit velit?
                            Atque culpa dicta dignissimos et fuga illum nesciunt
                            quae sequi totam.
                        </p>
                    </div>
                </article>

                <article>
                    <div className="text-container">
                        <h3>Article Headline</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Accusamus commodi culpa deleniti et facere
                            labore necessitatibus quos reprehenderit velit?
                            Atque culpa dicta dignissimos et fuga illum nesciunt
                            quae sequi totam.
                        </p>
                    </div>
                    <picture>
                        <img
                            src="https://picsum.photos/400/300"
                            alt="Placeholder image"
                        />
                    </picture>
                </article>
            </section>

            <BaselineStatus
                headline="Baseline 2023 - 91.81%"
                status="low"
                newlyAvailable
                chrome
                edge
                firefox
                safari
            >
                <p>
                    Since December 2023, this feature works across the latest
                    devices and browser versions. This feature might not work in
                    older devices or browsers.
                </p>
            </BaselineStatus>
        </div>
    );
};

export default HasDemo;
