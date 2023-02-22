import { createContext, useContext } from 'react';

const SelectContext = createContext({
	selectedOption: '',
	changeSelectedOption: (option) => {},
});

const useSelectContext = () => {
	const context = useContext(SelectContext);

	if (!context) {
		throw new Error('Error creating Selected Context');
	}

	return context;
};

export { useSelectContext, SelectContext };
