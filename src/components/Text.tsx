import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import './Text.css';

interface TextProps extends HTMLAttributes<HTMLDivElement> {
    textClassName?: string;
}

const Text: FC<TextProps> = ({ className, textClassName }) => {
    return (
        <div
            className={classNames(
                'text-container',
                'full-width',
                'main-grid',
                className
            )}
        >
            <p className={classNames('text', textClassName)}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium architecto blanditiis deleniti, dicta facilis ipsam
                maxime minima quibusdam rem repudiandae. Consectetur eligendi
                explicabo fugit illum placeat sequi sunt ullam vitae! Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
                dicta nesciunt sequi totam. Commodi consequatur et ex illum
                impedit modi placeat sapiente unde. Illo pariatur quo reiciendis
                sunt temporibus ullam? Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Aliquid asperiores enim error excepturi ipsa,
                iure nihil obcaecati qui quibusdam reiciendis, repellat tempore
                unde voluptas. Cupiditate hic magnam neque odio veniam!
            </p>
        </div>
    );
};

export default Text;
