// src/components/Common/Tooltip/Tooltip.tsx
const Tooltip = ({
	text,
	children,
}: {
	text: string;
	children: React.ReactNode;
}) => {
	return (
		<div className="tooltip">
			{children}
			<span className="tooltip-text">{text}</span>
		</div>
	);
};

export { Tooltip };
