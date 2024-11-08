import { useAuth } from "store/context/AuthContext";

const Profile = () => {
	const { currentUser } = useAuth();

	return (
		<section className={`panel_section middle_section`}>
			<div className="header">
				<div className="section_title t-h2">Profile</div>
			</div>
			<div className="content">
				<div>
					<h1>Welcome, {currentUser?.email || "Guest"}</h1>
				</div>
			</div>
		</section>
	)
} 

export default Profile;