import React, { useState, useContext } from 'react';
import { CreateProduct } from '../components/CreateProduct';
import { ErrorMessage } from '../components/ErrorMessage';
import { Loader } from '../components/Loader';
import { Modal } from '../components/Modal';
import Product from '../components/Product';
import { useProducts } from '../hooks/products';
import { IProduct } from '../models';
import { ModalContext } from '../context/ModalContext';

export function ProductPage() {
	const { loading, error, products, addProduct } = useProducts();
	const { modal, open, close } = useContext(ModalContext);

	const createHandler = (product: IProduct) => {
		close();
		addProduct(product);
	};

	return (
		<div className="container bg-[#1a936f] mx-auto flex flex-row justify-center flex-wrap items-center m-w-2xl pt-3 gap-6">
			{loading ? (
				<Loader />
			) : error ? (
				<ErrorMessage error={error} />
			) : (
				products.map((product) => (
					<Product product={product} key={product.id} />
				))
			)}

			{modal && (
				<Modal title="Create new product" onClose={() => close()}>
					<CreateProduct onCreate={createHandler} />
				</Modal>
			)}
			<button
				className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl p-2 pb-3"
				onClick={() => open()}
			>
				OnCreate
			</button>
		</div>
	);
}
