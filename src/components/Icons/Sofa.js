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
    <path
      stroke="currentColor"
      d="M5.017 12V2.692c-.083-.47.1-1.466 1.498-1.692h12.737c.583.094 1.748.564 1.748 1.692V12"
    />
    <path
      stroke="currentColor"
      d="M4.273 21.486H1v-8.043c2.182-2.413 4.727-1.005 5.727 0v3.016h12.819v-3.016c2.4-2.614 4.636-1.089 5.454 0v8.043H4.273zm0 0V24M21 21.641V24"
    />
  </svg>
  )
}
