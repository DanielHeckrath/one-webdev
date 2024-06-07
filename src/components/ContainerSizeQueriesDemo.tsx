import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import BaselineStatus from '@/components/BaselineStatus';
import CodeBlock from '@/components/Codeblock';
import './ContainerSizeQueriesDemo.css';
import Teaser from '@/components/Teaser';

interface ContainerSizeQueriesDemoProps
    extends HTMLAttributes<HTMLDivElement> {}

const ContainerSizeQueriesDemo: FC<ContainerSizeQueriesDemoProps> = ({
    className,
    ...rest
}) => {
    return (
        <div
            className={classNames(className, 'container-size-queries-demo')}
            {...rest}
        >
            <h2>Container Size Queries</h2>
            <p>
                Container size queries allow us to query the dimensions of a
                container similar to how we can query the window size using
                media queries.
            </p>
            <h3>Setup containment context</h3>
            <CodeBlock language="css">{
                /* language=css */ `
                .post {
                    container-type: inline-size | size | normal;
                }
            `
            }</CodeBlock>
            <p>
                It should be noted that setting a container type automatically
                applies{' '}
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Using_CSS_containment">
                    containment
                </a>{' '}
                to the element.
            </p>
            <ul>
                <li>
                    <code>inline-size</code> - Inline dimensions can be queried.
                    Applies layout, style and inline-size containment.
                </li>
                <li>
                    <code>size</code> - Inline and block dimensions can be
                    queried. Applies layout, style and size containment.
                </li>
                <li>
                    <code>normal</code> - Element is not a query container for
                    size queries, but remains a container for style queries.
                </li>
            </ul>

            <p>Within a size container the following new units are available</p>
            <ul>
                <li>cqw: 1% of a query container&#39;s width</li>
                <li>cqh: 1% of a query container&#39;s height</li>
                <li>cqi: 1% of a query container&#39;s inline size</li>
                <li>cqb: 1% of a query container&#39;s block size</li>
                <li>cqmin: The smaller value of either cqi or cqb</li>
                <li>cqmax: The larger value of either cqi or cqb</li>
            </ul>

            <CodeBlock language="css">{
                /* language=css */ `
                h2 {
                    font-size: max(1.25em, 1.13em + 2cqi);

                    @container (width > 400px) {
                        font-size: max(1.5em, 1.23em + 2cqi);
                    }
                }
            `
            }</CodeBlock>

            <article className="post mb-6 mt-10">
                <Teaser image={true} />
            </article>
            <section className="posts">
                <article className="post">
                    <Teaser />
                </article>
                <article className="post">
                    <Teaser />
                </article>
                <article className="post">
                    <Teaser />
                </article>
            </section>

            <h3>Container names</h3>
            <p>
                We can give names to containers to allow us to create more
                specific queries. This is useful if we have to query attributes
                of a container that is not a direct parent of our element
            </p>

            <div className="size-container">
                <div className="child-1">
                    <h2>Headline Child 1</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aliquam consequuntur doloremque, eligendi iste
                        perferendis soluta tempora voluptates! Alias consectetur
                        culpa cumque delectus dignissimos dolorum, modi numquam,
                        quia sint tenetur, vitae!
                    </p>
                </div>
                <div className="child-2">
                    <h2>Headline Child 2</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Accusamus adipisci architecto aut consequatur,
                        culpa doloribus error esse est, magnam molestias nisi
                        numquam optio quam quod repellat repudiandae sapiente
                        unde voluptates.
                    </p>
                </div>
            </div>

            <BaselineStatus
                headline="Baseline 2023 - 90.88% + 0.04% = 90.92%"
                status="low"
                newlyAvailable
                chrome
                edge
                firefox
                safari
            >
                <p>
                    Since February 2023, this feature works across the latest
                    devices and browser versions. This feature might not work in
                    older devices or browsers.
                </p>
            </BaselineStatus>
        </div>
    );
};

export default ContainerSizeQueriesDemo;
