import React from "react";
import ThirdCard1 from "./ThirdCard1";
import ThirdCard2 from "./ThirdCard2";
import ThirdCard3 from "./ThirdCard3";
import ThirdCard4 from "./ThirdCard4";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ThirdSection = () => {
	const hingRef = useRef(null);
	useEffect(() => {
		const elem = hingRef.current;
		gsap.fromTo(
			elem,
			{ marginLeft: "-600px" },
			{
				marginLeft: "100px",
				duration: 0.5,
				scrollTrigger: {
					trigger: elem,
				},
			}
		);
	}, []);
	const cardRef = useRef(null);
	useEffect(() => {
		const elem = cardRef.current;
		gsap.fromTo(
			elem,
			{ marginLeft: "100vw" },
			{
				marginLeft: "0vw",
				duration: 0.5,
				scrollTrigger: {
					trigger: elem,
				},
			}
		);
	}, []);
	const imgRef = useRef(null);
	useEffect(() => {
		const elem = imgRef.current;
		gsap.fromTo(
			elem,
			{ top: "20%", right: "40%" },
			{
				top: 0,
				right: "47%",
				duration: 0.5,
				scrollTrigger: {
					trigger: elem,
				},
			}
		);
	}, []);
	return (
		<>
			<div className='relative'>
				<h4 className='ml-28 text-5xl font-bold flex' ref={hingRef}>
					Does this sound familiar...
				</h4>
				<img
					src='./red.png'
					alt=''
					className='h-14 absolute -rotate-12 top-0 right-[47%]'
					ref={imgRef}
				/>
				<div
					className='w-full h-[45vh] mt-12 flex items-center justify-center gap-8'
					ref={cardRef}
				>
					<ThirdCard1 />
					<ThirdCard2 />
					<ThirdCard3 />
					<ThirdCard4 />
				</div>
			</div>
		</>
	);
};

export default ThirdSection;
