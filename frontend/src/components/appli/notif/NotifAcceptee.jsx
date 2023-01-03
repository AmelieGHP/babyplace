import React from "react";
import logoBlanc from "@assets/logo-blanc.svg";
import avatar1 from "@assets/avatar1.svg";

function NotifAcceptee({ setCompo }) {
  return (
    <div className="notif-container-grad">
      <div className="notif-accepte">
        <img src={logoBlanc} alt="logo-blanc" className="logo" />
        <div className="avatars">
          <img src={avatar1} alt="img profil" className="avatar" />
          <img src={avatar1} alt="img creche" className="avatar" />
        </div>

        <div className="text">
          <h3>Fantastique !</h3>

          <p>
            La crèche Picoti Picota confirme accueillir votre enfant le Lundi 14
            septembre de 9h à 17h
          </p>
        </div>
        <div className="button-bas">
          <button type="button" className="butt" onClick={() => setCompo(4)}>
            Payer et Confirmer
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotifAcceptee;
