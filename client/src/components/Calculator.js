import React from 'react'
import { Typography, Button, Box, TextField, Grid, Stack, Switch, FormControlLabel, FormGroup } from "@mui/material";
import { PieChart, Pie } from 'recharts';

const electricBill = 0;
const gasBill = 0;
const oilBill = 0;
const yearlyCarMileage = 0;
const yearlyFlightMileage = 0;
const recyleNewspaper = false;
const recyleMetals = false;

const data02 = [
	{
		name: "Electric",
		value: 2400,
	},
	{
		name: "Gas",
		value: 4567,
	},
	{
		name: "Oil",
		value: 1398,
	},
	{
		name: "Car",
		value: 9800,
	},
	{
		name: "Flight",
		value: 3908,
	},
];
export const Calculator = () => {
  return (
		<div>
			<Grid container rowSpacing={2}>
				<Grid xs={2} sx={{ marginTop: 20 }} />
				<Grid
					xs={4}
					sx={{
						marginTop: 15,
						textAlign: "center",
					}}
				>
					<Stack
						spacing={{ xs: 1, sm: 2 }}
						direction="column"
						useFlexGap
						flexWrap="wrap"
						alignItems="center"
					>
						<Typography
							fontSize={40}
							align="center"
							fontWeight="500"
						>
							Calculate your Carbon Footprint
						</Typography>
						<Typography fontSize={30} align="center">
							Ideal: 6,000 - 15,999
							<br />
							Average: 16,000 - 22,000
						</Typography>
						<PieChart width={500} height={300}>
							<Pie
								data={data02}
								dataKey="value"
								nameKey="name"
								cx="50%"
								cy="50%"
								innerRadius={40}
								outerRadius={80}
								fill="#82ca9d"
								label
							/>
						</PieChart>
						<Typography fontSize={30} align="center">
							Total: number
						</Typography>
					</Stack>
				</Grid>
				<Grid xs={3} sx={{ marginTop: 20 }}>
					<Box
						component="form"
						sx={{
							"& .MuiTextField-root": {
								right: 0,
								m: 1,
								width: "25ch",
							},
						}}
					>
						<Stack
							spacing={{ xs: 1, sm: 2 }}
							direction="column"
							useFlexGap
							flexWrap="wrap"
							alignItems="center"
						>
							<Typography fontSize={30}>
								Current Emissions
							</Typography>
							<TextField
								align="center"
								sx={{
									flexGrow: 1,
									maxWidth: "200px",
								}}
								label="Electric Bill"
								size="small"
								defaultValue={0}
							/>
							<TextField
								align="center"
								sx={{
									flexGrow: 1,
									maxWidth: "200px",
								}}
								label="Oil Bill"
								size="small"
								defaultValue={0}
							/>
							<TextField
								sx={{
									flexGrow: 1,
									maxWidth: "200px",
								}}
								label="Gas Bill"
								size="small"
								defaultValue={0}
							/>
							<TextField
								sx={{
									flexGrow: 1,
									maxWidth: "200px",
								}}
								label="Yearly Car Mileage"
								size="small"
								defaultValue={0}
							/>
							<TextField
								sx={{
									flexGrow: 1,
									maxWidth: "200px",
								}}
								label="Yearly Flight Mileage"
								size="small"
								defaultValue={0}
							/>
							<Button
								variant="contained"
								align="center"
								size="large"
								sx={{
									maxWidth: 200,
									textTransform: "capitalize",
									marginLeft: 1,
								}}
							>
								Calculate
							</Button>
						</Stack>
					</Box>
				</Grid>
				<Grid xs={1} sx={{ marginTop: 30 }}>
					<Stack
						spacing={{ xs: 1, sm: 2 }}
						direction="column"
						useFlexGap
						flexWrap="wrap"
						alignItems="center"
					>
                        <FormGroup>
                            <FormControlLabel control={<Switch defaultChecked />} label= "Recycle Newspaper?"/>
                            <FormControlLabel control={<Switch defaultChecked />} label= "Recycle Metals?"/>
                        </FormGroup>
					</Stack>
				</Grid>
                <Grid xs={2} sx={{ marginTop: 20 }} />
			</Grid>
		</div>
  );
}