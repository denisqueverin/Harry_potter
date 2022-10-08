import React from "react";
import styles from "./style.module.scss";

const Paginator = ({
  currentHeroes,
  personInPage,
  totalHeroes,
  paginate,
  prevStep,
  nextStep,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalHeroes / personInPage); i++) {
    pageNumbers.push(i);
  }

  let pageNum = [];

  switch (currentPage) {
    case 1:
      pageNum = pageNumbers.slice(currentPage - 1, currentPage + 4);
      break;
    case 2:
      pageNum = pageNumbers.slice(currentPage - 2, currentPage + 3);
      break;
    case pageNumbers.length - 1:
      pageNum = pageNumbers.slice(currentPage - 4, currentPage + 1);
      break;
    case pageNumbers.length:
      pageNum = pageNumbers.slice(currentPage - 5, currentPage);
      break;
    default:
      pageNum = pageNumbers.slice(currentPage - 3, currentPage + 2);
  }

  const divButton = (number) => (
    <button
      onClick={() => paginate(number)}
      className={
        number === currentPage
          ? styles.paginationItemMax
          : styles.paginationItem
      }
      key={number}
    >
      {number}
    </button>
  );

  const divPrev = () => (
    <button
      onClick={prevStep}
      className={
        currentPage === 1 ? styles.paginationItemOpacity : styles.paginationItem
      }
    >
      ←
    </button>
  );

  const divNext = () => (
    <button
      onClick={nextStep}
      className={
        currentPage === pageNumbers.length
          ? styles.paginationItemOpacity
          : styles.paginationItem
      }
    >
      →
    </button>
  );

  const paginateHTML = (
    <div className={styles.pagination}>
      {divPrev()}
      {pageNum.map((number) => divButton(number))}
      {divNext()}
    </div>
  );

  const contentPagination = () => {
    if (
      currentHeroes.length > 11 ||
      Math.ceil(totalHeroes / personInPage) === currentPage
    ) {
      return paginateHTML;
    }
  };

  return contentPagination();
};

export default Paginator;
