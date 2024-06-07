import classNames from 'classnames';
import { FC, HTMLAttributes } from 'react';
import './SubgridRow.css';

const SubgridRow: FC<HTMLAttributes<HTMLDivElement>> = ({
    children,
    className,
}) => {
    return (
        <div className={classNames('subgrid-row', className)}>{children}</div>
    );
};

export default SubgridRow;
