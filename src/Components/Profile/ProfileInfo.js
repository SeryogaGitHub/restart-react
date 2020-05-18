import React from "react";
import dPhoto from '../../img/avatars/default-photo.png';
import Placeholder from "../common/Placeholder/Placeholder";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile){
    return <Placeholder/>
  }

  const {aboutMe, photos, fullName} = props.profile;
  const {status, updateStatus} = props;

  return (
    <div className={"ava-description"}>
      <div className="ava">
        {photos.small ? <img src={photos.small} alt=""/> : <img src={dPhoto} alt=""/>}

        <h2>{fullName}</h2>
      </div>

      <ProfileStatus aboutMe={aboutMe} status={status} updateStatus={updateStatus}/>
    </div>
  );
};

export default ProfileInfo;
