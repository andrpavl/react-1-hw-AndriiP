 import Link from "next/link";

function PagesFooterItem({ title, path }) {
	return (
		<li>
			<Link href={path}>{title}</Link>
		</li>
	);
}

export default PagesFooterItem;
