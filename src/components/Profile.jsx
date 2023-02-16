const Profile = () => {
	return (
		<div className="profile-page__content content-profile">
			<div className="content-profile__image">
				<img src="images.jpg" alt="" />
			</div>
			<div className="content-profile__body">
				<div className="profile__img-ava">
					<img src="avatar.jpeg" alt="" />
				</div>
				<div className="content-profile__text">
					<div className="content-profile__name">Dmitry K.</div>

					<ul className="content-profile__items">
						<li className="content-profile__item">Date of Birth: 2 january</li>
						<li className="content-profile__item">City: Minsk</li>
						<li className="content-profile__item">Education: BSU '11</li>
						<li className="content-profile__item">
							Web Site: https://it-kamasutra.com
						</li>
					</ul>
				</div>
			</div>
			<div className="content-profile__posts posts-content">
				<h2 className="posts-content__title">My posts</h2>
				<textarea
					placeholder="your news..."
					className="posts-content__input"
					name=""
					id=""
					cols="30"
					rows="10"
				></textarea>
				<button type="submit" class="posts-content__button">
					Send
				</button>
				<div className="posts-content__post">
					<div className="posts-content__item">Hey, why nobody love me?</div>
					<div className="posts-content__item">It's our new program! Hey!</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
