import React, { useState } from "react";
import Proptypes from "prop-types";
import Calendar from "react-calendar";

function Structure11({
  lundiOuvert,
  mardiOuvert,
  mercrediOuvert,
  jeudiOuvert,
  vendrediOuvert,
  samediOuvert,
  dimancheOuvert,
}) {
  const [closedDays, setClosedDays] = useState([]);

  const isOpenDay = (e) => {
    const clickedDayFormated = `${e.getFullYear()}-${
      e.getMonth() + 1
    }-${e.getDate()}`;
    if (closedDays.length > 0) {
      const indexOfDay = closedDays.indexOf(clickedDayFormated);
      if (indexOfDay !== -1) {
        const tempArray = [...closedDays];
        tempArray.splice(indexOfDay, 1);
        setClosedDays(tempArray);
      } else {
        setClosedDays([...closedDays, clickedDayFormated]);
      }
    } else {
      setClosedDays([...closedDays, clickedDayFormated]);
    }
  };

  const tileDisable = ({ date, view }) => {
    if (
      (date.getDay() === 1 && !lundiOuvert) ||
      (date.getDay() === 2 && !mardiOuvert) ||
      (date.getDay() === 3 && !mercrediOuvert) ||
      (date.getDay() === 4 && !jeudiOuvert) ||
      (date.getDay() === 5 && !vendrediOuvert) ||
      (date.getDay() === 6 && !samediOuvert) ||
      (date.getDay() === 0 && !dimancheOuvert)
    ) {
      return "select";
    }
    if (closedDays.length > 0 && view === "month") {
      const formatedDate = `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()}`;
      if (closedDays.includes(formatedDate)) {
        return "select";
      }
      return "";
    }
  };
  return (
    <div className="structure11 page-left">
      <h4>Calendrier de vos indisponibilités</h4>

      <div className="agendaSection">
        <Calendar
          showNeighboringMonth={false}
          minDetail="month"
          maxDetail="month"
          onClickDay={(e) => {
            isOpenDay(e);
          }}
          tileClassName={(e) => tileDisable(e)}
        />
      </div>
    </div>
  );
}
Structure11.propTypes = {
  lundiOuvert: Proptypes.node,
  mardiOuvert: Proptypes.node,
  mercrediOuvert: Proptypes.node,
  jeudiOuvert: Proptypes.node,
  vendrediOuvert: Proptypes.node,
  samediOuvert: Proptypes.node,
  dimancheOuvert: Proptypes.node,
};
export default Structure11;
