import React, { FC, useState } from 'react'

interface CollapseProps {
  title: string
  body: string
}

const Collapse: FC<CollapseProps> = (props) => {
  const { title, body } = props
  const [expanded, setExpanded] = useState<boolean>(false)

  return (
    <div className="border-b">
      <div
        className="flex justify-between text-black hover:text-teal-500 active:text-teal-600 cursor-pointer gap-2 py-4"
        onClick={() => setExpanded(!expanded)}
      >
        <span className="md:text-lg font-semibold transition duration-100">
          {title}
        </span>
        <span className={`text-teal-500 ${expanded ? '' : 'rotate-180'}`}>
          <svg className="icon w-5 h-5">
            <use xlinkHref="#chevron-down"></use>
          </svg>
        </span>
      </div>
      <p className={`text-gray-500 mb-4 ${expanded ? 'hidden' : ''}`}>{body}</p>
    </div>
  )
}

export default Collapse
