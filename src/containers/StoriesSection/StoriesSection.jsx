import "./StoriesSection.scss"
const StoriesSection = (props) => {
    const {profiles} = props
    return(
        <div>
            <img src={profiles[0].profilePicture} className="insta-story-icon"></img>
            <img src={profiles[0].profilePicture} className="insta-story-icon"></img>
        </div>
    )
}

export default StoriesSection