import RegisterBlock from "../../components/Modals/Register";

const Profile = () => {
	return (
		<section className={`panel_section middle_section`}>
			<div className="header">
				<div className="section_title t-h2">Profile</div>
			</div>
			<div className="content">
				<RegisterBlock/>
			</div>
		</section>
	)
} 

export default Profile;