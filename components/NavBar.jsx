import React from "react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const NavBar = () => {
	const navRef = useRef(null);
	useEffect(() => {
		const elem = navRef.current;
		gsap.fromTo(elem, { scale: 0.2 }, { scale: 1, duration: 0.5 });
	}, []);
	return (
		<>
			<nav
				className='w-full h-24 flex items-center justify-between px-32'
				ref={navRef}
			>
				<div className='navLeft'>
					<img src='/Logo.png' alt='' className='h-16 w-16 cursor-pointer' />
				</div>
				<div className='navCenter'>
					<ul className='flex gap-10'>
						<li className='cursor-pointer'>Emotions</li>
						<li className='cursor-pointer'>Manifesto</li>
						<li className='cursor-pointer'>Self-awareness test</li>
						<li className='cursor-pointer'>Work With Us</li>
					</ul>
				</div>
				<div className='navRight'>
					<button className='bg-black text-white h-16 w-52 rounded-full cursor-pointer'>
						Download app
					</button>
				</div>
			</nav>
		</>
	);
};

export default NavBar;
