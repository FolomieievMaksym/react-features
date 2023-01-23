import React, { useState } from "react";

const MyInput = function () {
	let [value, setValue] = useState("Some");
	return (
		<div>
			<p>{value}</p>
         <input onChange={(e) => setValue(e.target.value)} type="text" value={value} />
		</div>
	);
}

export default MyInput;