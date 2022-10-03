import React, {FC} from 'react';


interface IconProps {
  name: string
  width: number
  height: number
  className?: string
}

const Icon:FC<IconProps> = (props) => {
  const {name, width, height, className} = props

  return (
    <svg className={`icon ${className}`} width={width} height={height}>
        <use href={`/sprite.svg#${name}`} />
    </svg>
  );
};

export default Icon;
