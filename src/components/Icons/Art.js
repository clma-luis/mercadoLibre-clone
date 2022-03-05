export default function Art(props) {
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
              ".st1{fill:none;stroke:currentColor;stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10}"
            }
          </style>
          <path
            className="st1"
            d="M27 23.2V8.8c1.2-.4 2-1.5 2-2.8 0-1.7-1.3-3-3-3-1.3 0-2.4.8-2.8 2H8.8C8.4 3.8 7.3 3 6 3 4.3 3 3 4.3 3 6c0 1.3.8 2.4 2 2.8v14.4c-1.2.4-2 1.5-2 2.8 0 1.7 1.3 3 3 3 1.3 0 2.4-.8 2.8-2h14.4c.4 1.2 1.5 2 2.8 2 1.7 0 3-1.3 3-3 0-1.3-.8-2.4-2-2.8z"
          />
          <path className="st1" d="M9 9h14v14H9z" />
          <circle className="st1" cx={13} cy={13} r={1} />
          <path className="st1" d="m9 20 7-4 4 3 3-2" />
        </svg>
      )
 } 
 