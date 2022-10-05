import "./StoriesSection.scss"
const StoriesSection = (props) => {
    const {profile} = props
    return(
        <div>
            <img src={profile.profilePicture} className="insta-story-icon"></img>
            <img src={profile.profilePicture} className="insta-story-icon"></img>
        </div>
    )
}

export default StoriesSection