
function ProfilePicture(){
    const imageUrl = './src/assets/MattMan_pic.jpeg';

    const handleClick = (e) => e.target.style.display = "none";

    return(<img className="profile-pic" onClick={(e) => handleClick(e)} src={imageUrl}></img>);
}

export default ProfilePicture