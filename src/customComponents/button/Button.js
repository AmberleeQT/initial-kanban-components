import React from 'react';
import './_button.scss';

const Button = ({ btnClass, text, type, handleClick, style }) => {
	if (type.toLowerCase() === 'submit') {
		return (
			<button type='submit' className={btnClass} style={style}>
				{text}
			</button>
		);
	}
	return (
		<button
			type='button'
			className={btnClass}
			style={style}
			onClick={handleClick}>
			{text}
		</button>
	);
};

export default Button;
