import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Footer from "./Footer";
import Reviews from "./Reviews";

export default function Home() {
	return (
		<div>
			<Navbar />
			<Hero />
			<About />
			<Services />
			<Reviews />
			<Footer />
		</div>
	);
}
