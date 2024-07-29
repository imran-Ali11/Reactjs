import React from 'react'
const user ={
    name:'Abdul Samad',
    imageUrl:'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize:90,
};
const Profile = () => {
  return (
    <div>
     <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
          
        }}
      />
    </div>
  )
}

export default Profile
