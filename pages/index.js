/** @format */

import { Button } from '@/components/Buttons';
import Header from '@/components/Header';
import Image from 'next/image';
import hero from '../assets/images/homepage-hero.webp';
import brands from '../assets/images/brands.png';
import first from '../assets/images/1.png';
import secound from '../assets/images/2.png';
import third from '../assets/images/3.png';

export default function Home() {
	return (
		<div>
			<Header />
			<main>
				<section>
					<div className='grid items-center mt-28'>
						<div>
							<h3 className='text-7xl text-center font-semibold text-[#1d1e20]'>
								Customer
							</h3>
							<h3 className='text-7xl text-center font-semibold text-[#1d1e20]'>
								relationship magic.
							</h3>
							<p className='text-center mt-4 mb-8 text-xl text-[#555e67]'>
								Powerful, flexible and data-driven, Attio makes it easy
								to build the <br /> exact CRM your business needs.
							</p>
							<div className='flex gap-8 items-center justify-center'>
								<Button primary>Get started</Button>
								<Button>Talk to sales</Button>
							</div>
						</div>
					</div>
					<div className='mt-20'>
						<Image src={hero} alt='' />
					</div>
				</section>
				<section className='grid justify-center py-24'>
					<p className='text-[#727b84] text-sm text-center my-4'>
						Powering leading companies like
					</p>
					<Image src={brands} alt='' />
				</section>
				<section>
					<h3 className='text-5xl font-semibold text-center text-[#31373d]'>
						The fastest & most flexible
						<br />
						CRM you&apos;ll ever use.
					</h3>
					<p className='text-lg font-medium text-[#555e67] text-center mt-4'>
						And it&apos;s all powered by Particle — the data
						<br />
						model for teams that want to build faster.
					</p>
				</section>
				<section className='grid grid-cols-3 gap-6 mx-10 my-10'>
					<div className='py-4 px-6 rounded-lg border border-gray-200 grid items-center justify-center'>
						<Image src={first} alt='' />
						<p className='text-base font-semibold mt-4'>
							Real-time data, blazingly fast.
						</p>
						<p className='text-sm text-gray-500 font-medium'>
							Sort, filter and analyze thousands of
							<br /> customer records in milliseconds.
						</p>
					</div>
					<div className='py-4 px-6 rounded-lg border border-gray-200 grid items-center justify-center'>
						<Image src={secound} alt='' />
						<p className='text-base font-semibold mt-4'>
							Top-to-bottom customization.
						</p>
						<p className='text-sm text-gray-500 font-medium'>
							Easily design, build and implement the only
							<br /> CRM your business will ever need.
						</p>
					</div>
					<div className='py-4 px-6 rounded-lg border border-gray-200 grid items-center justify-center'>
						<Image src={third} alt='' />
						<p className='text-base font-semibold mt-4'>
							Effortless collaboration.
						</p>
						<p className='text-sm text-gray-500 font-medium'>
							Take notes, manage tasks and keep your
							<br /> entire team on the same page, all the time.
						</p>
					</div>
				</section>
				<section className='bg-gray-200 p-20'>
					<h3 className='text-5xl font-semibold text-center text-[#31373d]'>
						Real-time relationships
						<br />
						need real-time data.
					</h3>
					<p className='text-lg font-medium text-[#555e67] text-center mt-4'>
						Your customers are always connected.
						<br />
						Why should your CRM be any different?
					</p>
					<div className='text-center my-5'>
						<Button primary>Get started</Button>
					</div>
				</section>
			</main>
		</div>
	);
}
