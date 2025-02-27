import styles from "./Post.module.css";
import { Link } from "react-router-dom";

const Post = ({ id, author, text }) => {
  return (
    <li className={styles.post}>
      <Link to={id}>
        <p className={styles.author}>{author}</p>
        <p className={styles.text}>{text}</p>
      </Link>
    </li>
  );
};

export default Post;
