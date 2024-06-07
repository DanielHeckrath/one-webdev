import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import './ImageGrid.css';

const ImageGrid: FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
    return (
        <div
            className={classNames(
                'full-width',
                'main-grid',
                'image-grid',
                className
            )}
        >
            <figure>
                <img src="/one-webdev/hero-image.webp" alt="Image 1" />
                <figcaption>This is a really great image</figcaption>
            </figure>
            <figure>
                <img src="/one-webdev/hero-image.webp" alt="Image 1" />
                <figcaption>Another image as great as the first</figcaption>
            </figure>
            <figure>
                <img src="/one-webdev/hero-image.webp" alt="Image 1" />
                <figcaption>Great images come in threes</figcaption>
            </figure>
        </div>
    );
};

export default ImageGrid;
