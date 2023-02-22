import React, { useState, useCallback } from 'react';
import './scss/dark.scss';
// ?? Custom Components
import Dropdown, { Option } from './customComponents/dropdown/Dropdown';
import Button from './customComponents/button/Button';
import Checkbox from './customComponents/checkbox/Checkbox';
import TextInput from './customComponents/text-input/TextInput';
/*
	import Button from './customComponents/button/Button';
	import Checkbox from './customComponents/checkbox/Checkbox';
	import Form from './customComponents/form/Form';
	import TextInput from './customComponents/text-input/TextInput';
*/

function App() {
	// State :
	/*
		sidebarOpen: boolean
		boards
		current board
	*/
	/* const [state, setState] = useState({
		idle: '',
		active: 'Some new task',
		badField: '',
		errors: false,
	});
	const { idle, active, badField, errors } = state;

	const handleChange = useCallback(({ target: { name, value } }) => {
		setState((prevState) => ({
			...prevState,
			[name]: value,
		}));
	}, []);
	*/

	return (
		<div>
			App.js
			{/* <Form title='Text Input Fields' onSubmit={handleSubmit}> */}
			<form>
				{/* <Dropdown placeholder='Select...' label='Custom Dropdown'>
					<Option value='todo'>Todo</Option>
					<Option value='doing'>Doing</Option>
					<Option value='done'>Done</Option>
				</Dropdown> */}
				{/* <Button type='button' btnClass='big' text='+ add new item' />
				<Button type='button' btnClass='big' text='button primary (l)' />
				<Button type='button' btnClass='primary' text='button primary (s)' />
				<Button type='button' btnClass='secondary' text='button secondary' />
				<Button
					type='button'
					btnClass='destructive'
					text='button destructive'
				/> */}
				{/* <Checkbox id='something' label='something' />
				<Checkbox id='something-else' label='something else' checked={true} /> */}
				{/* <TextInput
					label='text field (idle)'
					name='idle'
					placeholder='enter task name'
					value={idle}
					errors={errors}
					onChange={handleChange}
					required
				/>
				<TextInput
					label='text field (active)'
					name='active'
					placeholder='enter task name'
					value={active}
					errors={errors}
					onChange={handleChange}
					required
				/> */}
			</form>
		</div>
	);
}

export default App;
