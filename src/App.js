import "./App.scss";
import Header from './components/Header'
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
const App = () => {
	return (
		<div className="app-wrapper">
			<Header/>
			<div className="page">
				<div className="page__profile profile-page">
					<div className="profile-page__container">
					<Navbar/>
						<Profile/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
