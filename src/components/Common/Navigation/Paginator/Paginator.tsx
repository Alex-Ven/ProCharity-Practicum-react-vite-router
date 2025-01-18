// src/components/Common/Navigation/Paginator/Paginator.tsx
const Paginator = ({
	page,
	totalPages,
	onPageChange,
}: {
	page: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}) => {
	return (
		<div>
			<button onClick={() => onPageChange(page - 1)} disabled={page <= 1}>
				Prev
			</button>
			<span>
				{page} of {totalPages}
			</span>
			<button
				onClick={() => onPageChange(page + 1)}
				disabled={page >= totalPages}
			>
				Next
			</button>
		</div>
	);
};

export { Paginator };
