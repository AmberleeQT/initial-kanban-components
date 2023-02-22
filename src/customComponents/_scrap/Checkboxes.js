import React from 'react';

const Checkboxes = () => {
	return (
		<div
			style={{
				display: 'block',
				marginTop: '2rem',
				backgroundColor: '#2B2C37',
			}}>
			<h2>Inputs</h2>
			<div
				style={{
					display: 'block',
					margin: '.75rem',
				}}>
				<h3>Checkbox</h3>
				<form action=''>
					<label>Subtask Checkbox</label>
					{/* <div className='checkbox-container'>
							<input type='checkbox' name='idle' id='idle' />
							<label htmlFor=''>Idle</label>
						</div> */}
					<div className='checkbox-field'>
						<input type='checkbox' name='' id='' />
						<label htmlFor=''>Idle</label>
					</div>
					<div className='checkbox-field'>
						<input type='checkbox' name='' id='' />
						<label htmlFor=''>Checked</label>
					</div>
					{/* <img src={check} alt='' /> */}
				</form>
			</div>
		</div>
	);
};

export default Checkboxes;
