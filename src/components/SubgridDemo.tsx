import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import BaselineStatus from '@/components/BaselineStatus';
import CodeBlock from '@/components/Codeblock';
import './LayerDemo.css';

interface SubgridDemoProps extends HTMLAttributes<HTMLDivElement> {}

const SubgridDemo: FC<SubgridDemoProps> = ({ className, ...rest }) => {
    return (
        <div className={classNames(className, 'subgrid-demo')} {...rest}>
            <h2>Grid & Subgrid</h2>
            <details>
                <summary>Grid Spec</summary>
                <h3>grid-template-rows/grid-template-columns</h3>
                <CodeBlock language="css">{
                    /* language=css */ `
                    /* Keyword value */
                    grid-template-rows: none;
    
                    /* <track-list> values */
                    grid-template-rows: 100px 1fr;
                    grid-template-rows: [linename] 100px;
                    grid-template-rows: [linename1] 100px [linename2 linename3];
                    grid-template-rows: minmax(100px, 1fr);
                    grid-template-rows: fit-content(40%);
                    grid-template-rows: repeat(3, 200px);
                    grid-template-rows: subgrid;
                    grid-template-rows: masonry;
    
                    /* <auto-track-list> values */
                    grid-template-rows: 200px repeat(auto-fill, 100px) 300px;
                    grid-template-rows:
                    minmax(100px, max-content)
                    repeat(auto-fill, 200px) 20%;
                    grid-template-rows:
                    [linename1] 100px [linename2]
                    repeat(auto-fit, [linename3 linename4] 300px)
                    100px;
                    grid-template-rows:
                    [linename1 linename2] 100px
                    repeat(auto-fit, [linename1] 300px) [linename3];
    
                    /* Global values */
                    grid-template-rows: inherit;
                    grid-template-rows: initial;
                    grid-template-rows: revert;
                    grid-template-rows: revert-layer;
                    grid-template-rows: unset;
                `
                }</CodeBlock>
                <h3>grid-template-areas</h3>
                <CodeBlock language="css">{
                    /* language=css */ `
                    /* Keyword value */
                    grid-template-areas: none;

                    /* <string> values */
                    grid-template-areas: "a b";
                    grid-template-areas:
                    "a b b"
                    "a c d";

                    /* Global values */
                    grid-template-areas: inherit;
                    grid-template-areas: initial;
                    grid-template-areas: revert;
                    grid-template-areas: revert-layer;
                    grid-template-areas: unset;
                `
                }</CodeBlock>
            </details>

            <BaselineStatus
                headline="Baseline 2023 - 88.29%"
                status="low"
                newlyAvailable
                chrome
                edge
                firefox
                safari
            >
                <p>
                    Since September 2023, this feature works across the latest
                    devices and browser versions. This feature might not work in
                    older devices or browsers.
                </p>
            </BaselineStatus>
        </div>
    );
};

export default SubgridDemo;
