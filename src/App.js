import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Header />
					<Hero />
				</Route>
			</Switch>
		</Router>
	);
}
export default App;
