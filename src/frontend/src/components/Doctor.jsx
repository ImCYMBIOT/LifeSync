import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function User() {
	return (
		<>
			<Navbar />
			<div>
				<h1 className="user__heading">Doctor Services</h1>
				<div className="user__button__container">
					<Link to="/vid">
						<button className="hero__text__button">
							Connect to Ambulance
						</button>
					</Link>
					<Link to="/graph">
						<button className="hero__text__button">
							Get Patient Data
						</button>
					</Link>
					<Link to="/docprof">
						<button className="hero__text__button">
							Doctor's Profile
						</button>
					</Link>
				</div>
			</div>
		</> 
	);
}
