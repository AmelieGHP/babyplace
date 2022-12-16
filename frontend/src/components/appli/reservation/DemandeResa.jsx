import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Toggle from "../filtres/Toggle";

function DemandeResa({ setCompo, photo3, tarif }) {
  const [kilometre, setKilometre] = useState(false);
  const [entretien, setEntretien] = useState(false);
  const [repas, setRepas] = useState(false);

  return (
    <>
      <div className="button-top">
        <div className="suivant">
          <Link to="/appli/search">
            <button className="butt" type="button">
              <span className="fleche">{`<`}</span>
              Annuler
              <span className="round" />
            </button>
          </Link>
        </div>
      </div>
      <main className="demande-resa">
        <div className="container-img">
          <img src={photo3} alt="img creche" />
          {/* <Star
            com={data.Avis_com}
            proprete={data.Avis_proprete}
            securite={data.Avis_securite}
            eveil={data.Avis_eveil}
            horaires={data.Avis_horaires}
          /> */}
        </div>

        <div className="principale">
          <div className="text">
            <h3>Demande de réservation Crèche Picoti Picota</h3>
            <p>Date : lundi 14 septembre </p>
            <p>Horaires : 9h-16h</p>
          </div>

          <div className="tog">
            <Toggle
              setter={setKilometre}
              state={kilometre}
              nom="kilometre"
              p="Indemnité kilométrique (0.50€/km)"
            />
            <Toggle
              setter={setEntretien}
              state={entretien}
              nom="entretien"
              p="Indemnité d'entretien (3.5€)"
            />
            <Toggle
              setter={setRepas}
              state={repas}
              nom="repas"
              p="Indemnité de repas (7€)"
            />
          </div>
        </div>

        <div className="prix-resa">
          <div className="prix">
            {/* faire par rapport au nb d'heure */}
            <p>
              <span> {tarif * 8}€ *</span>
              {/* rajouter les indemnitées */}
            </p>
            <p>
              <span>8h de garde</span>
            </p>
          </div>
          <button type="button" onClick={() => setCompo(3)}>
            Suivant
          </button>
        </div>
      </main>

      <footer>
        * En complétant mon profil, je peux obtenir une tarification
        personnalisée en fonction de mes revenus
      </footer>
    </>
  );
}

DemandeResa.propTypes = {
  setCompo: PropTypes.func.isRequired,
  photo3: PropTypes.string.isRequired,
  tarif: PropTypes.number.isRequired,
};

export default DemandeResa;