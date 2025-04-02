import styles from "./page.module.css";

function RoverPhoto({ src, date, roverName }) {
	return (
		<div>
			<h4>{roverName}</h4>
			<p>Date: {date}</p>
			<img src={src} alt={roverName} className={styles.roverImg} />
		</div>
	);
}

export default RoverPhoto;
