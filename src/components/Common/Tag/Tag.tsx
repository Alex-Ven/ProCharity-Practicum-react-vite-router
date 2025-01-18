// src/components/Common/Tag/Tag.tsx
const Tag = ({ label }: { label: string }) => {
	return <span className="tag">{label}</span>;
};

export { Tag };

const PrimaryTag = ({ label }: { label: string }) => (
	<span className="primary-tag">{label}</span>
);
const OutlineTag = ({ label }: { label: string }) => (
	<span className="outline-tag">{label}</span>
);
const ViewsTag = ({ label }: { label: string }) => (
	<span className="views-tag">{label}</span>
);
const DiamondTag = ({ label }: { label: string }) => (
	<span className="diamond-tag">{label}</span>
);

export { PrimaryTag, OutlineTag, ViewsTag, DiamondTag };
