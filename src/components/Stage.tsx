import { FC, HTMLAttributes } from 'react';
import './Stage.css';
import classNames from 'classnames';

interface TeaserProps extends HTMLAttributes<HTMLDivElement> {}

const Stage: FC<TeaserProps> = ({ className, ...rest }) => {
    return (
        <div
            className={classNames(
                'stage',
                'main-grid',
                'full-width',
                className
            )}
            {...rest}
        >
            <video
                disablePictureInPicture
                disableRemotePlayback
                muted
                loop
                autoPlay
                playsInline
                src="/one-webdev/stage-hero.mp4"
            />
            <h1>Headline</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aspernatur atque debitis dicta dolorum earum est facilis, illum
                laboriosam laborum, laudantium magni molestiae odio omnis
                praesentium repellendus sint sit tenetur voluptatem?
            </p>
        </div>
    );
};

export default Stage;
