import styles from "./my-books-list.module.scss";

const MyBooksList = ({ items, onDeleteBook }) => {
  const elements = items.map(({ _id, title, author, genre, date }) => (
    <li className={styles.listItem} key={_id}>
      Title: {title}. Author: {author}. Genre: {genre}. Date: {date}.{" "}
      <button onClick={() => onDeleteBook(_id)}>delete</button>
    </li>
  ));

  return <ol className={styles.list}>{elements}</ol>;
};

export default MyBooksList;
