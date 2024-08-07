import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import s2 from "../../s1-main/App.module.css";
import SuperDebouncedInput from "./common/c8-SuperDebouncedInput/SuperDebouncedInput";
import s from "./HW14.module.css";

/*
 * 1 - дописать функцию onChangeTextCallback в SuperDebouncedInput
 * 2 - дописать функцию sendQuery в HW14
 * 3 - дописать функцию onChangeText в HW14
 * 4 - сделать стили в соответствии с дизайном
 * 5 - добавить HW14 в HW5/pages/JuniorPlus
 * */

const getTechs = (find: string) => {
  return axios
    .get<{ techs: string[] }>("https://samurai.it-incubator.io/api/3.0/homework/test2", {
      params: { find },
    })
    .catch((e) => {
      console.log(e.response?.data?.errorText || e.message);
    });
};

const HW14 = () => {
  const [find, setFind] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [techs, setTechs] = useState<string[]>([]);

  const sendQuery = (value: string) => {
    setLoading(true);
    getTechs(value).then((res) => {
      // делает студент
      if (res && res.data) {
        setTechs(res.data.techs);
      }
      setLoading(false);
      // сохранить пришедшие данные

      //
    });
  };

  const onChangeText = (value: string) => {
    setFind(value);
    // делает студент

    // добавить/заменить значение в квери урла
    // setSearchParams(
    setSearchParams({ find: value });

    //
  };

  useEffect(() => {
    const params = Object.fromEntries(searchParams);
    sendQuery(params.find || "");
    setFind(params.find || "");
  }, []);

  const mappedTechs = techs.map((t) => (
    <div key={t} id={"hw14-tech-" + t} className={s.tech}>
      {t}
    </div>
  ));

  return (
    <div id={"hw14"}>
      <div className={s2.container}>
        <div className={s2.hwTitle}>Homework #14</div>
      </div>
      <hr />
      <div className={s2.container}>
        <div className={s2.hw}>
          <div className={s.techBlock}>
            <SuperDebouncedInput
              id={"hw14-super-debounced-input"}
              value={find}
              onChangeText={onChangeText}
              onDebouncedChange={sendQuery}
            />

            <div id={"hw14-loading"} className={s.loading}>
              {isLoading ? "...ищем" : <br />}
            </div>
            <div className={s.techs}>{mappedTechs}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HW14;
