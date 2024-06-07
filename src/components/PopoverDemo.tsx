import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import './PopoverDemo.css';
import CodeBlock from '@/components/Codeblock';
import BaselineStatus from '@/components/BaselineStatus';

const AUTOMATIC_POPOVER = `
<button popoverTarget="popover-id">
    Open Popover
</button>

<div id="popover-id" popover="auto">
    <p>
        I am a popover with more information. Hit esc or click away to close me.
    </p>
</div>
`.trim();

const MANUAL_POPOVER = `
<button popoverTarget="popover-id">
    Open Popover
</button>

<div id="manual-popover" popover="manual">
    <p>
        I am a popover with more information. Hit the close button
        or toggle to close me.
    </p>
    <button
        popoverTarget="manual-popover"
        popoverTargetaction="hide"
    >
        <span aria-hidden="true">❌</span>
        <span className="sr-only">Close</span>
    </button>
</div>
`.trim();

/* language=css */
const STYLED_POPOVER = `
.styled-popover {
    &:popover-open {
        width: 300px;
        height: 200px;
        position: fixed;
        inset: unset;
        bottom: 5px;
        right: 5px;
        margin: 0;
    }

    &::backdrop {
        background: rgba(0, 0, 0, 0.6);
    }
}
`.trim();

interface PopoverDemoProps extends HTMLAttributes<HTMLDivElement> {}

const PopoverDemo: FC<PopoverDemoProps> = ({ className, ...rest }) => {
    return (
        <section className={classNames(className, 'popover-demo')} {...rest}>
            <h2>Popovers</h2>
            <p>Creating popovers in web-applications is a common problem.</p>
            <img src="/one-webdev/popper-trend.png" />
            <h3>Creating popovers</h3>
            <p>
                We can create declare popover elements using the popover
                attribute. <br /> The popover attribute has the following
                allowed values.
            </p>
            <ul>
                <li>auto - (default) creates an automatic popover</li>
                <li>manual - creates a manual popover element</li>
            </ul>
            <p>
                The difference between automatic and manual modes is mainly in
                the dismiss behaviour. Manual popover require an explicit close
                button, whole automatic popovers can be dismissed by outside or{' '}
                <kbd>ESC</kbd> click.
            </p>
            <p>
                Popovers are opened by interacting with elements that have the{' '}
                <kbd>popoverTarget</kbd> attribute set on the element.
            </p>

            <h3>Automatic Popovers</h3>

            <CodeBlock language="html">{AUTOMATIC_POPOVER}</CodeBlock>

            <button popoverTarget="auto-popover" className="popover-button">
                Open Popover
            </button>

            <div id="auto-popover" popover="auto">
                <p>
                    I am a popover with more information. Hit <kbd>esc</kbd> or
                    click away to close me.
                </p>
            </div>

            <h3>Manual Popovers</h3>

            <CodeBlock language="html">{MANUAL_POPOVER}</CodeBlock>

            <button popoverTarget="manual-popover" className="popover-button">
                Open Popover
            </button>

            <div id="manual-popover" popover="manual">
                <p>
                    I am a popover with more information. Hit the close button
                    or toggle to close me.
                </p>
                <button
                    className="close-btn"
                    popoverTarget="manual-popover"
                    popoverTargetAction="hide"
                >
                    <span aria-hidden="true">❌</span>
                    <span className="sr-only">Close</span>
                </button>
            </div>

            <h3>Styled Popovers</h3>

            <CodeBlock language="css">{STYLED_POPOVER}</CodeBlock>

            <button popoverTarget="styled-popover" className="popover-button">
                Open Popover
            </button>

            <div id="styled-popover" popover="auto" className="styled-popover">
                <p>I am a styled popover.</p>
                <button
                    className="close-btn"
                    popoverTarget="styled-popover"
                    popoverTargetAction="hide"
                >
                    <span aria-hidden="true">❌</span>
                    <span className="sr-only">Close</span>
                </button>
            </div>

            <h3>Availability</h3>
            <BaselineStatus
                status="low"
                headline="Baseline 2023 - 83.68%"
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
        </section>
    );
};

export default PopoverDemo;
