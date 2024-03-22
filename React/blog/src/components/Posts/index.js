const Post = (props) => {
  return (
    <div className="post mx-2">
      <div className="img-post"></div>
      <h5>{props.subtitle}</h5>
      <h3>{props.title}</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo incidunt adipisci sapiente odit debitis quisquam suscipit, iusto ipsum quasi, numquam reprehenderit nostrum soluta iste in eum facilis impedit nihil corrupti.
      </p>
      <div className="flex pt-2">
        <div className="img-profile"></div>
        <div className="desc-profile mt-1 ml-2">
          <h6 className="color-blue">Fulano de tal</h6>
          <p>Mar 18, 2024 - 10h read</p>
        </div>
      </div>
    </div>
  );
}
export default Post;