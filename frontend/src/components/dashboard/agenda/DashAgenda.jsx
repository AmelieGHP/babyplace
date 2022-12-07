import React from "react";
import DashCalendar from "./calendar/DashCalendar";

function DashAgenda() {
  const places1 = Math.floor(Math.random() * 5);
  const places2 = Math.floor(Math.random() * 5);
  const places3 = Math.floor(Math.random() * 5);

  return (
    <div className="dashAgenda">
      <section className="agendaSection">
        <h2>Agenda</h2>
        <DashCalendar />
        <div className="agendaCalendarBtn">
          <button type="button">+ Mettre à jour les disponibilités</button>
          <button type="button">+ Ajouter une place</button>
        </div>
      </section>
      <section className="agendaMessage">
        <ul className="agendaLegend">
          <li>
            <span />
            Complet
          </li>
          <li>
            <span />
            Places restantes
          </li>
          <li>
            <span />
            Trop d'enfants
          </li>
          <li>
            <span />
            Jour off
          </li>
        </ul>
        <ul className="agendaMessageList">
          <li>
            <span
              className="agendaMessageIcon"
              style={{
                color: (() => {
                  if (places1 === 0) {
                    return "#2dcd7a";
                  }
                  if (places1 > 0 && places1 <= 2) {
                    return "#FFA84C";
                  }
                  if (places1 > 2) {
                    return "#EF3672";
                  }
                })(),
              }}
            >
              {places1 === 0 ? "!" : "+"}
            </span>
            <p>
              Vous avez <span>{places1} places</span> disponibles le mercredi 7
              de 8h à 20h
            </p>
          </li>
          <li>
            <span
              className="agendaMessageIcon"
              style={{
                color: (() => {
                  if (places2 === 0) {
                    return "#2dcd7a";
                  }
                  if (places2 > 0 && places2 <= 2) {
                    return "#FFA84C";
                  }
                  if (places2 > 2) {
                    return "#EF3672";
                  }
                })(),
              }}
            >
              {places2 === 0 ? "!" : "+"}
            </span>
            <p>
              Vous avez <span>{places2} places</span> disponibles le mardi 6 de
              8h à 10h
            </p>
          </li>
          <li>
            <span
              className="agendaMessageIcon"
              style={{
                color: (() => {
                  if (places3 === 0) {
                    return "#2dcd7a";
                  }
                  if (places3 > 0 && places3 <= 2) {
                    return "#FFA84C";
                  }
                  if (places3 > 2) {
                    return "#EF3672";
                  }
                })(),
              }}
            >
              {places3 === 0 ? "!" : "+"}
            </span>
            <p>
              Vous avez <span>{places3} places</span> disponibles le vendredi 9
              de 9h à 14h
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default DashAgenda;
