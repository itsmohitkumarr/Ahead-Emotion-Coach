import React from "react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SixthSection = () => {
	const sixRef = useRef(null);
	useEffect(() => {
		const elem = sixRef.current;
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
			<div className='w-full flex items-start justify-between bg-white px-32 mt-20 '>
				<div
					className='w-full flex items-start justify-between px-32 my-20'
					ref={sixRef}
				>
					<div className='secLeft w-[40%] text-3xl font-semibold ml-8'>
						Be the best you <br /> with EQ
					</div>
					<div className='secRight flex w-[60%] font-normal text-xl gap-8'>
						<div className='card1 w-[20vw] text-xl'>
							Not having your own emotions under control might be holding you
							back.
						</div>
						<div className='card2 w-[20vw] text-xl'>
							Additionally, not understanding those of others stops you from
							being parent, friend you can be.
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SixthSection;
