"use client";

import { useState } from "react";

import { AddWishlistItem } from "@/components/destination/AddWishlistItem";
import PlanetCard from "./planetCard";
import PlanetWishlistItem from "./planetWishListItem";
import styles from "@/components/destination/destination.module.css";

export const Destinations = () => {
	const [selectedPlanets, setSelectedPlanets] = useState([]);

	const planetsNames = ["Europa", "Moon", "Mars", "Titan"];

	const onAddOrRemovePlanet = (name, thumbnail) => {
		setSelectedPlanets((prevSelectedPlanets) => {
			const exists = prevSelectedPlanets.some((planet) => planet.name === name);
			return exists
				? prevSelectedPlanets.filter((planet) => planet.name !== name)
				: [...prevSelectedPlanets, { name, thumbnail }];
		});
	};

	const getPlanetDescription = (planet) => {
		const descriptions = {
			Europa:
				"Europa, one of Jupiter’s moons, is an icy world with a hidden ocean beneath its surface...",
			Moon: "Our closest celestial neighbor, the Moon, is a silent witness to Earth's history...",
			Mars: "Mars, the Red Planet, is a barren yet fascinating world with vast deserts...",
			Titan:
				"Titan, Saturn's largest moon, is a world of dense atmosphere and liquid methane lakes...",
		};
		return descriptions[planet];
	};

	const removeFromWishlist = (name) => {
		setSelectedPlanets((prev) => prev.filter((planet) => planet.name !== name));
	};

	return (
		<div className="fullBGpicture">
			<main className="mainContent">
				<h1>Travel destinations</h1>

				<section className="card">
					<h2>Wishlist</h2>
					{selectedPlanets.length > 0 ? (
						<p>You have {selectedPlanets.length} in your wishlist</p>
					) : (
						<p>No planets in wishlist :(</p>
					)}

					<AddWishlistItem onAddWishlistItem={onAddOrRemovePlanet} />

					<h3>Your current wishlist</h3>
					<div className={styles.wishlistList}>
						{selectedPlanets.map((planet) => (
							<PlanetWishlistItem
								key={planet.name}
								name={planet.name}
								onRemove={() => removeFromWishlist(planet.name)}
								thumbnail={planet.thumbnail}
							/>
						))}
					</div>
				</section>

				<section className="card">
					<h2>Possible destinations</h2>
					{planetsNames.map((planet) => (
						<PlanetCard
							key={planet}
							name={planet}
							description={getPlanetDescription(planet)}
							thumbnail={`destination/image-${planet.toLowerCase()}.png`}
							onAddOrRemovePlanet={() =>
								onAddOrRemovePlanet(
									planet,
									`/destination/image-${planet.toLowerCase()}.png`
								)
							}
							isSelected={selectedPlanets.some((p) => p.name === planet)}
						/>
					))}
				</section>
			</main>
		</div>
	);
};

export default Destinations;
