import "./StoriesSection.scss"
const StoriesSection = (props) => {
    const {profile} = props
    let i = -1;
    const renderStoryTiles = profile.storyImages.map((image) => {
        i++
        return(
            <div className="story-tile">
                <img src={image} className="insta-story-icon" alt="Post"></img>
                <figcaption>{profile.storyCaptions[i]}</figcaption>
            </div>
        )
    })

    return(
        <div className="story-tiles">
            {renderStoryTiles}
        </div>
    )
}

export default StoriesSection