// src/components/Forms/Select/Select.tsx
const Select = ({
	options,
	onChange,
}: {
	options: string[];
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) => {
	return (
		<select onChange={onChange}>
			{options.map((option, index) => (
				<option key={index} value={option}>
					{option}
				</option>
			))}
		</select>
	);
};

export { Select };
