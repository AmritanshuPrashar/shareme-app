import React from "react";
import {Dna} from "react-loader-spinner";

function Spinner({ message }) {
	return (
		<div className="flex flex-col justify-center items-center w-full h-full">
		<Dna
		visible={true}
		height="80"
		width="80"
		ariaLabel="dna-loading"
		wrapperStyle={{}}
		wrapperClass="dna-wrapper"
	  />

			<p className=" font-sans text-lg text-center px-2">{message}</p>
		</div>
	);
}

export default Spinner;
