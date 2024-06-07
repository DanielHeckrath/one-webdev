import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import './Quote.css';

interface QuoteProps extends HTMLAttributes<HTMLDivElement> {
    quoteClassName?: string;
    image?: boolean;
}

const Quote: FC<QuoteProps> = ({ className, quoteClassName, image }) => {
    return (
        <blockquote
            className={classNames(
                'quote-container',
                'breakout',
                'main-grid',
                className
            )}
            cite="https://datatracker.ietf.org/doc/html/rfc1149"
        >
            {image ? (
                <img src="/one-webdev/614-400x300.jpg" alt="Image" />
            ) : undefined}
            <p className={classNames('quote', quoteClassName)}>
                Avian carriers can provide high delay, low throughput, and low
                altitude service. The connection topology is limited to a single
                point-to-point path for each carrier, used with standard
                carriers, but many carriers can be used without significant
                interference with each other, outside early spring. This is
                because of the 3D ether space available to the carriers, in
                contrast to the 1D ether used by IEEE802.3. The carriers have an
                intrinsic collision avoidance system, which increases
                availability.
            </p>
            <footer className={classNames('quote-footer', quoteClassName)}>
                — D. Waitzman, <cite>IETF RFC1149</cite>
            </footer>
        </blockquote>
    );
};

export default Quote;
