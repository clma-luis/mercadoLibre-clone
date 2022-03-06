import * as React from 'react'

export default function Oven(props) {
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
    <path stroke="currentColor" d="M9 12v2h6v-2" />
    <path stroke="currentColor" d="M.5.5h23v22H.5z" />
    <path stroke="currentColor" d="M3.5 9.5h17v10h-17z" />
    <circle cx={5} cy={5} r={1} stroke="currentColor" />
    <circle cx={5} cy={5} r={1} stroke="currentColor" />
    <circle cx={12} cy={5} r={1} stroke="currentColor" />
    <circle cx={19} cy={5} r={1} stroke="currentColor" />
  </svg>
)
}
