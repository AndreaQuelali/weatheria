import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: string | null;
    leftIcon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({ error, leftIcon, className = '', ...props }) => {
    return (
        <div className="w-full">
            <div className={`relative flex items-center bg-gray-900/40 backdrop-blur-md border rounded-2xl transition-all duration-500 hover:shadow-blue-500/10 focus-within:ring-2 focus-within:ring-blue-500/30 ${error ? 'border-red-500/50 hover:border-red-500' : 'border-white/10 hover:border-blue-500/50'
                }`}>
                {leftIcon && (
                    <div className="pl-4 text-gray-400">
                        {leftIcon}
                    </div>
                )}
                <input
                    className={`w-full bg-transparent px-5 py-3.5 text-lg text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${error ? 'placeholder-red-300' : ''
                        } ${className}`}
                    {...props}
                />
            </div>
            {error && (
                <div className="mt-2 left-4 flex items-center gap-2 text-red-400 text-sm font-medium animate-in slide-in-from-top-1 duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {error}
                </div>
            )}
        </div>
    );
};
