import classNames from "classnames";

function Panel({children, className, ...rest}) {
    const classes = classNames('border rounded shadow bg-white p-3 w-full', className);

    return <div className={classes} {...rest}> {children} </div>
}

export default Panel;