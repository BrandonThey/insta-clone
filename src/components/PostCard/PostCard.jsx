import "./PostCard.scss"

const PostCard = (props) => {
    const {image, alt} = props;

    return <img src={image} alt={alt}></img>
}

export default PostCard