import React from 'react'
import { Typography, Button, Box, Grid, Stack } from "@mui/material";

export const Home = () => {
  return (
		<div class="scroll">
			<Grid container rowSpacing={2}>
				<Grid xs={6} sx={{ textAlign: "center", marginTop: 15 }}>
					<Stack
						spacing={{ xs: 4, sm: 6 }}
						direction="column"
						useFlexGap
						flexWrap="wrap"
						alignItems="center"
					>
						<Typography
							fontSize={50}
							fontWeight="500"
							sx={{
								flexGrow: 1,
							}}
						>
							Track and Reduce your
							<br />
							Carbon Footprint.
						</Typography>
						<Typography>
							Monitor daily activities and discover
							<br />
							personalized recommendations for
							<br />
							reducing your environmental impact.
						</Typography>
						<Button
							href="/register"
							variant="contained"
							align="center"
							size="large"
							sx={{
								textTransform: "capitalize",
								flexGrow: 1,
							}}
						>
							Get Started
						</Button>
					</Stack>
				</Grid>
				<Grid xs={6} sx={{ textAlign: "center", marginTop: 15 }}>
					<Box
						width={450}
						component="img"
						alt="Carbon Footprint"
						src={require("../assets/footprint.png")}
					/>
				</Grid>
			</Grid>
		</div>
  );
}