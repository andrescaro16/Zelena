import { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import logo from '../assets/images/logo.png'

const NavBarItem = ({ title, classprops }) => <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>;


const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<nav className='w-full flex md:justify-center justify-between items-center p-2'>
			<div className='flex flex-row justify-center items-center mx-16'>
				<img src={logo} alt='logo' className='w-16 cursor-pointer' />
                <p className='font-semibold'>ZELENA</p>
			</div>

			<ul className='md:flex hidden list-none flex-row justify-between items-center flex-initial'>
				{['Services', 'Tutorials', 'About us'].map((item, index) => (
					<NavBarItem key={item + index} title={item} />
				))}
				<li className='text-white bg-[#000] py-2 px-7 mx-4 border border-black rounded-full cursor-pointer hover:bg-[#fff] hover:text-black'>Login</li>
			</ul>

			<div className='flex relative'>
				{!toggleMenu && <HiMenuAlt4 fontSize={28} className='md:hidden cursor-pointer' onClick={() => setToggleMenu(true)} />}
				{toggleMenu && (
					<ul
						className='z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism animate-slide-in'>
						<li className='text-2xl w-full my-2'>
							<AiOutlineClose onClick={() => setToggleMenu(false)} />
						</li>
						{['Services', 'Tutorials', 'About us'].map((item, index) => (
							<NavBarItem key={item + index} title={item} classprops='my-2 text-lg' />
						))}
					</ul>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
