import React from "react";
import { Toolbar, Typography, Button, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
export default function Navbar() {
    const theme = useTheme();

	return (
		<Toolbar
			sx={{
				bgcolor: "background.white",
				paddingTop: 5,
				paddingBottom: 10,
			}}
		>
			<Typography
				variant="h5"
				fontWeight="650"
				sx={{
					cursor: "pointer",
					flexGrow: 1,
					"&:hover": {
						color: "#c7d8ed",
					},
					["@media (max-width:2px)"]: {
						paddingBottom: "1rem",
					},
				}}
			>
				<Link
					to="/"
					style={{ textDecoration: "none", color: "#020303" }}
				>
					EcoTrack
                    <Box
                        width={40}
                        component="img"
                        sx={{
                            flexGrow: 1,
                            position: "fixed",
                            paddingTop: 0.5,
                            paddingLeft: 1,
                        }}
                        alt="Carbon Footprint"
                        src={require("../assets/leafico.png")}
                    />
				</Link>
			</Typography>
			<Typography
				sx={{
					cursor: "pointer",
					flexGrow: 1,
					"&:hover": {
						color: "#c7d8ed",
					},
					["@media (max-width:2px)"]: {
						paddingBottom: "1rem",
					},
				}}
			>
				<Link
					to="/profile"
					style={{ textDecoration: "none", color: "#020303" }}
				>
					Profile
				</Link>
			</Typography>
			<Typography
				sx={{
					cursor: "pointer",
					flexGrow: 1,
					"&:hover": {
						color: "#c7d8ed",
					},
					["@media (max-width:2px)"]: {
						paddingBottom: "1rem",
					},
				}}
			>
				<Link
					to="/calculator"
					style={{ textDecoration: "none", color: "#020303" }}
				>
					Calculator
				</Link>
			</Typography>
			<Typography
				sx={{
					cursor: "pointer",
					flexGrow: 1,
					paddingRight: 25,
					"&:hover": {
						color: "#c7d8ed",
					},
					["@media (max-width:2px)"]: {
						paddingBottom: "1rem",
					},
				}}
			>
				<Link
					to="/about"
					style={{ textDecoration: "none", color: "#020303" }}
				>
					About
				</Link>
			</Typography>
			<Button
				href="/login"
				variant="contained"
				sx={{ right: 100, textTransform: "capitalize" }}
			>
				Login
			</Button>
		</Toolbar>
	);
}
