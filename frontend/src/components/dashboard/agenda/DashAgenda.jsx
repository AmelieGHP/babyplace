import axios from "axios";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import DashCalendar from "./calendar/DashCalendar";
import { toast } from "react-hot-toast";

function DashAgenda({ structureId, maxPlaces }) {
  const [hours, setHours] = useState([]);
  const [calendar, setCalendar] = useState([]);
  const [calendarIndex, setCalendarIndex] = useState(null);
  const [places, setPlaces] = useState(null);

  const getHours = async () => {
    try {
      const res = await axios
        .get(`${import.meta.env.VITE_PATH}/horaires/${structureId}`, {
          id: structureId
        })
      setHours(res.data)
    }
    catch (err) {
      console.error(err.message)
    }
  };

  const getCalendar = async () => {
    try {
      const res = await axios
        .get(`${import.meta.env.VITE_PATH}/calendrier/${structureId}`, {
          id: structureId
        })
      setCalendar(res.data);
    }
    catch (err) {
      console.error(err.message)
    }
  };

  const updatePlaces = async () => {
    try {
      await axios
        .put(`${import.meta.env.VITE_PATH}/calendrier/places/${calendarIndex}`, {
          id: calendarIndex,
          nbPlaces: places,
        })
      toast.success("Vos places ont bien été modifiées")
      getCalendar()
    } catch (err) {
      console.error(err.message)
    }
  };

  const updateStatusClose = async (calendarIndex) => {
    try {
      await axios
        .put(`${import.meta.env.VITE_PATH}/calendrier/places/close/${calendarIndex}`, {
          id: calendarIndex,
        })
      toast.success("Bon repos")
      getCalendar()
      setPlaces("")
    } catch (err) {
      console.error(err.message)
    }
  };

  const updateStatusOpen = async (calendarIndex) => {
    try {
      await axios
        .put(`${import.meta.env.VITE_PATH}/calendrier/places/open/${calendarIndex}`, {
          id: calendarIndex,
          maxPlaces,
        })
      toast.success("Travaillez bien")
      getCalendar()
      setPlaces("")
    } catch (err) {
      console.error(err.message)
    }
  };

  const addSleepDate = async () => {
    try {
      await axios
        .post(`${import.meta.env.VITE_PATH}/calendrier/add`, {
          date,
          nbPlaces: -1,
          structureId,
        })
      toast.success("Bon repos")
      getCalendar()
    } catch (err) {
      console.error(err.message)
    }
  };

  const addWorkDate = async () => {
    try {
      setPlaces(1)
      await axios
        .post(`${import.meta.env.VITE_PATH}/calendrier/add`, {
          date,
          nbPlaces: 1,
          structureId,
        })
      toast.success("Travaillez bien")
      getCalendar()
    } catch (err) {
      console.error(err.message)
    }
  };

  const fullDate = async (calendarIndex) => {
    try {
      await axios
        .delete(`${import.meta.env.VITE_PATH}/calendrier/${calendarIndex}`, {
          id: calendarIndex
        })
      toast.success("C'est noté")
      getCalendar()
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getHours();
    getCalendar();
  }, []);

  let curDate = new Date();
  curDate = `${curDate.getFullYear()}-${curDate.getMonth() + 1
    }-${curDate.getDate()}`;

  const [clickedDay, setClickedDay] = useState(new Date());
  const date = `${clickedDay.getFullYear()}-${clickedDay.getMonth() + 1
    }-${clickedDay.getDate()}`;

  const day = clickedDay.toLocaleDateString("fr-FR", { weekday: "long" });

  return (
    <div className="dashAgenda">
      <section className="agendaSection">
        <h2>Agenda</h2>
        <DashCalendar
          clickedDay={clickedDay}
          setPlaces={setPlaces}
          setClickedDay={setClickedDay}
        />
      </section>
      <section className="agendaMessage">
        <div className="agendaPlaces">
          <h3>
            {day} {clickedDay.toLocaleDateString()}
          </h3>
          {calendar.every(
            (c) => c.structureId === structureId && c.date !== date
          ) && (
              <>
                <button type="button" className="agendaPlacesWork" onClick={() => addSleepDate()}>
                  Repos
                </button>
                <button type="button" className="agendaPlacesWork" onClick={() => addWorkDate()}>
                  Places restantes
                </button>
              </>
            )}
          {calendar
            .filter((c) => c.structureId === structureId && c.date === date)
            .map((fc) =>
              fc.nbPlaces == -1 ? (
                <>
                  <p>Vous ne travaillez pas 😀</p>
                  <button
                    className="agendaPlacesWork"
                    onClick={() => {
                      updateStatusOpen(fc.calendrierId);
                    }}
                  >
                    Ouvrir
                  </button>
                </>
              ) : (
                <>
                  <div className="agendaPlacesLeft">
                    <p>
                      Il vous reste
                      <b> {fc.nbPlaces} </b>
                      places sur
                      <b> {maxPlaces} </b>
                    </p>
                  </div>
                  <div className="agendaCalendarBtn">
                    <input
                      type="number"
                      value={places}
                      min={1}
                      max={maxPlaces}
                      placeholder={`1 à ${maxPlaces}`}
                      onChange={(e) => {
                        setPlaces(e.target.value);
                        setCalendarIndex(fc.calendrierId);
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => {
                        updatePlaces();
                        setPlaces("");
                      }}
                    >
                      Modifier
                    </button>
                  </div>
                  <p className="agendaPlacesChoice">
                    <span>ou</span>
                  </p>
                  <button
                    className="agendaPlacesWork"
                    onClick={() => {
                      updateStatusClose(fc.calendrierId);
                    }}
                  >
                    Repos
                  </button>
                  <button
                    className="agendaPlacesWork"
                    onClick={() => {
                      fullDate(fc.calendrierId)
                    }}
                  >
                    Complet
                  </button>
                </>
              )
            )}
        </div>
        <ul className="agendaDaysFree">
          {calendar
            .filter(
              (c) =>
                c.structureId === structureId &&
                c.date !== date &&
                Date.parse(c.date) > Date.parse(curDate) &&
                c.nbPlaces != -1
            )
            .slice(0, 2)
            .sort((a, b) => a.date.localeCompare(b.date))
            .map((fc) => {
              return (
                <li>
                  {fc.nbPlaces < 4 ? (
                    <span
                      className="agendaAlertSign"
                      style={{ backgroundColor: "rgba(239, 54, 114, 0.6)" }}
                    >
                      !
                    </span>
                  ) : (
                    <span
                      className="agendaAlertSign"
                      style={{
                        backgroundColor: "rgba(45, 205, 122, 0.6)",
                      }}
                    >
                      +
                    </span>
                  )}
                  <p>
                    Vous avez <span>{fc.nbPlaces}</span> places restantes le{" "}
                    <span>
                      {fc.date.split("-")[2]} / {fc.date.split("-")[1]} /{" "}
                      {fc.date.split("-")[0]}
                    </span>
                  </p>
                </li>
              );
            })}
        </ul>
      </section>
    </div>
  );
}

export default DashAgenda;

DashAgenda.propTypes = {
  token: PropTypes.string.isRequired,
  structureId: PropTypes.number.isRequired,
  maxPlaces: PropTypes.number.isRequired,
};
