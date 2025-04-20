import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  startIcon,
  endIcon,
  className,
  ...props
}) => {
  const baseStyles = "font-medium flex items-center justify-center transition duration-300 ease-in-out rounded";
  
  const variantStyles = {
    primary: "bg-red-600 hover:bg-red-700 text-white",
    secondary: "bg-gray-700 hover:bg-gray-800 text-white",
    outline: "border border-gray-600 text-white hover:bg-gray-800"
  };
  
  const sizeStyles = {
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-5 py-2",
    lg: "text-base px-6 py-3"
  };
  
  const widthStyles = fullWidth ? "w-full" : "";
  
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className || ""}`;

  return (
    <button className={classes} {...props}>
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {children}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </button>
  );
};

export default Button;