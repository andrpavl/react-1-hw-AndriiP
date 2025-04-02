"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import RoverPhoto from "./RoverPhoto";

const API_KEY = "PKTSdWJmzMNChnZL6slDT98i57kv5F38hh0J7f6w";

const NASA_URLs = {
	astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
	marsRoverPhoto: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`,
};

export const NasaCollaboration = () => {
	const [dailyImg, setDailyImg] = useState({});
	const [roverPhoto, setRoverPhoto] = useState({});

	useEffect(() => {
		const fetchRoverPhotos = async () => {
			const roverPhotoResponse = await fetch(NASA_URLs.marsRoverPhoto).then(
				(response) => response.json()
			);
			setRoverPhoto(roverPhotoResponse);
		};

		fetchRoverPhotos();
	}, []);

	useEffect(() => {
		const fetchDailyImg = async () => {
			const dailyImgResponce = await fetch(NASA_URLs.astronomyPicOfTheDay).then(
				(resp) => resp.json()
			);
			setDailyImg(dailyImgResponce);
		};
		fetchDailyImg();
	}, []);

	return (
		<div className="fullBGpicture">
			<main className="mainContent">
				<h1>Collaboration with NASA</h1>
				<section className="card">
					<h2>Astronomy Picture of the day</h2>
					<h3>{dailyImg.title}</h3>
					<img src={dailyImg.url} className={styles.dailyImg} />
					<p>{dailyImg.explanation}</p>
				</section>
				<section className="card">
					<h2>Rover Photos</h2>

					{roverPhoto?.photos?.length ? (
						<ul className={styles.imgList}>
							{roverPhoto.photos.map((photo, index) => {
								return (
									<RoverPhoto
										key={index}
										src={photo.img_src}
										roverName={photo.rover.name}
										date={photo.earth_date}
									/>
								);
							})}
						</ul>
					) : (
						<p>Loading rover photos...</p>
					)}
				</section>
			</main>
		</div>
	);
};

export default NasaCollaboration;
