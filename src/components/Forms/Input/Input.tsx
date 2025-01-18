// src/components/Forms/Input/InputText.tsx
const Input = ({
	value,
	onChange,
}: {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
	return <input type="text" value={value} onChange={onChange} />;
};

export { Input };
