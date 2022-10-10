function Profile ({img}){

    const name = img.split('/')[2].split('.')[0].toUpperCase();

    return (
        <div className="profile card-container font">
            <div className="profile-title">{name}</div>
            <img src={img} className="profile-img"></img>
        </div>
    )
}

export default Profile;