import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import BaselineStatus from '@/components/BaselineStatus';
import CodeBlock from '@/components/Codeblock';
import './LayerDemo.css';

interface LayerDemoProps extends HTMLAttributes<HTMLDivElement> {}

const LayerDemo: FC<LayerDemoProps> = ({ className, ...rest }) => {
    return (
        <div className={classNames(className, 'layer-demo')} {...rest}>
            <h2>CSS Cascade Layers</h2>
            <p>
                Using the @layer CSS at-rule we can declare cascade layers for
                our styles, allowing us finer grained control over the css
                cascade
            </p>
            <CodeBlock language="css">{
                /* language=css */ `
                @layer utilities {
                  .padding-sm {
                    padding: 0.5rem;
                  }
                
                  .padding-lg {
                    padding: 0.8rem;
                  }
                }
            `
            }</CodeBlock>

            <p>Layers can be created either with content, or as empty layers</p>
            <CodeBlock language="css">{
                /* language=css */ `
                @layer reset, default, themes, patterns, layouts, components, utilities;
            `
            }</CodeBlock>

            <p>
                Organizing styles in cascade layers allows us to overwrite
                styles from a lower layer with selectors that have a lower
                specificity
            </p>
            <CodeBlock language="css">{
                /* language=css */ `
                @layer reset {
                    .layer-demo {
                        :is(h1, h2, h3, h4, h5, h6, .headline) {
                            color: firebrick;
                        }
                    }
                }
                
                :is(h1, h2, h3, h4, h5, h6, .headline) {
                    color: initial;
                }
            `
            }</CodeBlock>

            <p>
                When importing styles from a file, we can add all of it&#39;s
                contents to a layer
            </p>
            <CodeBlock language="css">{
                /* language=css */ `
                @import "/styles/theme.css" layer(themes);
            `
            }</CodeBlock>

            <p>
                We can also use nesting to create child layers. The same rules
                for overwriting styles apply to child layers as they do for
                normal layers.
            </p>
            <CodeBlock language="css">{
                /* language=css */ `
                @layer framework {
                    @layer layout {
                    }
                }

                @layer framework {
                    p {
                        margin-block: 1rem;
                    }
                }

                @layer framework.layout {
                    body .main-grid p {
                        margin-block: 2rem;
                    }
                }
            `
            }</CodeBlock>

            <BaselineStatus
                headline="Baseline 2022- 93.57%"
                status="low"
                newlyAvailable
                chrome
                edge
                firefox
                safari
            >
                <p>
                    Since March 2022, this feature works across the latest
                    devices and browser versions. This feature might not work in
                    older devices or browsers.
                </p>
            </BaselineStatus>
        </div>
    );
};

export default LayerDemo;
