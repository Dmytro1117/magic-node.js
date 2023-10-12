import { createSelector } from "reselect";

const selectBooks = (state) => state.books;

export const getBooks = createSelector([selectBooks], (books) => books.items);

export const getFavoriteBooks = createSelector([selectBooks], (books) => {
  return books.items.filter(({ favorite }) => favorite);
});

export const getFilteredBooks = createSelector(
  [(state) => state.filter, selectBooks],
  (filter, books) => {
    if (!filter) {
      return books.items;
    }
    const normalizedFilter = filter.toLowerCase();
    const result = books.items.filter(({ title, author }) => {
      return (
        title.toLowerCase().includes(normalizedFilter) ||
        author.toLowerCase().includes(normalizedFilter)
      );
    });
    return result;
  }
);
