import React from "react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SeventhSection = () => {
	const hingRef = useRef(null);
	useEffect(() => {
		const elem = hingRef.current;
		gsap.fromTo(
			elem,
			{ marginTop: "-85px" },
			{
				marginTop: "0px",
				duration: 0.5,
				scrollTrigger: {
					trigger: elem,
				},
			}
		);
	}, []);
	const medRef = useRef(null);
	useEffect(() => {
		const elem = medRef.current;
		gsap.fromTo(
			elem,
			{ scale: 0.2 },
			{
				scale: 1,
				scrollTrigger: {
					trigger: elem,
				},
			}
		);
	}, []);
	const boxRef = useRef(null);
	useEffect(() => {
		const elem = boxRef.current;
		gsap.fromTo(
			elem,
			{ paddingTop: "-500px" },
			{
				paddingTop: "0px",
				scrollTrigger: {
					trigger: elem,
				},
			}
		);
	}, []);
	return (
		<>
			<div className='w-full h-[100vh] bg-[#FFFFFF] flex items-center justify-center'>
				<div className='w-[90%] h-[90%] bg-[#c7ecff] rounded-[8vh] flex flex-col items-center justify-center'>
					<div className='flex overflow-hidden'>
						<div className='flex flex-col text-center' ref={hingRef}>
							<div className='font-semibold text-lg'>
								Let your friends, family, and co-workers (anonymously) rate your
								social skills.
							</div>
							<div className='font-bold text-5xl mt-2'>
								Ever wondered what others think of you?
							</div>
						</div>
					</div>
					<div
						className='flex flex-col w-[100%] items-center justify-center'
						ref={medRef}
					>
						<div className='w-[60%] h-10 border-t-4 border-dashed border-[#D58E4C] mt-14 flex justify-between'>
							<i class='ri-award-fill text-5xl text-yellow-600 mt-[-18px] ml-[-18px]'></i>
							<i class='ri-award-fill text-5xl text-yellow-600 mt-[-18px] ml-[-21px]'></i>
							<i class='ri-award-fill text-5xl text-yellow-600 mt-[-18px] mr-[-18px]'></i>
						</div>
						<div className='w-[80%] h-10 flex justify-between'>
							<span className='text-center'>
								Answer questions on your social skills
							</span>
							<span className='text-center'>
								Let others anonymously answer the same
								<br />
								questions about you
							</span>
							<span className='text-center'>
								Find out where you and others see things
								<br />
								the same way - and where not!
							</span>
						</div>
					</div>
					<div
						className='w-[50%] h-[15vw] bg-white rounded-[1vw] flex flex-col items-center mt-10 overflow-hidden'
						ref={boxRef}
					>
						<div className='top w-[85%] h-[50%] border-b-[1px] border-black flex justify-between items-end'>
							<span className='h-4 w-4 bg-[#6341EF] rounded-full mb-[-8px]'></span>
							<span className='h-4 w-4 bg-[#40C2FC] rounded-full mb-[-8px]'></span>
							<span className='h-4 w-4 bg-[#FDB338] rounded-full mb-[-8px]'></span>
							<span className='h-4 w-4 bg-[#58C896] rounded-full mb-[-8px]'></span>
						</div>
						<div className='bottom w-[85%] h-[50%] flex justify-between'>
							<span className='h-7 px-3 text-white bg-[#6341EF] rounded-md mt-[-45px] ml-[-18px]'>
								You
							</span>
							<span className='h-7 px-3 text-white bg-[#40C2FC] rounded-md mt-[20px] ml-24'>
								Anonymonos 1
							</span>
							<span className='h-7 px-3 text-white bg-[#FDB338] rounded-md mt-[-45px] ml-12'>
								Anonymonos 2
							</span>
							<span className='h-7 px-3 text-white bg-[#58C896] rounded-md mt-[20px]'>
								Anonymonos 3
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SeventhSection;
