import "./StoriesSection.scss"
import { profilePicture } from "../../image_data/image_array"
const StoriesSection = () => {
    return(
        <div>
            <img src={profilePicture} className="insta-story-icon"></img>
            <img src={profilePicture} className="insta-story-icon"></img>
        </div>
    )
}

export default StoriesSection