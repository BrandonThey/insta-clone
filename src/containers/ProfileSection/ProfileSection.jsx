import "./ProfileSection.scss"
const ProfileSection = (props) => {

    const {profile} = props;

    return(
        <div className="profile">
            <img className="profile-image" src={profile.profilePicture} alt="Profile"/>

            <div className="bio-section">
                <div className="profile-header">
                    <h2 className="profile-header-name">{profile.profileName}</h2>
                    <button className="profile-header-follow">Follow</button>
                    <button className="profile-header-recommended">v</button>
                    <p className="profile-header-settings">...</p>
                </div>
                <div className="profile-stats">
                    <h3 className="profile-stats-posts">{profile.numOfPosts} posts</h3>
                    <h3 className="profile-stats-followers">{profile.numOfFollowers} followers</h3>
                    <h3 className="profile-stats-following">{profile.numOfFollowing} following</h3>
                </div>
                <div className="profile-bio">
                    <h3 className="profile-bio-header">{profile.bioHeader}</h3>
                    <p className="profile-bio-text">{profile.bioContent}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileSection;