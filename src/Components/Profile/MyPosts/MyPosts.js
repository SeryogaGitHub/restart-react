import React from "react";
import Post from "./Post/Posts";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../utils/validators/validators";
import {Textarea} from "../../common/FormsControl/FormsControl";

const maxLength10 = maxLength(10);

let MyPostForm = props => {
  const {handleSubmit} = props;

  return(
    <form className={'form'} onSubmit={handleSubmit}>
      <Field component={Textarea} name="text" placeholder='Повідомлення' validate={[required, maxLength10]}/>
      <button className="btn">Відправити</button>
    </form>
  );
};

MyPostForm = reduxForm({form: "myPostForm"})(MyPostForm);

const MyPosts = React.memo((props) => {
  const {posts, addPost} = props;
  console.log("render");
  let postElements = posts.map((data, id) => <Post key={id} name={data.name} message={data.message} like={data.like}/>);

  let onAddPost = (value) => {
    addPost(value.text)
  };

  return(
    <section className={'my-posts'}>
      <MyPostForm onSubmit={onAddPost}/>
      {postElements}
    </section>
  );
});

export default MyPosts;

