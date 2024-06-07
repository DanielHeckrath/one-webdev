import './BaselineStatus.css';
import { FC, PropsWithChildren, ReactNode } from 'react';
import classNames from 'classnames';

interface BaselineStatusProps extends PropsWithChildren {
    status?: 'limited' | 'low' | 'high';
    newlyAvailable?: boolean;
    chrome?: boolean;
    edge?: boolean;
    firefox?: boolean;
    safari?: boolean;
    headline: ReactNode;
}

const BaselineStatus: FC<BaselineStatusProps> = ({
    headline,
    status = 'limited',
    chrome = false,
    edge = false,
    firefox = false,
    safari = false,
    newlyAvailable = false,
    children,
}) => {
    return (
        <details
            className={classNames({
                'baseline-indicator': true,
                [status]: true,
            })}
        >
            <summary>
                <span
                    className="indicator"
                    role="img"
                    aria-label="Baseline Check"
                ></span>
                <h2>{headline}</h2>
                {newlyAvailable ? (
                    <div className="pill">Newly available</div>
                ) : undefined}
                <div className="browsers">
                    <span
                        className="engine"
                        title="Supported in Chrome and Edge"
                    >
                        <span
                            className={classNames({
                                browser: true,
                                chrome: true,
                                supported: chrome,
                            })}
                            role="img"
                            aria-label="Chrome check"
                        ></span>
                        <span
                            className={classNames({
                                browser: true,
                                edge: true,
                                supported: edge,
                            })}
                            role="img"
                            aria-label="Edge check"
                        ></span>
                    </span>
                    <span className="engine" title="Supported in Firefox">
                        <span
                            className={classNames({
                                browser: true,
                                firefox: true,
                                supported: firefox,
                            })}
                            role="img"
                            aria-label="Firefox check"
                        ></span>
                    </span>
                    <span className="engine" title="Supported in Safari">
                        <span
                            className={classNames({
                                browser: true,
                                safari: true,
                                supported: safari,
                            })}
                            role="img"
                            aria-label="Safari check"
                        ></span>
                    </span>
                </div>
                <span className="icon icon-chevron"></span>
            </summary>
            <div className="extra">{children}</div>
        </details>
    );
};

export default BaselineStatus;
