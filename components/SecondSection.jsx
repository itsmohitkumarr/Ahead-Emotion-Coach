import React from "react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SecondSection = () => {
	const secRef = useRef(null);
	useEffect(() => {
		const elem = secRef.current;
		gsap.fromTo(
			elem,
			{ marginTop: "250px" },
			{
				marginTop: "0px",
				duration: 0.5,
				scrollTrigger: {
					trigger: elem,
				},
			}
		);
	}, []);
	return (
		<>
			<div className='w-full h-[18vw] flex items-center justify-center'>
				<div
					className='w-full flex items-start justify-between px-32 my-20'
					ref={secRef}
				>
					<div className='secLeft w-[40%] text-3xl font-semibold ml-8'>
						EQ beats IQ
					</div>
					<div className='secRight flex w-[60%] font-normal text-xl gap-4'>
						<div className='card1 w-[60vw]  '>
							People with high emotional intelligence (EQ) live more fulfilled
							lives. They tend to be happier and have healthier relationships.
						</div>
						<div className='card2 w-[60vw]  '>
							They are more successful in their pursuits and make for inspiring
							leaders. According to science, they earn $29k a year.
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SecondSection;
