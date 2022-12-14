import React from 'react';
import Home from './components/Home';
import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import OtherActivity from './components/OtherActivity';
import Contact from './components/Contact';
import About from './components/About';
import CustomNavbar from './components/CustomNavbar';
import CustomFooter from './components/CustomFooter';
import "./App.css"
import WaterActivity from './components/WaterActivity';
import ScubaDive from './components/ScubaDive';


const App = () => {
	return (
		<div className='container'>
         
		 <BrowserRouter>
		 <CustomNavbar/>
		
				<Routes>
                     
					<Route exact path="/" element={<Home/> } />
					<Route exact path="/ScubaDive"element={<ScubaDive/>} />
					<Route exact path="/WaterActivity"element={<WaterActivity/>} />
					<Route exact path="/OtherActivity"element={<OtherActivity/>} />
					<Route exact path="/Contact" element={<Contact/>} />
                    <Route exact path="/About" element={<About/> } />
					<Route exact path="*" element={<Home/>} />

				</Routes>
				<CustomFooter/>
			</BrowserRouter>

		</div>
		
	);
};
export default App;






