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
            {renderImages}
        </>
    )
}

export default PostDisplay;