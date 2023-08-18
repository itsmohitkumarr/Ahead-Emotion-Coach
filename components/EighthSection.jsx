import React from "react";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const EighthSection = () => {
	const hingRef = useRef(null);
	useEffect(() => {
		const elem = hingRef.current;
		gsap.fromTo(
			elem,
			{ marginLeft: "-60vh" },
			{
				marginLeft: "0px",
				duration: 0.5,
				scrollTrigger: {
					trigger: elem,
				},
			}
		);
	}, []);
	const hinggRef = useRef(null);
	useEffect(() => {
		const elem = hinggRef.current;
		gsap.fromTo(
			elem,
			{ marginLeft: "-60vh" },
			{
				marginLeft: "0px",
				duration: 0.5,
				scrollTrigger: {
					trigger: elem,
				},
			}
		);
	}, []);
	const gingRef = useRef(null);
	useEffect(() => {
		const elem = gingRef.current;
		gsap.fromTo(
			elem,
			{ marginRight: "-60vh" },
			{
				marginRight: "0px",
				duration: 0.5,
				scrollTrigger: {
					trigger: elem,
				},
			}
		);
	}, []);
	const ginggRef = useRef(null);
	useEffect(() => {
		const elem = gingRef.current;
		gsap.fromTo(
			elem,
			{ marginRight: "-60vh" },
			{
				marginRight: "0px",
				duration: 0.5,
				scrollTrigger: {
					trigger: elem,
				},
			}
		);
	}, []);
	const btRef = useRef(null);
	useEffect(() => {
		const elem = btRef.current;
		gsap.fromTo(
			elem,
			{ scale: 0.2 },
			{
				scale: 1,
				duration: 0.5,
				scrollTrigger: {
					trigger: elem,
				},
			}
		);
	}, []);
	return (
		<>
			<div className='w-full h-[100vh] bg-[#FFFFFF] flex flex-col items-center justify-center overflow-hidden'>
				<span className='text-xl font-medium' ref={hingRef}>
					We take privacy seriously
				</span>
				<span className='text-4xl font-bold my-4' ref={gingRef}>
					Before you get started
				</span>
				<span className='text-2xl font-normal text-center mb-4' ref={hinggRef}>
					"We won't share your answers with anyone (and won't ever tell <br />
					you which friends said what about you)"
				</span>
				<span
					className='text-xl font-medium flex items-end mb-5'
					ref={ginggRef}
				>
					with love,
					<Image
						src='/Sign.png'
						alt=''
						width={130}
						height={50}
						className='h-10'
					></Image>
				</span>
				<button
					className='bg-black text-white h-16 w-52 rounded-full cursor-pointer text-lg font-normal mb-3'
					ref={btRef}
				>
					Start a test
				</button>
				<span className='text-sm font-normal text-center'>
					Take only 5 minutes
				</span>
			</div>
		</>
	);
};

export default EighthSection;
