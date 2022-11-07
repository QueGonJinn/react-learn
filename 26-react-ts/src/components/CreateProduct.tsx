import { useState } from 'react';
import axios from 'axios';
import { IProduct } from '../models';
import { ErrorMessage } from './ErrorMessage';

const productData: IProduct = {
	title: '',
	price: 13.5,
	description: 'lorem ipsum set',
	image: 'https://i.pravatar.cc',
	category: 'electronic',
	rating: {
		rate: 42,
		count: 2,
	},
};

interface CreateProductProps {
	onCreate: (product: IProduct) => void;
}

export function CreateProduct({ onCreate }: CreateProductProps) {
	const [value, setValue] = useState('');
	const [error, setError] = useState('');

	const submitHandler = async (event: React.FormEvent) => {
		event.preventDefault();
		setError('');
		if (value.trim().length === 0) {
			setError('Please enter valid title');
			return;
		}

		productData.title = value;
		const response = await axios.post<IProduct>(
			'https://fakestoreapi.com/products',
			productData
		);

		onCreate(response.data);
	};
	const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	return (
		<form className="w-full" onSubmit={submitHandler}>
			<input
				type="text"
				className="border rounded py-2 px-4 mb-2 mr-5 w-4/6"
				placeholder="Enter product title..."
				value={value}
				onChange={changeHandler}
			/>

			<button
				type="submit"
				className="py-2 px-4 border rounded bg-[#114b5f] hover:bg-[#236969]"
			>
				Create
			</button>
			{error && <ErrorMessage error={error} />}
		</form>
	);
}
