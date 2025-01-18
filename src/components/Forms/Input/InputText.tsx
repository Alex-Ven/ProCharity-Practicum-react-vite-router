// src/components/Forms/Input/InputText/InputText.tsx
const InputText = ({
	value,
	onChange,
}: {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
	return <input type="text" value={value} onChange={onChange} />;
};

export { InputText };
