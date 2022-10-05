import "./PostDisplay.scss"
import PostCard from "../../components/PostCard/PostCard";

const PostDisplay = (props) => {
    const {profile} = props

    const renderImages = profile.posts.map((image) => {
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
            <div className="posts">
                {renderImages}
            </div>
        </>
    )
}

export default PostDisplay;