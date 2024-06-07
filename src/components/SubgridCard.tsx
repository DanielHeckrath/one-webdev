import classNames from 'classnames';
import { FC, HTMLAttributes, ReactElement } from 'react';
import './SubgridCard.css';

interface SubgridCardProps extends HTMLAttributes<HTMLDivElement> {
    name: string;
    image: string;
    properties: ReactElement;
}

const SubgridCard: FC<SubgridCardProps> = ({ name, image, properties }) => {
    return (
        <div className={classNames('subgrid-card')}>
            <div className="subitem">
                <img src={image} />
            </div>
            <div className="subitem">
                <p>{name}</p>
            </div>
            <div className="subitem technical-details">{properties}</div>
            <div className="subitem technical-details">{properties}</div>
        </div>
    );
};

export default SubgridCard;
