import { Box, Flex, Grid, Heading, Img } from "@chakra-ui/react";

const logos = [
	{ alphabet: "/business_partners/alphabet-logo.png" },
	{ amazon: "/business_partners/amazon_logo.png" },
	{ cbc: "/business_partners/CBC_Logo_White.png" },
	{ microsoft: "/business_partners/Microsoft-Logo-white.png" },
	{ nyu: "/business_partners/nyu-logo.png" },
	{ queens: "/business_partners/QueensLogo_white.png" },
	{ samsung: "/business_partners/samsung-logo.png" },
	{ sodexo: "/business_partners/sodexo-logo.png" },
];

const OurPartners = () => {
	return (
		<Box>
			<Heading fontSize={35} mt={16} mb={16}>
				We collaborate with some of the most respected names in the space and
				technology industries to make every journey extraordinary.
			</Heading>
			<Grid templateColumns="repeat(4, 1fr)" placeItems={"center"} gap={6} mb={16}>
				{logos.map((logo, index) => {
					const key = Object.keys(logo)[0];
					const path = logo[key];
					return (
						<Img
							key={index}
							src={path}
							alt={key}
							w={150}
							alignSelf={"center"}
						/>
					);
				})}
			</Grid>
		</Box>
	);
};

export default OurPartners;
