import * as React from 'react'

export default function Car(props) {
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
          `.st0{fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round}`
        }
      </style>
      <path
        className="st0"
        d="M27 23H5c-1.1 0-2-.9-2-2v-4c0-2.2 1.8-4 4-4h18c2.2 0 4 1.8 4 4v4c0 1.1-.9 2-2 2zM26 13H6l2-4.6C8.6 7 10 6 11.6 6h8.7c1.6 0 3 1 3.7 2.4l2 4.6zM10 23H4v2c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-2zM28 23h-6v2c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-2zM3 12h3.4M26 12h3"
        
      />
      <path
        className="st0"
        d="M21 23H11l1.4-2.9c.3-.7 1-1.1 1.8-1.1h3.5c.8 0 1.5.4 1.8 1.1L21 23zM6 18h3M23 18h3"
        
      />
    </svg>
  )
}
