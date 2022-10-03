import "./PostCard.scss"

const PostCard = (props) => {
    const {image, alt} = props;

    return <img src={image} alt={alt} className="post-card"></img>
}

export default PostCard