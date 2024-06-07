import { FC, HTMLAttributes } from 'react';
import './Teaser.css';
import classNames from 'classnames';

interface TeaserProps extends HTMLAttributes<HTMLDivElement> {
    image?: boolean;
}

const Teaser: FC<TeaserProps> = ({ image = true, className, ...rest }) => {
    return (
        <div className={classNames('teaser', className)} {...rest}>
            {image ? <img src="/614-400x300.jpg" alt="Image" /> : undefined}
            <h2>Card title</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
                delectus, deserunt dolorum eos eum eveniet exercitationem facere
                impedit nobis praesentium quae quaerat quidem quis quod repellat
                sed sequi sunt! Eveniet.
            </p>
        </div>
    );
};

export default Teaser;
