// src/components/Forms/Select/SelectCategories/SelectCategories.tsx
const SelectCategories = ({
	categories,
	onChange,
}: {
	categories: string[];
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) => {
	return (
		<select onChange={onChange}>
			{categories.map((category, index) => (
				<option key={index} value={category}>
					{category}
				</option>
			))}
		</select>
	);
};

export { SelectCategories };
