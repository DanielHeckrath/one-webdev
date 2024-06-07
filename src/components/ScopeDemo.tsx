import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import BaselineStatus from '@/components/BaselineStatus';
import CodeBlock from '@/components/Codeblock';
import DemoArticle from '@/components/DemoArticle';

interface ScopeDemoProps extends HTMLAttributes<HTMLDivElement> {}

const ScopeDemo: FC<ScopeDemoProps> = ({ className, ...rest }) => {
    return (
        <>
            <div className={classNames(className)} {...rest}>
                <h2>Scoping</h2>
                <p>
                    Using the @scope CSS at-rule allows us to select elements in
                    specific DOM subtrees, without having to resort to overly
                    specific and hard to overwrite selectors
                </p>
                <CodeBlock language="css">{
                    /* language=css */ `
                    @scope (scope root) to (scope limit) {
                      rulesets
                    }
                `
                }</CodeBlock>
                <CodeBlock language="html">{
                    /* language=html */ `
                    <parent-element>
                        <style>
                            @scope {
                                rulesets
                            }
                        </style>
                    </parent-element>
                `
                }</CodeBlock>
                <h3>Use Case</h3>
                <p>Given the following DOM structure</p>
                <CodeBlock>{`
                    body
                    └─ article.feature
                       ├─ section.article-hero
                       │  ├─ h2
                       │  └─ img
                       │
                       ├─ section.article-body
                       │  ├─ h3
                       │  ├─ p
                       │  ├─ img
                       │  ├─ p
                       │  └─ figure
                       │     ├─ img
                       │     └─ figcaption
                       │
                       └─ footer
                          ├─ p
                          └─ img
                `}</CodeBlock>
                <p>
                    If we want to apply styles to the image in the article body,
                    but only if it is within a featured article and not
                    contained in a figure, then we have the following options
                </p>
                <ol>
                    <li>
                        Add specific class to the img (eg.{' '}
                        <code>.feature .article-body__image</code>)
                    </li>
                    <li>
                        Write a specific selector (eg.{' '}
                        <code>.feature &gt; .article-body &gt; img</code>)
                    </li>
                </ol>
                <p>
                    Using @scope we can create a selector that targets exactly
                    that element, without creating very specific selectors.
                </p>
                <CodeBlock language="css">{
                    /* language=css */ `
                    @scope (.article-body) to (figure) {
                        img {
                            width: 100%;
                            aspect-ratio: 16/9;
                            object-fit: contain;
                            border: 5px solid black;
                            background-color: goldenrod;
                        }
                    }
                `
                }</CodeBlock>
            </div>
            <DemoArticle className="full-width mb-10" />
            <div className={classNames(className)}>
                <p>
                    While @scope allows us to isolate the application of styles,
                    we have to keep in mind that the applied styles are not
                    completely isolated as they are with shadow DOM.
                </p>
                <h3>
                    The <code>:scope</code> pseudo-class
                </h3>
                <p>
                    Within the context of a @scope block, we can use the :scope
                    pseudo-class to represent the scope root.
                </p>
                <ul>
                    <li>
                        A scope limit can use :scope to specify a specific
                        relationship requirement between the scope limit and
                        root.
                        <CodeBlock language="css">{
                            /* language=css */ `
                            /* figure is only a limit when it is a direct child of the :scope */
                            @scope (.article-body) to (:scope > figure) { ... }
                        `
                        }</CodeBlock>
                    </li>
                    <li>
                        A scope limit can reference elements outside the scope
                        root using :scope.
                        <CodeBlock language="css">{
                            /* language=css */ `
                            /* figure is only a limit when the :scope is inside .feature */
                            @scope (.article-body) to (.feature :scope figure) { ... }
                        `
                        }</CodeBlock>
                    </li>
                    <li>Scoped style rules can&#39;t escape the subtree.</li>
                    <li>
                        The scope root and limit can be defined using selector
                        lists
                    </li>
                </ul>
                <h3>Specificity</h3>
                <ul>
                    <li>
                        :scope has the same specificity as any other
                        pseudo-class (0-1-0)
                    </li>
                    <li>
                        Using & within scope represents the scope selector and
                        it&#39;s specificity is calculated as the selector
                        wrapped in :is
                    </li>
                </ul>
                <BaselineStatus
                    headline="Limited Availability - 75.94%"
                    status="limited"
                    chrome
                    edge
                    safari
                />
            </div>
        </>
    );
};

export default ScopeDemo;
