import { createContext, useState, useEffect } from 'react';
import axios from "axios"
// import { initialItemCount } from '../constants';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [items, setItems] = useState([]);
	const [isRestoreDisabled, setRestoreDisabled] = useState(true);

	useEffect(() => {
		const fetchData = () => {
			axios.get('/items')
				.then(response => {
					const updatedItems = [...response.data]; 
					setItems(updatedItems); 
					setRestoreDisabled(false); 
				})
				.catch(error => {
					console.error('Error fetching data:', error);
				});
		};
        fetchData(); 
    }, []);

	return (
		<GlobalContext.Provider value={{ items, setItems, isRestoreDisabled, setRestoreDisabled }}>{children}</GlobalContext.Provider>
	);
};
