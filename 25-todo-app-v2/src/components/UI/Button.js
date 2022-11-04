import './Button.scss';

function Button(props) {
	const { onClick, children, title, disabled = false } = props;
	return (
		<button
			{...props}
			disabled={disabled}
			className="button"
			onClick={onClick}
			title={title}
		>
			{children}
		</button>
	);
}

export default Button;
