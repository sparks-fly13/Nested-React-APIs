import classNames from 'classnames';
import {GoSync} from 'react-icons/go';

function Button( {
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    loading,
    ...rest
} ) {
    const classes = classNames(rest.className,'flex items-center px-3 py-1.5 border h-8', {
        'opacity-80': loading,
        'border-blue-600 bg-blue-500 text-slate-50': primary,
        'border-gray-900 bg-gray-800 text-slate-50': secondary,
        'border-green-600 bg-green-500 text-slate-50': success,
        'border-yellow-400 bg-yellow-300 text-white': warning,
        'border-red-500 bg-red-400 text-slate-50': danger,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-600': outline && primary,
        'text-gray-950': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-600': outline && warning,
        'text-red-500': outline && danger
    });

    return (
        <button {...rest} disabled={loading} className={classes}>
            {loading ? <GoSync className="animate-spin"/> : children}
        </button>
    )
}

Button.propTypes = {
    checkButtonColor: ({primary, secondary, success, warning, danger, outline, rounded}) => {
        const count = Number(!!primary) + Number(!!secondary) + Number(!!warning) + Number(!!success) + Number(!!danger);
        const count2 = Number(!!outline) + Number(!!rounded);

        if (count>1 || count2>1){
            return new Error("Only one button color type can be true");
        }
    }
};

export default Button;