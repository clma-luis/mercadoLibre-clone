import * as React from 'react'

export default function SvgComponent(props) {
  return (
    <svg
    id="Icons"
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    viewBox="0 0 30 26"
    style={{
      enableBackground: 'new 0 0 32 32',
      fill: 'none'
    }}
    
    xmlSpace="preserve"
    {...props}
  >
   <style>
      {
        `.st0{fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round}`
      }
    </style>
    <rect width={16} height={25} x={0.5} y={0.5} stroke="currentColor" rx={4.5} />
    <path stroke="currentColor" d="M0 6h17M7 3h3M1 20h16" />
  </svg>
  )
}
