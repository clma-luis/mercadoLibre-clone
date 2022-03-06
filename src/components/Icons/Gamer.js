export default function Gamer(props){
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
      <path stroke="currentColor" d="M8 18H4m2 2v-4" />
      <circle cx={21} cy={19} r={1} fill="currentColor" />
      <circle cx={24} cy={17} r={1} fill="currentColor" />
      <path stroke="currentColor" d="M14 0v8" />
      <rect width={27} height={12} x={0.5} y={11.5} stroke="currentColor" rx={6} />
    </svg>
      )
      
} 