// src/components/Common/Anchor/Anchor.tsx
const Anchor = ({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) => {
	return <a href={href}>{children}</a>;
};

export { Anchor };
