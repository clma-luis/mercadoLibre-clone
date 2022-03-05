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
        enableBackground: 'new 0 0 32 32'
      }}
      
      xmlSpace="preserve"
      {...props}
    >
      
      <style>
        {
          `.st0{fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round}`
        }
      </style>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M7 2h11a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V0h2v2zm0 7h10V4H7v5zm0 2v9h10v-9H7z" />
    </svg>
  )
}
