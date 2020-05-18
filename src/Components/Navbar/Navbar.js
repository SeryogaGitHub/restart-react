import React, {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";
import "./havbar.scss";

const Navbar = () => {
  // Оголошуємо нову змінну стану "count"
  // У цьому прикладі, useState — це хук (визначення хуку наведенно нижче). Ми викликаємо його для того, щоб надати внутрішній стан нашому компоненту. React буде зберігати цей стан між повторними рендерами. Виклик useState повертає дві речі: значення поточного стану та функцію, яка дозволяє оновлювати цей стан. Ви можете викликати цю функцію де завгодно, наприклад, з обробника подій. Вона схожа з this.setState у класах, за винятком того, що не об’єднує новий та старий стан.
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Оновлюємо заголовок документа, використовуючи API браузера
    document.title = `Ви натиснули ${count} разів`;
    // console.log("useEffect");
  });
  return(
    <>
      {/*{console.log("render")}*/}
      <nav className={'main-nav'}>
        <ul className={'links'}>
          <li>
            <NavLink exact activeClassName={'active'} to="/">Головна</NavLink>
          </li>
          <li>
            <NavLink exact activeClassName={'active'} to="/dialogs">Повідомлення</NavLink>
          </li>
          <li>
            <NavLink activeClassName={'active'} to="/users">Користувачі</NavLink>
          </li>
          {/*<li>*/}
          {/*  <button className={'btn'} onClick={() => setCount(count + 1)}>Збільштити на один число {count}</button>*/}
          {/*</li>*/}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
