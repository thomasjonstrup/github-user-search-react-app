import React from "react";

const formatDate = (date: string) => {
	let d = new Date(date);
	let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
	let mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
	let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);

	const newDate = `${da} ${mo} ${ye}`;
	console.log(newDate);

	return newDate;
};

interface ProfileProps {
	data: any;
}

const Profile: React.FC<ProfileProps> = ({ data }) => {
	return (
		<div className="profile">
			<div className="profile__top">
				<img
					src={data.avatar_url}
					alt="Profile image"
					className="profile__image"
				/>
				<div className="profile__info">
					<h1 className="profile__heading">{data.name}</h1>
					<p className="profile__description profile__description--primary">{`@${data.login}`}</p>
					{data.created_at && (
						<p className="profile__description">
							{`Joined ${formatDate(data.created_at)}`}
						</p>
					)}
				</div>
			</div>
			<p className="profile__description">
				{data.bio || "The profile has no bio"}
			</p>
			<div className="profile__content"></div>
			<div className="stats">
				<div className="stats__item">
					<p>{"Repos"}</p>
					<h2>{data.public_repos}</h2>
				</div>
				<div className="stats__item">
					<p>{"Followers"}</p>
					<h2>{data.followers}</h2>
				</div>
				<div className="stats__item">
					<p>{"Follow"}</p>
					<h2>{data.following}</h2>
				</div>
			</div>
			<div className="contact">
				<div className="contact__item">
					<i
						className="icon fa fa-map-marker-alt"
						aria-hidden="true"
					></i>

					<p
						className={`contact__item${
							!data.location ? " contact__item--inactive" : ""
						}`}
					>
						{data.location || "Not available"}
					</p>
				</div>
				<div className="contact__item">
					<i className="icon ion-ios-link"></i>
					<p
						className={`contact__item${
							!data.blog ? " contact__item--inactive" : ""
						}`}
					>
						{data.blog || "Not available"}
					</p>
				</div>
				<div className="contact__item">
					<i className="icon ion-logo-twitter"></i>
					<p
						className={`contact__item${
							!data.twitter_username
								? " contact__item--inactive"
								: ""
						}`}
					>
						{data.twitter_username || "Not available"}
					</p>
				</div>
				<div className="contact__item">
					<i className="fas fa-building"></i>
					<p
						className={`contact__item${
							!data.company ? " contact__item--inactive" : ""
						}`}
					>
						{data.company || "Not available"}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Profile;
