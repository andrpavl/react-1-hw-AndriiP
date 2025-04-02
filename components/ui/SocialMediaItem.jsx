import { Link } from "@chakra-ui/react";

function SocialMediaItem({ url, title, icon }) {
	return (
		<li>
			<Link display={"flex"} alignItems="center" href={url} gap={8} isExternal>
				{icon}
				{title}
			</Link>
		</li>
	);
}

export default SocialMediaItem;
