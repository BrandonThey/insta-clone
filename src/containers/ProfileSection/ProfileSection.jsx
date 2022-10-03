import "./ProfileSection.scss"

const ProfileSection = () => {

    return(
        <div className="profile">
            <img className="profile-image" src="blah" alt="Profile"/>

            <div className="bio-section">
                <div className="profile-header">
                    <h2 className="profile-header-name">Cats_of_instagram</h2>
                    <button className="profile-header-follow">Follow</button>
                    <button className="profile-header-recommended">V</button>
                    <button className="profile-header-settings">...</button>
                </div>
                <div className="profile-stats">
                    <h3 className="profile-stats-posts">16,889 posts</h3>
                    <h3 className="profile-stats-followers">13.1m followers</h3>
                    <h3 className="profile-stats-following">7 following</h3>
                </div>
                <div className="profile-bio">
                    <h3 className="profile-bio-header">Cats of Instagram</h3>
                    <p className="profile-bio-text">
                        The #catsofinstagram channel.
                        submit: hastag or link below!
                        collab: partner@catsofinstagram.com
                        catsofinstagram.com
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProfileSection;