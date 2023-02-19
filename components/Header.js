/** @format */

import Image from 'next/image';
import React from 'react';
import Logo from '../assets/images/logo.png';
import { Button } from './Buttons';

function Header() {
	return (
		<header className='px-4 bg-fill-light-navigation h-60px phablet:h-[72px] backdrop-blur-[22px] border-b border-stroke-light-navigation pl-24px sticky top-0 flex z-50 w-full justify-between'>
			<div className='flex gap-14 items-center '>
				<Image src={Logo} width={100} height={20} alt='' />
				<div>
					<ul className='flex items-center gap-8'>
						<li>Updates</li>
						<li>Help</li>
						<li>Pricing</li>
					</ul>
				</div>
			</div>
			<div className='flex gap-8 items-center'>
				<Button>Sign in</Button>
				<Button primary>Get started</Button>
			</div>
		</header>
	);
}

export default Header;
