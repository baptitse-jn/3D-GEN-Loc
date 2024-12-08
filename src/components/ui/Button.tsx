import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  as?: React.ElementType;
  to?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  as: Component = 'button',
  ...props
}) => {
  return (
    <Component
      className={clsx(
        'rounded-lg font-semibold transition-colors inline-flex items-center justify-center',
        {
          'bg-blue-500 hover:bg-blue-600 text-white': variant === 'primary',
          'bg-gray-700 hover:bg-gray-600 text-white': variant === 'secondary',
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-3': size === 'md',
          'px-8 py-4': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};