import React from "react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const FifthCard2 = () => {
	const carRef = useRef(null);
	useEffect(() => {
		const elem = carRef.current;
		gsap.fromTo(
			elem,
			{ opacity: 0.6, scale: 0.8 },
			{
				opacity: 1,
				scale: 1,
				duration: 0.1,
				scrollTrigger: {
					trigger: elem,
					scrub: 1,
					// markers: true,
					start: "bottom bottom",
					end: "center center",
				},
			}
		);
	}, []);
	return (
		<>
			<div
				className='w-[60%] h-[34%] bg-white flex flex-col items-start justify-center== px-10 py-5 border-l-4 border-indigo-500'
				ref={carRef}
			>
				<span className='font-bold text-2xl'>
					It&apos;s not as easy as 1-2-3.
				</span>
				<span className='font-semibold text-xl mt-2'>
					The journey of change may be long, but our sessions are quick. We get
					to the point and tell you what you want to know (and nothing else).
				</span>
			</div>
		</>
	);
};

export default FifthCard2;
