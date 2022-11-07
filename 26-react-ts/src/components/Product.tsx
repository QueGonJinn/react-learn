import { useState } from 'react';
import { IProduct } from '../models';

interface ProductProps {
	product: IProduct;
}

function Product({ product }: ProductProps) {
	const [details, setDetails] = useState(false);
	const btnBgClassName = details ? 'bg-orange-600' : 'bg-cyan-600';
	const btnClasses = ['mb-2 py-2 px-4 border rounded', btnBgClassName].join(
		' '
	);
	return (
		<div className="border bg-white py-2 px-4 basis-1/4 rounded flex flex-col justify-center items-center h-[360px] w-1/2">
			<img
				src={product.image}
				alt={product.title}
				className="w-1/3 rounded mb-3"
			/>
			<p className="mb-3">{product.title}</p>
			<button
				className={btnClasses}
				onClick={() => setDetails((prev) => !prev)}
			>
				{details ? 'Hide Details' : 'Show Details'}
			</button>
			{details && (
				<div>
					<p>{product.description}</p>
				</div>
			)}

			<p className="font-bold">{product.price}</p>
		</div>
	);
}

export default Product;
