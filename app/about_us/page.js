import OurCrew from "./ourCrew";
import OurValues from "./ourValues";
import styles from "../page.module.css";
import OurPartners from "./ourPartners";

export const Crew = () => {
	return (
		<div className="fullBGpicture">
			<main className="mainContent">
				<h1>About us</h1>
				<section className="card">
					<h2 className={styles.sectionTitle}>Our Values</h2>
					<OurValues />
				</section>
				<section className="card">
					<h2 className={styles.sectionTitle}>The Crew</h2>
					<OurCrew />
				</section>
				<section className="card">
					<h2 className={styles.sectionTitle}>Our Partners</h2>
					<OurPartners />
				</section>
			</main>
		</div>
	);
};

export default Crew;
