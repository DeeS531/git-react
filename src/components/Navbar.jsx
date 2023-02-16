const Navbar = () => {
	return (
		<nav className="profile-page__sandbar sandbar-profile">
			<ul className="sandbar-profile__items">
				<li className="sandbar-profile__item">
					<a href="#">Profile</a>{" "}
				</li>
				<li className="sandbar-profile__item">
					<a href="#">Messages</a>{" "}
				</li>
				<li className="sandbar-profile__item">
					<a href="#">News</a>{" "}
				</li>
				<li className="sandbar-profile__item">
					<a href="#">Music</a>{" "}
				</li>
				<li className="sandbar-profile__item">
					<a href="#">Settings</a>{" "}
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
