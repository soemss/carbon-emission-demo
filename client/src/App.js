import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Logins } from "./components/Logins";
import { Register } from "./components/Register";
import { Home } from "./components/Home";
import { Profile } from "./components/Profile";
import { Calculator } from "./components/Calculator";
import { About } from "./components/About";

import Navbar from "./components/Navbar";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Logins />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/calculator" element={<Calculator />} />
					<Route path="/register" element={<Register />} />
                    <Route path="/about" element={<About />} />
				</Routes>
				{/* {
          currentForm === 'login'? <Login /> : <Register />
        } */}
			</div>
		</Router>
	);
}

export default App;
