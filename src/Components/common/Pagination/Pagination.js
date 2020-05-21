import React, {useState} from "react";

const Pagination = (props) => {
  const {totalCount, pageSize, currentPage, onChangePages, portionSize = 7} = props;

  let pageCount = Math.ceil(totalCount / pageSize);
  let pages = [];
  let [pointNumber, setPointNumber] = useState(1);
  let leftPortionNumber = (pointNumber - 1) * portionSize +1;
  let rightPortionNumber = pointNumber * portionSize;

  for(let i = 1; i <= pageCount; i++){
    pages.push(i);
  }

  return(
    <div className="pagination">
      <ul>
        {pointNumber > 1 &&
        <button onClick={() => {setPointNumber(pointNumber - 1)}}>Попередня</button>}

        {pages
          .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
          .map((p, i) => {
            return <li key={i} className={(p === currentPage) ? "active" : null}
                       onClick={() => {
                         onChangePages(p);
                       }}>{p}</li>;
          })}

        {pageCount > pointNumber &&
        <button onClick={() => {setPointNumber(pointNumber + 1)}}>Наступна</button>}
      </ul>
    </div>
  );
};

export default Pagination;
