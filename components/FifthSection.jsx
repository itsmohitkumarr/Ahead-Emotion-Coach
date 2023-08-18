import React from "react";
import gsap from "gsap";
import FifthCard1 from "./FifthCard1";
import FifthCard2 from "./FifthCard2";
import FifthCard3 from "./FifthCard3";

const FifthSection = () => {
	return (
		<>
			<div className='w-full flex items-center justify-center'>
				<div className='w-[90%]'>
					<div className='w-full h-[18%] flex flex-col '>
						<span className='font-semibold text-lg'>
							Wrong with self-improvement & how we&apos;re fixing it.
						</span>
						<span className='font-bold text-5xl mt-2'>
							Self-improvement. Ugh.
						</span>
					</div>
					<div className='w-full h-[82%] flex flex-col justify-start items-center pt-10'>
						<FifthCard1 />
						<FifthCard2 />
						<FifthCard3 />
						<FifthCard1 />
						<FifthCard2 />
						<FifthCard3 />
					</div>
				</div>
			</div>
		</>
	);
};

export default FifthSection;
