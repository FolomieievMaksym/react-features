import React, { useState } from "react";

const Counter = function () {
	let [counter, setCount] = useState(2);
	function increase() {
      setCount(++counter);
   }
   function decrease() {
      setCount(--counter);
   }
	return (
		<div>
			<p>{counter}</p>
         <button onClick={increase}>Increase</button>
         <button onClick={decrease}>Decrease</button>
		</div>
	);
}

export default Counter;