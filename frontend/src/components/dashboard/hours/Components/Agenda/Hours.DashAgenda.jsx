import React from "react";
import open from "@assets/dashboard/open-sign.svg";
import close from "@assets/dashboard/closed-sign.svg";

function HoursDashAgenda({
  horaires,
  dayId,
  updateHours,
  updateDay,
}) {

  return (
    <>
      <div className="dashRangeInput">
        <input
          type="time"
          value={horaires[dayId].heureMin}
          step="300"
          onChange={(e) =>
            updateHours(e.target.value, "heureMin")
          }
        />
        <span> - </span>
        <input
          type="time"
          value={horaires[dayId].heureMax}
          step="300"
          onChange={(e) =>
            updateHours(e.target.value, "heureMax")
          }
        />
      </div>
      <div className="dashRangeValues">
        <p>
          <img src={open} alt="" /> Ouverture : {horaires[dayId].heureMin}H
        </p>
        <p>
          <img src={close} alt="" /> Fermeture : {horaires[dayId].heureMax}H
        </p>
      </div>
      <button
        type="button"
        className="dashPlacesSubmit"
        onClick={() => {
          updateDay(0);
        }}
      >
        Repos
      </button>
    </>
  );
}

export default HoursDashAgenda;
