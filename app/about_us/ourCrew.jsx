import { Box, Card, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";

const OurCrew = () => {
	const crew = [
		{
			img: "/crew/image-douglas-hurley.webp",
			name: "Captain Douglas Hurley",
			description:
				"A former NASA astronaut with over 15 years of experience, Captain Vega leads our missions with unparalleled expertise and a passion for space exploration.",
		},
		{
			img: "/crew/image-anousheh-ansari.webp",
			name: "Dr. Anousheh Ansari",
			description:
				"Our chief astrophysicist, Dr. Ansari, is a renowned scientist who has contributed to major space discoveries. He ensures that every journey is as educational as it is exhilarating.",
		},
		{
			img: "/crew/image-mark-shuttleworth.webp",
			name: "Chief Engineer Mark Shuttleworth",
			description:
				"With her extensive background in aerospace engineering, Hana Lee is responsible for the state-of-the-art technology that powers our spacecraft. Her innovation ensures that our travelers are always in safe hands.",
		},
		{
			img: "/crew/image-victor-glover.webp",
			name: "Mission Specialist Victor Glover",
			description:
				"As a mission specialist, Alex’s job is to ensure that every aspect of the journey runs smoothly. With a background in both science and adventure tourism, Alex is the perfect guide for our space travelers.",
		},
	];
	return (
		<Box>
			<Box align={"start"}>
				<Heading fontSize={35} mt={16} mb={16}>
					Meet our geneious team
				</Heading>
				<Text fontSize={16} mb={16} w={"50%"}>
					Our crew is the heart and soul of Galactica. We are a diverse team of
					seasoned space explorers, engineers, and visionaries who are united by
					a common goal: to make space travel accessible and exciting for all.
				</Text>
			</Box>
			<Grid templateColumns={"repeat(4, 1fr)"} gap={8} mt={30}>
				{crew.map((member, index) => (
					<Card key={index}>
						<Image
							src={member.img}
							alt={member.name}
							height={250}
							w={180}
							alignSelf={"center"}
							mb={10}
						/>
						<Heading mb={14} align={"center"}>
							{member.name}
						</Heading>
						<Text align={"center"}>{member.description}</Text>
					</Card>
				))}
			</Grid>
		</Box>
	);
};

export default OurCrew;
