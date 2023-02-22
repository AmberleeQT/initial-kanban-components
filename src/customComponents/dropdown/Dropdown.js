import React, { useState, useRef, useEffect } from 'react';
import ChevronUp from '../../assets/icon-chevron-up.svg';
import ChevronDown from '../../assets/icon-chevron-down.svg';
import './_dropdown.scss';
import { SelectContext, useSelectContext } from './selectContex';
// import { useOnClickOutside } from '../hooks/useOnClickOutside';
// useOnClickOutside
const useOnClickOutside = (ref, handler) => {
	useEffect(() => {
		const listener = (event) => {
			const el = ref?.current;
			if (!el || el.contains(event?.target || null)) {
				return;
			}

			handler(event); // Call the handler only if the click is outside of the element passed.
		};

		document.addEventListener('mousedown', listener);
		document.addEventListener('touchstart', listener);

		return () => {
			document.removeEventListener('mousedown', listener);
			document.removeEventListener('touchstart', listener);
		};
	}, [ref, handler]); // Reload only if ref or handler changes
};

const Dropdown = ({ children, defaultValue, placeholder }) => {
	const [selectedOption, setSelectedOption] = useState('');
	const [showDropdown, setShowDropdown] = useState(false);
	const showDropdownHandler = () => setShowDropdown(!showDropdown);

	const selectPlaceholder = placeholder || 'Choose an option';

	const selectContainerRef = useRef(null);
	const clickOutsideHandler = () => setShowDropdown(false);
	useOnClickOutside(selectContainerRef, clickOutsideHandler);

	const updateSelectedOption = (option) => {
		setSelectedOption(option);
		setShowDropdown(false);
	};

	return (
		<SelectContext.Provider
			value={{ selectedOption, changeSelectedOption: updateSelectedOption }}>
			<div className='container' ref={selectContainerRef}>
				<div
					className={showDropdown ? 'selected-text active' : 'selected-text'}
					onClick={showDropdownHandler}>
					{selectedOption.length > 0 ? selectedOption : selectPlaceholder}

					{showDropdown ? (
						<img src={ChevronUp} alt='close' />
					) : (
						<img src={ChevronDown} alt='open' />
					)}
				</div>
				<ul
					className={
						showDropdown
							? 'select-options show-dropdown-options'
							: 'select-options hide-dropdown-options'
					}>
					{children}
				</ul>
			</div>
		</SelectContext.Provider>
	);
};

export const Option = ({ children, value }) => {
	// const { changeSelectedOption } = useSelectedContext();
	const { changeSelectedOption } = useSelectContext();
	return (
		<li className='select-option' onClick={() => changeSelectedOption(value)}>
			{children}
		</li>
	);
};

export default Dropdown;
// export Option;
