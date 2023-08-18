import React from "react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const FourthSection = () => {
	const hingRef = useRef(null);
	useEffect(() => {
		const elem = hingRef.current;
		gsap.fromTo(
			elem,
			{ marginLeft: "-520px" },
			{
				marginLeft: "0px",
				duration: 0.5,
				scrollTrigger: {
					trigger: elem,
				},
			}
		);
	}, []);
	const rRef = useRef(null);
	useEffect(() => {
		const elem = rRef.current;
		gsap.fromTo(
			elem,
			{ marginLeft: "520px" },
			{
				marginLeft: "0px",
				duration: 0.5,
				scrollTrigger: {
					trigger: elem,
				},
			}
		);
	}, []);
	const cRef = useRef(null);
	useEffect(() => {
		const elem = cRef.current;
		gsap.fromTo(
			elem,
			{ left: "80px", top: "65%" },
			{
				left: "-80px",
				top: "45%",
				scrollTrigger: {
					trigger: elem,
				},
			}
		);
	}, []);
	return (
		<>
			<div className='w-full h-[100vh] bg-[#FFFFFF] flex items-center justify-center'>
				<div className='w-[90%] h-[90%] bg-[#fde8c7] rounded-[8vh] flex overflow-hidden relative'>
					<div className='hLeft w-[50%] h-full flex flex-col items-start justify-start mt-[6vw] px-14 '>
						<div className='flex flex-col ml-[-520px]' ref={hingRef}>
							<span className='mb-2 text-base'>Built out of frustration</span>
							<span className='text-5xl font-bold leading-none'>
								Meet the ahead app
							</span>
						</div>
						<div className=' w-[100%] h-[50%] flex items-end justify-center'>
							<div className='flex items-center justify-center h-[16vw] w-[16vw] rounded-full bg-[#dededd] relative z-20'>
								<div className='flex items-center justify-center h-[14vw] w-[14vw] rounded-full bg-white'>
									<i class='ri-award-fill absolute text-7xl text-yellow-600 top-[-20px]'></i>
									<img src='./purple.png' alt='' className='h-28' />
								</div>
							</div>
						</div>
					</div>
					<div className='hRight w-[50%] h-full flex items-center justify-center px-16 flex-col'>
						<div
							className='w-full h-full flex items-center justify-center text-2xl flex-col'
							ref={rRef}
						>
							A personalized pocket coach that provides bite- sized,
							science-driven tools to boost emotional intelligence.
							<span className='mt-6'>
								Think of it as a pocket cheerleader towards a better, more
								fulfilling.
							</span>
						</div>
					</div>
					<div
						className='h-[25vw] w-[25vw] bg-[#d7bba9] absolute rounded-full '
						ref={cRef}
					></div>
					<div className='h-12 w-12 rounded-full absolute flex items-center justify-center top-[68%] left-[35%] bg-[#F7D3BD]'>
						<div className='h-5 w-5 rounded-full bg-[#EB675A]'></div>
					</div>
					<div className='h-10 w-10 rounded-full absolute flex items-center justify-center top-[-20px] left-[55%] bg-[#F3C7C8]'></div>
					<img
						src='./flower.png'
						alt=''
						className='absolute h-20 top-[-20px] left-[90%]'
					/>
					<img
						src='./leaf.png'
						alt=''
						className='absolute h-5 rotate-45 top-60 left-[40%]'
					/>
					<div className='h-10 w-10 rounded-full absolute flex items-center justify-center left-[80%] bottom-[-20px] bg-[#E96957]'></div>
				</div>
			</div>
		</>
	);
};

export default FourthSection;
