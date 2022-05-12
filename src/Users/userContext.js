import React, { useState, createContext } from 'react'

let userContext = createContext()

export default userContext

// This will provide data to all its Children
export const UserProvider = ({ children }) => {
	let [userData, setUserData] = useState([
		{
			firstName: 'Person 1',
			position: 'Architect',
			Office: 'Bangalore',
			Age: '24',
			Date: '2019-01-01',
			Salary: 336000,
		},
		{
			firstName: 'Person 2',
			position: 'Architect',
			Office: 'Bangalore',
			Age: '24',
			Date: '2019-01-01',
			Salary: 336000,
		},
	])
	let [productData, setProductData] = useState([
		{
			Name: 'Gaming Desktop',
			Category: 'IT',
			Price: 120000,
		},
		{
			Name: 'Office Laptop',
			Category: 'IT',
			Price: 30000,
		},
	])
	return (
		<userContext.Provider
			value={{ userData, setUserData, productData, setProductData }}
		>
			{children}
		</userContext.Provider>
	)
}
