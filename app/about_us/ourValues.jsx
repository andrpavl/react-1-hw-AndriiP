"use client";

import { Box, Grid, Heading, Text, Card } from "@chakra-ui/react";
import styles from "../page.module.css";

const rules = [
	{
		number: "01",
		title: "Exploration",
		description:
			"We are driven by a deep-seated desire to explore the unknown. We believe that the pursuit of discovery is at the heart of human nature, and we are committed to pushing the boundaries of what is possible.",
	},
	{
		number: "02",
		title: "Innovation",
		description:
			"At Galactica, we prioritize cutting-edge technology and innovation. We are constantly evolving our spacecraft, safety protocols, and services to ensure that our travelers experience the most advanced and secure space journeys available.",
	},
	{
		number: "03",
		title: "Sustainability",
		description:
			"We are committed to making space exploration sustainable for future generations. Our space missions are designed to minimize environmental impact, both on Earth and in space, and to foster a spirit of responsibility towards our universe.",
	},
	{
		number: "04",
		title: "Community",
		description:
			"We believe in the power of collective exploration. Our journeys are not just about reaching new destinations; they are about building a community of space enthusiasts who share a passion for the stars.",
	},
];

const OurValues = () => {
	return (
		<Box color="white" p={10} mt={16}>
			<Heading fontSize={35} mb={10}>
				Rules to Live By
			</Heading>

			<Grid templateColumns="repeat(2, 1fr)" gap={20}>
				{rules.map((rule, index) => (
					<Card key={index} align="end" spacing={3}>
						<Heading fontSize={60}>{rule.number}</Heading>
						<Heading size="md">{rule.title}</Heading>
						<Text fontSize="lg">{rule.description}</Text>
						<hr className={styles.divider} />
					</Card>
				))}
			</Grid>
		</Box>
	);
};

export default OurValues;
