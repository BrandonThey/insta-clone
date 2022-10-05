import {
    profilePicture,
    imageOne,
    imageTwo,
    imageThree,
    imageFour,
    imageFive,
    dogsOne,
    dogsTwo,
    dogsThree,
    dogsFour,
    dogsProfilePic
 } from "../image_data/images"

const profiles = [
    {
        profileName: "cats_of_instagram",
        profilePicture: profilePicture,
        numOfPosts: "16,889",
        numOfFollowers: "13.1m",
        numOfFollowing: "7",
        bioHeader: "Cats of Instagram",
        bioContent: "The #catsofinstagram channel. submit: hastag or link below! collab: partner@catsofinstagram.com catsofinstagram.com",
        storyImages: [imageFive,imageFour],
        storyCaptions: ["Cool Cats", "Wild Wednesday"],
        posts: [imageOne, imageTwo, imageThree, imageFour, imageFive],
    },
    {
        profileName: "dogs_of_instagram",
        profilePicture: dogsProfilePic,
        numOfPosts: "4",
        numOfFollowers: "1,500",
        numOfFollowing: "30",
        bioHeader: "Dogs of Instagram",
        bioContent: "The #dogs_of_instagram channel. submit: hastag or link below! collab: partner@dogsofinstagram.com dogsofinstagram.com",
        storyImages: [dogsFour, dogsThree],
        storyCaptions: ["Doggy Days", "Dogs Of Insta"],
        posts: [dogsOne, dogsTwo, dogsThree, dogsFour],
    }
]
export default profiles;