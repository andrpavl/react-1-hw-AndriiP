"use client";

import { useState } from "react";

import { AddWishlistItem } from "@/components/destination/AddWishlistItem";
import PlanetCard from "./planetCard";

export const Destinations = () => {
	const [selectedPlanets, setSelectedPlanets] = useState([]);

	const planetsNames = ["Europa", "Moon", "Mars", "Titan"];

	const onAddOrRemovePlanet = (name) => {
		setSelectedPlanets((prevSelectedPlanets) =>
			prevSelectedPlanets.includes(name)
				? prevSelectedPlanets.filter((planet) => planet !== name)
				: [...prevSelectedPlanets, name]
		);
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

					<b>List coming soon after lesson 3!</b>

					{/* STOP! - this is for week 3!*/}
					{/* TASK - React 1 week 3 */}
					{/* Import the AddWishlistItem react component */}
					{/* <AddWishlistItem /> */}
					{/* TASK - React 1 week 3 */}
					{/* Convert the list, so it is using selectedPlanets.map() to display the items  */}
					{/* Implement the "REMOVE" function */}
					{/* uncomment the following code snippet: */}
					{/* 
          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => removeFromWishlist('europa')}
              thumbnail="/destination/image-europa.png"
            />
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => removeFromWishlist('europa')}
              thumbnail="/destination/image-europa.png"
            />
          </div> */}
				</section>
				<section className="card">
					<h2>Possible destinations</h2>
					{planetsNames.map((planet) => (
						<PlanetCard
							key={planet}
							name={planet}
							description={getPlanetDescription(planet)}
							thumbnail={`destination/image-${planet.toLowerCase()}.png`}
							onAddOrRemovePlanet={onAddOrRemovePlanet}
							isSelected={selectedPlanets.includes(planet)}
						/>
					))}
				</section>
			</main>
		</div>
	);
};

export default Destinations;
