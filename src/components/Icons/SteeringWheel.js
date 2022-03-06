export default function SteeringWheel(props){
  return(
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
      d="M19.399 12.333c-2.102.87-6.404 3.555-6.798 7.334m-3.393-.836c.034-1.61-1.005-5.196-5.43-6.661"
    />
    <path
      stroke="currentColor"
      d="M22.5 12c0 6.372-4.945 11.5-11 11.5S.5 18.372.5 12 5.445.5 11.5.5s11 5.128 11 11.5z"
    />
    <path
      stroke="currentColor"
      d="M19.5 12c0 4.114-3.553 7.5-8 7.5s-8-3.386-8-7.5 3.553-7.5 8-7.5 8 3.386 8 7.5z"
    />
    <circle cx={11.5} cy={12.5} r={2} stroke="currentColor" />
    <path stroke="currentColor" d="M4.5 8.5h14" />
  </svg>
)  
} 