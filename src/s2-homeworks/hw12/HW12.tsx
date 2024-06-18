import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import s2 from '../../s1-main/App.module.css';
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect';
import { changeThemeId } from './bll/themeReducer';
import s from './HW12.module.css';


/*
 * 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер
 * 2 - получить themeId из редакса
 * 3 - дописать тип и логику функции change
 * 4 - передать пропсы в SuperSelect
 * */

const themes = [
  { id: 1, value: "light" },
  { id: 2, value: "blue" },
  { id: 3, value: "dark" },
];

const HW12 = () => {
  // взять ид темы из редакса
  //   const themeId = 1;
  const themeId = useSelector((state: { theme: { themeId: number } }) => state.theme.themeId);
  console.log(themeId);

  const dispatch = useDispatch();

  const change = (id: any) => {
    // дописать функцию
    console.log(id);
    dispatch(changeThemeId(id));
  };

  useEffect(() => {
    document.documentElement.dataset.theme = themeId + "";
  }, [themeId]);

  return (
    <div id={"hw12"}>
      <div className={s2.container}>
        <div id={"hw12-text"} className={s2.hwTitle}>
          Homework #12
        </div>
      </div>
      <hr />
      <div className={s2.container}>
        <div className={s2.hw}>
          <div>Выберите тему</div>
          <SuperSelect
            id={"hw12-select-theme"}
            className={s.select}
            // сделать переключение тем
            onChangeOption={change}
            options={themes}
          />
        </div>
      </div>
    </div>
  );
};

export default HW12;
