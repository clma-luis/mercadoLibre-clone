import * as React from "react"

export default function Screen(props){

    return (
        <svg
        id="Icons"
        xmlns="http://www.w3.org/2000/svg"
        x={0}
        y={0}
        viewBox="0 0 32 32"
        style={{
          enableBackground: "new 0 0 32 32",
        }}
        xmlSpace="preserve"
        {...props}
      >
        <style>
          {
            ".st2{fill:none;stroke:#000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}"
          }
        </style>
        <path
          className="st2"
          d="M3 6v15c0 1.1.9 2 2 2h22c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zM3 19h26M9 29h14M13 23c0 2.1-.7 4.6-1.8 6M20.8 29c-1.1-1.4-1.8-3.9-1.8-6"
        />
      </svg>
    )
} 

