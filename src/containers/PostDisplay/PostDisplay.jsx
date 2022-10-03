import PostCard from "../../components/PostCard/PostCard";
import {
   imageOne,
   imageTwo,
   imageThree,
   imageFour,
   imageFive
} from "../../image_data/image_array.js"
const PostDisplay = () => {
    const imgArray = [imageOne,imageTwo,imageThree,imageFour,imageFive]

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