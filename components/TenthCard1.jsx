import React from "react";

function TenthCard1() {
	return (
		<>
			<div className='tenthCard bg-[#FDECD2] w-[26vw] h-[13vw] rounded-xl px-8 py-7 overflow-hidden'>
				<span className='font-bold text-lg'>Senior Full-Stack Engineer</span>
				<ul className='font-medium text-base mt-3 ml-3 list-disc'>
					<li>Full-time position</li>
					<li>Berlin or remote</li>
					<li>€65-85k, 0.5-1.50% equity share options</li>
				</ul>
				<button className='bg-black text-white h-10 w-32 rounded-full cursor-pointer text-base font-normal mt-6 opacity-0'>
					See details
				</button>
			</div>
		</>
	);
}

export default TenthCard1;
