import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Hugo");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const uri = "http://localhost:9000/posts";

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const newPost = {
      title,
      body,
      author,
    };
    // console.log("newPost", newPost);

    //make a POST request to our endpoint
    fetch(uri, {
      method: "POST",
      //type of content
      headers: { "Content-Type": "application/json" },
      //the data we send made to a json string
      body: JSON.stringify(newPost),
    }).then(() => {
      console.log("newPost added");
      setIsLoading(false);
      //back 1
      navigate(-1);
    });
  };

  return (
    <div className="create_post">
      <h2>Add a New Blog</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            required
            value={title}
            //when changing this input=>change title
            //update title with the event object
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label>
          Body:
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </label>

        <label>
          Author:
          <select value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value="hugo">Hugo</option>
            <option value="filip">Filip</option>
          </select>
        </label>

        {!isLoading && <button onClick={handleSubmit}>Add Post</button>}
        {isLoading && <button disabled>Adding Post...</button>}
      </form>
    </div>
  );
};

export default CreatePost;
