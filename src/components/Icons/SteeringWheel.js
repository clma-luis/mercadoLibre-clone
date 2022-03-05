export default function SteeringWheel(props){
  return(
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
        ".st0{fill:none;stroke:#000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}"
      }
    </style>
    <circle className="st0" cx={16} cy={14} r={12} />
    <circle className="st0" cx={16} cy={14} r={8} />
    <path
      className="st0"
      d="M8.2 13.3c3.3.9 5.7 3.9 5.8 7.4M18 20.7c.1-3.6 2.5-6.5 5.8-7.4M9 11h0c4.6-1.3 9.4-1.3 14 0h0M21.5 24.6l1.7 2.1c1.1 1.3.2 3.3-1.5 3.3H10.3c-1.7 0-2.6-2-1.5-3.3l1.7-2.1"
    />
    <circle className="st0" cx={16} cy={14} r={1} />
  </svg>
)  
} 