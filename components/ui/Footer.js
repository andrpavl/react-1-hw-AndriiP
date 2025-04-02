"use client";

import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";
import PagesFooterItem from "./PagesFooterItem";

import { FaFacebook, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";
import SocialMediaItem from "./SocialMediaItem";

export const Footer = () => {
	const path = usePathname().split("?")[0];

	const pagesItems = [
		{
			title: "ABOUT US",
			link: "/about_us",
		},
		{
			title: "DESTINATION",
			link: "/destination",
		},
		{
			title: "NASA COLLABORATION",
			link: "/nasa_collaboration",
		},
	];
	const socialMediaItems = [
		{
			link: "https://facebook.com",
			mediaTitle: "Facebook",
			mediaIcon: <FaFacebook />,
		},
		{
			link: "https://instagram.com",
			mediaTitle: "Instagram",
			mediaIcon: <FaInstagram />,
		},
		{
			link: "https://tiktok.com",
			mediaTitle: "Tiktok",
			mediaIcon: <FaTiktok />,
		},
		{
			link: "https://linkedin.com",
			mediaTitle: "LinkedIn",
			mediaIcon: <FaLinkedin />,
		},
	];
	return (
		<footer className={path !== "/" ? styles.footer : styles.hidden}>
			<div className={styles.footerDescription}>
				<h3>Galactica</h3>
				<p>
					Explore the universe and beyond. Your journey to the stars starts
					here.
				</p>
				<p>&copy; 2024 Galactica. All rights reserved.</p>
			</div>

			<div className={styles.pages}>
				<h3>Pages</h3>
				<ul className={styles.footerList}>
					{pagesItems.map(({ title, link }) => (
						<PagesFooterItem key={link} title={title} path={link} />
					))}
				</ul>
			</div>
			<div className={styles.footerLinks}>
				<h3>Follow us</h3>
				<ul className={styles.footerList}>
					{socialMediaItems.map(({ link, mediaTitle, mediaIcon }) => (
						<SocialMediaItem
							url={link}
							title={mediaTitle}
							icon={mediaIcon}
							key={link}
						/>
					))}
				</ul>
			</div>
		</footer>
	);
};
