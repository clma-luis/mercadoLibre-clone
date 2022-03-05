import * as React from 'react'

export default function SvgComponent(props) {
  return (
    <svg
      id="Icons"
      xmlns="http://www.w3.org/2000/svg"
      x={0}
      y={0}
      viewBox="0 0 32 32"
      style={{
        enableBackground: 'new 0 0 32 32',
      }}
      xmlSpace="preserve"
      {...props}
    >
      <style>
        {
          '.st0{fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}'
        }
      </style>
      <path
        className="st0"
        d="M9 29H5c-1.1 0-2-.9-2-2V17c0-1.7 1.3-3 3-3h0c1.7 0 3 1.3 3 3v12zM27 29h-4V17c0-1.7 1.3-3 3-3h0c1.7 0 3 1.3 3 3v10c0 1.1-.9 2-2 2zM9 19h14v10H9zM6 14V7.8C6 5.7 7.7 4 9.8 4h12.3C24.3 4 26 5.7 26 7.8V14"
      />
    </svg>
  )
}
