import React from "react";
import { Typography, Button, Box, Container } from "@mui/material";

export const About = () => {
    return (
		<div>
			<Container
				sx={{ flexGrow: 1, position: "fixed", left: 100, top: 250 }}
			>
				<Typography
					fontSize={50}
					align="center"
					fontWeight="500"
					sx={{ flexGrow: 1, position: "fixed", paddingLeft: 18 }}
				>
					About :)
				</Typography>
				<Typography
					align="center"
					sx={{ flexGrow: 1, position: "fixed", paddingTop: 15 }}
				>
					With EcoTrack, we hope to encourage users to
					<br />
					limit their carbon pollution, due to how impactful
					<br />
					its effect is on our planet, so that we can keep
					<br />
					smelling fresh air and continue seeing a clean world
				</Typography>
				<Box
					width={800}
					component="img"
					sx={{
						position: "fixed",
						top: 200,
						right: 200,
					}}
					alt="Carbon Footprint"
					src={require("../assets/earth.png")}
				/>
			</Container>
		</div>
	);
}