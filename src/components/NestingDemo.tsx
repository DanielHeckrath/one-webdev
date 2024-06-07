import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import BaselineStatus from '@/components/BaselineStatus';
import CodeBlock from '@/components/Codeblock';

interface NestingDemoProps extends HTMLAttributes<HTMLDivElement> {}

const NestingDemo: FC<NestingDemoProps> = ({ className, ...rest }) => {
    return (
        <div className={classNames(className)} {...rest}>
            <h2>Nesting</h2>
            <p>
                Similar to the nesting feature available in CSS preprocessors
                like SASS, we can now use nesting directly in CSS. The main
                difference being that the nesting is evaluated by the browser at
                runtime.
            </p>
            <CodeBlock language="css">{
                /* language=css */ `
input {
    /* styles for input not in a label  */
    border: tomato 2px solid;
}
label {
    /* styles for label */
    font-family: system-ui;
    font-size: 1.25rem;
    input {
        /* styles for input in a label  */
        border: blue 2px dashed;
    }
}
            `
            }</CodeBlock>

            <h3>Child Selectors</h3>
            <p>
                You can use CSS nesting to create child selectors of a parent,
                which in turn can be used to target child elements of specific
                parents. This can be done with or without the{' '}
                <code>& nesting selector</code>.
            </p>
            <CodeBlock language="css">{
                /* language=css */ `
/* Without nesting selector */
parent {
    /* parent styles */
    child {
        /* child of parent styles */
    }
}

/* With nesting selector */
parent {
    /* parent styles */
    & child {
        /* child of parent styles */
    }
}

/* the browser will parse both of these as */
parent {
    /* parent styles */
}
parent child {
    /* child of parent styles */
}
            `
            }</CodeBlock>

            <h3>Combinators</h3>
            <p>
                CSS Combinators can also be used with or without the & nesting
                selector.
            </p>
            <CodeBlock language="html">{`
<h2>Heading</h2>
<p>This is the first paragraph.</p>
<p>This is the second paragraph.</p>
            `}</CodeBlock>
            <CodeBlock language="css">{
                /* language=css */ `
h2 {
  color: tomato;
  + p {
    color: white;
    background-color: black;
  }
}
/* this code can also be written with the & nesting selector */
/* 
h2 {
  color: tomato;
  & + p {
    color: white;
    background-color: black;
  }
}
*/
            `
            }</CodeBlock>

            <h3>Compound Selectors</h3>
            <p>
                When using compound selectors in nested CSS you have to use the
                & nesting selector. This is because the browser will
                automatically add whitespace between selectors that do not use
                the & nesting selector.
            </p>
            <CodeBlock language="css">{
                /* language=css */ `
.a {
  /* styles for element with class="a" */
  .b {
    /* styles for element with class="b" which is a descendant of class="a" */
  }
  &.b {
    /* styles for element with class="a b" */
  }
}

/* the browser parses this as */
.a {
  /* styles for element with class="a" */
}
.a .b {
  /* styles for element with class="b" which is a descendant of class="a" */
}
.a.b {
  /* styles for element with class="a b" */
}
            `
            }</CodeBlock>

            <h3>Appended nesting selector</h3>
            <p>
                The & nesting selector can also be appended to a nested selector
                which has the effect of reversing the context.
            </p>
            <CodeBlock language="html">{`
<div class="bar">
  <span class="foo">text</span>
</div>
            `}</CodeBlock>
            <CodeBlock language="css">{
                /* language=css */ `
.foo {
    /* .foo styles */
    .bar & {
        /* .bar .foo styles */
    }
}
            `
            }</CodeBlock>

            <h3>at-rules that can be nested</h3>
            <ul>
                <li>@media</li>
                <li>@supports</li>
                <li>@layer</li>
                <li>@scope</li>
                <li>@container</li>
            </ul>

            <h3>Concatenation (is not possible)</h3>
            <CodeBlock language="css">{
                /* language=css */ `
.component {
    &__child-element {
    }
}
/* In Sass this becomes */
.component__child-element {
}
            `
            }</CodeBlock>

            <BaselineStatus
                headline="Baseline 2023 - 86.93%"
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

export default NestingDemo;
