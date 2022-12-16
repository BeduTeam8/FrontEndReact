import BarSearch from "../components/BarSearch";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

export default function Landing() {
	return (
		<main className="DrawerOpen maxwidth">
			<Logo mode="dark" />

			<Link to="/searchresults" className="maxwidth">
				<BarSearch className="maxwidth" />
			</Link>
		</main>
	);
}
