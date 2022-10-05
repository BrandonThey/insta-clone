import "./ProfileSection.scss"
const ProfileSection = (props) => {

    const {profiles} = props;

    return(
        <div className="profile">
            <img className="profile-image" src={profiles[0].profilePicture} alt="Profile"/>

            <div className="bio-section">
                <div className="profile-header">
                    <h2 className="profile-header-name">{profiles[0].profileName}</h2>
                    <button className="profile-header-follow">Follow</button>
                    <button className="profile-header-recommended">v</button>
                    <p className="profile-header-settings">...</p>
                </div>
                <div className="profile-stats">
                    <h3 className="profile-stats-posts">{profiles[0].numOfPosts} posts</h3>
                    <h3 className="profile-stats-followers">{profiles[0].numOfFollowers} followers</h3>
                    <h3 className="profile-stats-following">{profiles[0].numOfFollowing} following</h3>
                </div>
                <div className="profile-bio">
                    <h3 className="profile-bio-header">{profiles[0].bioHeader}</h3>
                    <p className="profile-bio-text">{profiles[0].bioContent}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileSection;