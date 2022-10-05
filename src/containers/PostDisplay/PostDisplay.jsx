import "./PostDisplay.scss"
import PostCard from "../../components/PostCard/PostCard";

const PostDisplay = (props) => {
    const {profiles} = props

    const renderImages = profiles[0].posts.map((image) => {
        return(
            <PostCard image={image} alt={"post-image"}/>
        )
    })

    return(
        <>
            <div className="post-type-bar">
                <p>POSTS</p>
                <p>REELS</p>
                <p>VIDEOS</p>
                <p>TAGGED</p>
            </div>
            {renderImages}
        </>
    )
}

export default PostDisplay;