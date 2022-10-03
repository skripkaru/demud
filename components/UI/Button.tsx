import React, {FC, ReactNode} from 'react';

interface ButtonProps {
  onClick: () => void
  variant: 'primary' | 'secondary'
  children: ReactNode | JSX.Element
  className?: string
}

const Button: FC<ButtonProps> = (props) => {
  const {onClick, variant, children, className} = props

  const classes = [className, '']

  switch (variant) {
    case "primary":
      classes.push('py-3 px-6 font-medium text-white border-0 rounded-lg bg-teal-500 hover:bg-teal-600')
      break
    case "secondary":
      classes.push('py-3 px-6 font-medium text-gray-700 border-0 rounded-lg bg-gray-100 hover:bg-gray-200')
      break
  }

    return (
      <button className={classes.join(' ')} onClick={onClick}>
        {children}
      </button>
    );
};

export default Button;
