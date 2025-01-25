// src/components/Common/Navigation/Breadcrumbs/Breadcrumbs.tsx
const BreadCrumbs = ({ items }: { items: string[] }) => {
	return (
		<nav aria-label="breadcrumb">
			<ol>
				{items.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ol>
		</nav>
	);
};

export { BreadCrumbs };
