import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    isLoading = false,
    leftIcon,
    rightIcon,
    className = '',
    disabled,
    ...props
}) => {
    const baseStyles = 'relative flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none';

    const variants = {
        primary: 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-900/20',
        secondary: 'bg-white/10 hover:bg-white/20 text-white border border-white/10',
        outline: 'bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
        ghost: 'bg-transparent hover:bg-white/5 text-gray-400 hover:text-white',
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading && (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin shrink-0 aspect-square" />
            )}
            {leftIcon && <span>{leftIcon}</span>}
            <span>{children}</span>
            {!isLoading && rightIcon && <span>{rightIcon}</span>}
        </button>
    );
};
