import React from "react";
import TenthCard1 from "./TenthCard1";
import TenthCard2 from "./TenthCard2";
import TenthCard3 from "./TenthCard3";

function TenthSection() {
	return (
		<>
			<div className='w-full h-[120vh] bg-[#FFFFFF] flex items-center justify-center'>
				<div className='w-[90%] h-[100%] flex flex-col'>
					<div className='h-[60%] w-[100%] pt-8 pl-12 border-b-[1px]  border-black'>
						<span className='text-5xl font-bold'>Open vacancies</span>
						<div className='flex items-start justify-center gap-8 mt-10'>
							<TenthCard1 />
							<TenthCard2 />
							<TenthCard3 />
						</div>
					</div>
					<div className='h-[40%] w-[100%] flex flex-col items-center justify-center'>
						<img src='./Logo.png' alt='' className='h-14' />
						<span>ahead</span>
						<div className='flex gap-4 my-4'>
							<span className='flex items-center gap-2 text-sm'>
								<div className=' flex items-center justify-center w-6 h-6 bg-[#97F1D6] rounded-full'>
									<i class='ri-map-pin-2-line text-sm'></i>
								</div>
								AuguststraBe 26, 10117 Berlin
							</span>
							<span className='flex items-center gap-2 text-sm'>
								<div className=' flex items-center justify-center w-6 h-6 bg-[#97F1D6] rounded-full'>
									<i class='ri-mail-line text-sm'></i>
								</div>
								AuguststraBe 26, 10117 Berlin
							</span>
						</div>
						<img
							src='https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg'
							alt=''
							className='mt-1'
						/>
						<span className='text-sm mt-4'>
							©2022 Ahead app. All right reserved
						</span>
					</div>
				</div>
			</div>
		</>
	);
}

export default TenthSection;
