import React from "react";
import { Link } from "react-router-dom";
import AppliPlaces from "@components/appli/filtres/AppliPlaces";
import PropTypes from "prop-types";

function ChoixDates({ setCompo, photoProfil }) {
  return (
    <>
      <div className="button-top">
        <div className="suivant">
          <Link to="/appli/search">
            <button className="butt" type="button" onClick={() => setCompo(2)}>
              <span className="fleche">{`<`}</span>
              Annuler
              <span className="round" />
            </button>
          </Link>
        </div>
      </div>

      <main className="choix-dates">
        <div className="profil-plat">
          <div className="container-image">
            <img src={photoProfil} alt="avatar" />
          </div>
          <div className="user-info">
            <p>Demandez une place</p>
            <h3>Creche P</h3>
          </div>
        </div>
        <AppliPlaces />
      </main>

      <div className="button-bas">
        <div className="suivant">
          <button className="butt" type="button" onClick={() => setCompo(2)}>
            Suivant <span className="fleche">{`>`}</span>
            <span className="round" />
          </button>
        </div>
      </div>
    </>
  );
}

ChoixDates.propTypes = {
  setCompo: PropTypes.func.isRequired,
  photoProfil: PropTypes.string.isRequired,
};

export default ChoixDates;