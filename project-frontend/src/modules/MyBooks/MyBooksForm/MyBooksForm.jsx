import { useState, useEffect, useRef } from "react";

import initialState from "./initialState";

import styles from "./my-books-form.module.scss";

const MyBooksForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const titleRef = useRef(false);

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  const handleChange = ({ target }) => {
    setState((prevState) => {
      const { name, value, checked, type } = target;
      const newValue = type === "checkbox" ? checked : value;

      return { ...prevState, [name]: newValue };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ ...initialState });
  };

  const { title, author, favorite, genre, date } = state;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label>Book title</label>
        <input
          ref={titleRef}
          value={title}
          name="title"
          onChange={handleChange}
          className={styles.textField}
          placeholder="Book title"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label>Book author</label>
        <input
          value={author}
          name="author"
          onChange={handleChange}
          className={styles.textField}
          placeholder="Book author"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label>Book genre</label>
        <input
          value={genre}
          name="genre"
          onChange={handleChange}
          className={styles.textField}
          placeholder="fantastic or love"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label>Book date</label>
        <input
          value={date}
          name="date"
          onChange={handleChange}
          className={styles.textField}
          placeholder="16-10-2009"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label>Favorite</label>
        <input
          checked={favorite}
          name="favorite"
          onChange={handleChange}
          className={styles.checkbox}
          type="checkbox"
        />
      </div>
      <button type="submit">Add book</button>
    </form>
  );
};

export default MyBooksForm;
/*
class MyBooksForm extends Component {
    state = {...initialState}

    handleChange = ({ target }) => {
        const { name, value, checked, type } = target;
        const newValue = type === "checkbox" ? checked : value;
        this.setState({
            [name]: newValue
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {onSubmit} = this.props;
        onSubmit({...this.state});
        this.reset();
    }

    reset() {
        this.setState({ ...initialState })
    }

    render() {
        const {title, author, favorite} = this.state;

        return (
            <form onSubmit={this.handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label>Book title</label>
                    <input value={title} name="title" onChange={this.handleChange} className={styles.textField} placeholder="Book title" required />
                </div>
                <div className={styles.formGroup}>
                    <label>Book author</label>
                    <input value={author} name="author" onChange={this.handleChange} className={styles.textField} placeholder="Book author" required />
                </div>
                <div className={styles.formGroup}>
                    <label>Favorite</label>
                    <input checked={favorite} name="favorite" onChange={this.handleChange} className={styles.checkbox} type="checkbox" />
                </div>
                <button type="submit">Add book</button>
            </form>
        )
    }
}
*/
