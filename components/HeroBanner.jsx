import React from "react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const HeroBanner = () => {
	const pathRef = useRef(null);
	useEffect(() => {
		const elem = pathRef.current;
		gsap.fromTo(elem, { scale: 0.2 }, { scale: 1, duration: 0.5 });
	}, []);
	const leftRef = useRef(null);
	useEffect(() => {
		const elem = leftRef.current;
		gsap.fromTo(
			elem,
			{ marginLeft: "-500px" },
			{ marginLeft: "0px", duration: 0.5 }
		);
	}, []);
	return (
		<>
			<div className='w-full h-[100vh] bg-[#FFFFFF] flex items-center justify-center'>
				<div className='w-[90%] h-[90%] bg-[#dfdafc] rounded-[8vh] flex relative overflow-hidden'>
					<div className='hLeft w-[50%] h-full flex flex-col items-start justify-center px-14 z-50 overflow-hidden'>
						<div
							className='w-full h-full flex flex-col items-start justify-center px-14 z-50'
							ref={leftRef}
						>
							<h1 className='mb-2 text-base'>Ahead app</h1>
							<h2 className='text-6xl font-bold leading-none'>
								Master your life by mastering emotions
							</h2>
							<div className='flex gap-4 mt-3'>
								<img
									src='https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg'
									alt=''
								/>
								<div className='flex flex-col w-48'>
									<div className='stars'>
										<i className='ri-star-fill text-xl mr-1 text-[#FED232]'></i>
										<i className='ri-star-fill text-xl mr-1 text-[#FED232]'></i>
										<i className='ri-star-fill text-xl mr-1 text-[#FED232]'></i>
										<i className='ri-star-fill text-xl mr-1 text-[#FED232]'></i>
										<i className='ri-star-fill text-xl text-[#FED232]'></i>
									</div>
									<span className='text-sm'>100+ AppStore reviews</span>
								</div>
							</div>
						</div>
					</div>
					<div className='hRight w-[50%] h-full flex items-center justify-center '>
						<img
							src='./pink.png'
							alt=''
							className='pPhoto absolute h-24 rotate-12 bottom-10 left-80'
						/>
						<img
							src='./blue.png'
							alt=''
							className='pPhoto absolute h-20 -rotate-12 top-10 left-10'
						/>
						<img
							src='./red.png'
							alt=''
							className='pPhoto absolute h-20 -rotate-6 bottom-20 right-0'
						/>
						<div
							className='path h-[80vh] w-[80vh] flex items-center justify-center rounded-full border-4 border-white border-dashed relative'
							ref={pathRef}
						>
							<img
								src='./pinkP.png'
								alt=''
								className='absolute h-24 rotate-12 bottom-20 left-2'
							/>
							<img
								src='./blueP.png'
								alt=''
								className='absolute h-20 -rotate-12 top-0 left-20'
							/>
							<img
								src='./redP.png'
								alt=''
								className='absolute h-16 -rotate-6 bottom-20 right-0'
							/>
							<img
								src='https://storage.googleapis.com/web-api-media-uploads/media/Image_3_387b57044f/Image_3_387b57044f.svg'
								alt=''
								className='h-[70vh] z-10'
							/>
						</div>
					</div>
					<img
						src='./leaf.png'
						alt=''
						className='absolute h-10 -rotate-45 top-0 left-20'
					/>
					<img
						src='./leaf.png'
						alt=''
						className='absolute h-5 -rotate-12 bottom-10 right-20'
					/>
					<img
						src='./leaf.png'
						alt=''
						className='absolute h-5 rotate-45 top-28 left-[35%]'
					/>
					<div className='h-9 w-9 rounded-full absolute flex items-center justify-center top-32 left-[30%] bg-[#F7D3BD]'>
						<div className='h-3 w-3 rounded-full bg-[#EB675A]'></div>
					</div>
					<div className='h-9 w-9 rounded-full absolute flex items-center justify-center bottom-[60%] right-10 bg-[#F7D3BD]'>
						<div className='h-3 w-3 rounded-full bg-[#EB675A]'></div>
					</div>
					<div className='h-5 w-5 rounded-full absolute flex items-center justify-center top-16 left-[45%] bg-[#F3C7C8]'></div>
					<div className='h-8 w-8 rounded-full absolute flex items-center justify-center top-[58%] left-[50%] bg-[#EB675A]'></div>
					<div className='h-10 w-10 rounded-full absolute flex items-center justify-center top-[-20px] left-[75%] bg-[#F3C7C8]'></div>
					<div className='h-10 w-10 rounded-full absolute flex items-center justify-center top-[55%] left-[-15px] bg-[#F3C7C8]'></div>
					<div className='h-10 w-10 rounded-full absolute flex items-center justify-center left-[30%] bottom-[-20px] bg-[#E96957]'></div>
					<img
						src='./flower.png'
						alt=''
						className='absolute h-20 top-[60%] left-[35%]'
					/>
				</div>
			</div>
		</>
	);
};

export default HeroBanner;
