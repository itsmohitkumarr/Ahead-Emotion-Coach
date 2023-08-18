import React from "react";
import NinthCard1 from "./NinthCard1";
import NinthCard2 from "./NinthCard2";
import NinthCard3 from "./NinthCard3";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const NinthSection = () => {
	const hingRef = useRef(null);
	useEffect(() => {
		const elem = hingRef.current;
		gsap.fromTo(
			elem,
			{ marginLeft: "-400px" },
			{
				marginLeft: "0px",
				duration: 0.5,
				scrollTrigger: {
					trigger: elem,
				},
			}
		);
	}, []);
	const hrRef = useRef(null);
	useEffect(() => {
		const elem = hrRef.current;
		gsap.fromTo(
			elem,
			{ marginRight: "-400px" },
			{
				marginRight: "110px",
				duration: 0.5,
				scrollTrigger: {
					trigger: elem,
				},
			}
		);
	}, []);
	return (
		<>
			<div className='w-full h-[110vh] bg-[#FFFFFF] flex items-center justify-center'>
				<div className='w-[90%] h-[100vh] bg-[#dfdafc] rounded-[8vh] flex justify-between p-6 overflow-hidden'>
					<div className='w-[40%] h-full flex flex-col items-start justify-around ml-14'>
						<h4 className='text-5xl font-bold mt-4' ref={hingRef}>
							Work with us
						</h4>
						<div className='bg-white flex flex-col items-start justify-between rounded-[3vh] h-[28vw] mb-[3vw]'>
							<img src='./Logo.png' alt='' className='h-12 mt-8 px-10' />
							<div className=' px-10'>
								<span className='font-semibold text-2xl'>About</span>
								<p>
									At ahead our goal is to make self- improvement fun and
									lasting. We know there&apos;s a way how to make it work. And
									that&apos;s what aHead is all about!
								</p>
							</div>
							<div className='bg-[#fde8c7] w-[100%] h-[42%] px-10 pt-7 rounded-[3vh] opacity-[0.8]'>
								<span className='font-semibold text-2xl'>Product</span>
								<p>
									Sure, you could spend ages reading books or sitting in
									seminars on how to become a better spouse, parent, or manager
									- like we did...
								</p>
							</div>
						</div>
					</div>
					<div className='w-[50%] h-full flex flex-col items-end justify-start px-6'>
						<h2 className='text-5xl font-bold mt-8 text-[#633FEF]' ref={hrRef}>
							ahead
						</h2>
						<div className='scrollBox flex flex-col mt-8 mr-8 w-[68%] h-[28vw] overflow-scroll gap-6'>
							<NinthCard1 />
							<NinthCard2 />
							<NinthCard3 />
							<NinthCard1 />
							<NinthCard2 />
							<NinthCard3 />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default NinthSection;
