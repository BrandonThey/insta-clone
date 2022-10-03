import PostCard from "../../components/PostCard/PostCard";
import "./PostDisplay.scss"
const PostDisplay = () => {
    const imgArray = [
        "../../image_data/Adorable-animal-cat-20787.jpg",
        "../../image_data/download (1).jpg",
        "../../image_data/download (2).jpg",
        "../../image_data/download (3).jpg",
        "../../image_data/download.jpg"]

    const renderImages = imgArray.map((image) => {
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