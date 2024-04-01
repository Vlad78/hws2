import React from 'react';

import { AffairType } from '../../HW2';
import s2 from '../Affairs.module.css';
import s from './Affair.module.css';


type AffairPropsType = {
  affair: AffairType;
  deleteAffairCallback: (_id: number) => void; // need to fix any
};

function Affair(props: AffairPropsType) {
  const deleteCallback = () => {
    props.deleteAffairCallback(props.affair._id);
  };

  const nameClass = s.name + " " + s2[props.affair.priority];
  const buttonClass = s.closeButton + " " + s2[props.affair.priority];
  const affairClass = s.affair + " " + s2[props.affair.priority];

  return (
    <div id={"hw2-affair-" + props.affair._id} className={affairClass}>
      <div id={"hw2-name-" + props.affair._id} className={nameClass}>
        {props.affair.name}
      </div>
      <div id={"hw2-priority-" + props.affair._id} hidden>
        {props.affair.priority}
      </div>

      <button
        id={"hw2-button-delete-" + props.affair._id}
        className={buttonClass}
        onClick={deleteCallback}
      >
        <svg
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.85125 6L11.9721 1.71C12.1525 1.5217 12.2539 1.2663 12.2539 1C12.2539 0.733701 12.1525 0.478306 11.9721 0.290002C11.7916 0.101699 11.5469 -0.00408936 11.2917 -0.00408936C11.0365 -0.00408936 10.7917 0.101699 10.6113 0.290002L6.5 4.59L2.38875 0.290002C2.20829 0.101699 1.96354 -0.00408936 1.70834 -0.00408936C1.45313 -0.00408935 1.20838 0.101699 1.02792 0.290002C0.847461 0.478306 0.746081 0.733701 0.746081 1C0.746081 1.2663 0.847461 1.5217 1.02792 1.71L5.14875 6L1.02792 10.29C0.938096 10.383 0.866802 10.4936 0.818148 10.6154C0.769495 10.7373 0.744446 10.868 0.744446 11C0.744446 11.132 0.769495 11.2627 0.818148 11.3846C0.866802 11.5064 0.938096 11.617 1.02792 11.71C1.11701 11.8037 1.223 11.8781 1.33978 11.9289C1.45656 11.9797 1.58182 12.0058 1.70834 12.0058C1.83485 12.0058 1.96011 11.9797 2.07689 11.9289C2.19367 11.8781 2.29966 11.8037 2.38875 11.71L6.5 7.41L10.6113 11.71C10.7003 11.8037 10.8063 11.8781 10.9231 11.9289C11.0399 11.9797 11.1652 12.0058 11.2917 12.0058C11.4182 12.0058 11.5434 11.9797 11.6602 11.9289C11.777 11.8781 11.883 11.8037 11.9721 11.71C12.0619 11.617 12.1332 11.5064 12.1819 11.3846C12.2305 11.2627 12.2556 11.132 12.2556 11C12.2556 10.868 12.2305 10.7373 12.1819 10.6154C12.1332 10.4936 12.0619 10.383 11.9721 10.29L7.85125 6Z"
            fill="black"
          />
        </svg>
      </button>
    </div>
  );
}

export default Affair;
