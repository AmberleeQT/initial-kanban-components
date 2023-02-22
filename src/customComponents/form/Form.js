import React from 'react';
// import Button from '../button/Button';
// import TextInput from '../text-input/TextInput';

const Form = (props) => {
	const { title, onSubmit, children } = props;

	return (
		<form onSubmit={onSubmit}>
			{/* children here */}
			<h2>{title}</h2>
			{/* <TextInput label='idle text field' name='idle' placeholder='' value={ } errors={ } onChange={ } required/>
			<TextInput />
			<TextInput />
			<Button type='submit' btnClass='' text='' handleClick={null} /> */}
			{children}
		</form>
	);
};

export default Form;
/*
? Text Input
* State & Function for inputs
  const [state, setState] = useState({
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

	<TextInput
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
	/>
*/

/*

	const [state, setState] = useState({
		idle: '',
		active: 'This is an active field',
		incomplete: '',
		errors: false,
	});
	const { idle, active, incomplete, errors } = state;

	const handleInputChange = useCallback(({ target: { name, value } }) => {
		setState((prevState) => ({
			...prevState,
			[name]: value,
		}));
	}, []);

	const validateForm = () => {};

	const handleSubmit = (event, fields) => {
		event.preventDefault();
		const [incomplete] = fields;
		const errors = !incomplete;

		setState((prevState) => ({
			...prevState,
			errors,
		}));
		console.log('handleSubmit - errors : ');
		if (!errors) {
			alert(JSON.stringify({ incomplete }, null, 4));
		}

		/*
			@param value 
				— A JavaScript value, usually an object 
					or array, to be converted.

			@param replacer 
				— A function that transforms the results.

			@param space 
				— Adds indentation, white space, 
					and line break characters to the 
					return-value JSON text to make it 
					easier to read.
		* /
	};

-------------------------

<form action='' noValidate>
				{/* noValidate -> prevent native HTML5 form validation so *I* can handle the validation and errors * /}
				<TextInput
					label='idle text field'
					name='idle'
					placeholder='enter text here'
					value={idle}
					errors={errors}
					onChange={handleInputChange}
					required
				/>
				<TextInput
					label='Active text field'
					name='active'
					placeholder='enter text here'
					value={active}
					errors={errors}
					onChange={handleInputChange}
					required
				/>
				<TextInput
					label='Error field'
					name='incomplete'
					placeholder='enter text here'
					value={incomplete}
					errors={errors}
					onChange={handleInputChange}
					required
				/>
				<Button
					style={{ marginTop: '1rem' }}
					type='submit'
					btnClass='big'
					text='Submit'
				/>
				{/* </Form> * /}
			</form >
				
*/
