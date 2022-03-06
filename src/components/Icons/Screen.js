import * as React from "react"

export default function Screen(props){

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
        d="M.5.5h23v18H.5zM0 15h24M6 22c1.75-.755 6.6-1.811 12 0m-6-3v2"
      />
    </svg>
    )
} 

