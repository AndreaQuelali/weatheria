import React from 'react';
import { AlertCircle } from 'lucide-react';
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
                    <AlertCircle className="w-5 h-5" />
                    {error}
                </div>
            )}
        </div>
    );
};
