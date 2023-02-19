/** @format */

import classNames from 'classnames';

export const Button = ({ primary, type = 'button', children }) => {
	return (
		<button
			type={type}
			className={classNames(
				'px-4 py-3 text-sm rounded-lg hover:opacity-80',
				primary
					? 'bg-[#383e47] text-white'
					: 'text-[#383e47] border border-[#505967]'
			)}>
			{children}
		</button>
	);
};
