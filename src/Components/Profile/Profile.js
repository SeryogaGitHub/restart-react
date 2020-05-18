import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";

const Profile = (props) => {
  const {posts, addPost, profile, status, updateStatus} = props;

  return(
    <section className={'profile-page'}>
      <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
      <MyPosts posts={posts} addPost={addPost}/>
    </section>
  );
};

export default Profile;

