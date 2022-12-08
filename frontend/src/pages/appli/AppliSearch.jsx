import React, { useState } from "react";
import filter from "@assets/app parents/Filter.svg";
import { Link } from "react-router-dom";
import CarteCreche from "@components/appli/recherche/CarteCreche";
import NavbarApp from "@components/appli/navbar/NavbarApp";
import imgCreche from "@assets/img-time.svg";

const creche = [
  {
    image: imgCreche,
    prix: 3.5,
    jours: [
      { jour: "Lun.14", check: true },
      { jour: "Mar.15", check: false },
      { jour: "Mer.16", check: true },
      { jour: "Jeu.17", check: true },
      { jour: "Ven.18", check: true },
      { jour: "Sam.19", check: false },
    ],
    condition: {
      verif: true,
      essai: true,
    },
    like: true,
  },
  {
    image: imgCreche,
    prix: 0.75,
    jours: [
      { jour: "Lun.14", check: true },
      { jour: "Mar.15", check: true },
      { jour: "Mer.16", check: false },
      { jour: "Jeu.17", check: false },
      { jour: "Ven.18", check: false },
      { jour: "Sam.19", check: true },
    ],
    condition: {
      verif: true,
      essai: false,
    },
    like: false,
  },
  {
    image: imgCreche,
    prix: 15,
    jours: [
      { jour: "Lun.14", check: false },
      { jour: "Mar.15", check: false },
      { jour: "Mer.16", check: true },
      { jour: "Jeu.17", check: false },
      { jour: "Ven.18", check: true },
      { jour: "Sam.19", check: true },
    ],
    condition: {
      verif: false,
      essai: false,
    },
    like: true,
  },
];

function AppliSearch() {
  const [tri, setTri] = useState("Date Croissant");

  return (
    <div className="applisearch">
      <div className="content">
        <div className="lieu-date">Ville - date - heure</div>

        <div className="appli-filtres">
          <div className="left-filter">
            <div>
              <Link to="/appli/search/filtres">
                <img src={filter} alt="filter" />
                Filtres
              </Link>
            </div>
            <div className="tri">
              <img src={filter} alt="filter" />
              <span>Tri :</span>
              <select id="tri" onChange={(event) => setTri(event.target.value)}>
                <option value="Date recente">Mise en ligne recente</option>
                <option value="Date ancienne">Mise en ligne ancienne</option>
                <option value="Prix croissant">Prix croissant</option>
                <option value="Prix decroissant">Prix décroissant</option>
              </select>
            </div>
          </div>
        </div>

        <main>
          {creche
            .sort(function compare(a, b) {
              if (tri === "Prix croissant") {
                if (a.prix < b.prix) return -1;
                if (a.prix > b.prix) return 1;
                return 0;
              }
              if (tri === "Prix decroissant") {
                if (a.prix > b.prix) return -1;
                if (a.prix < b.prix) return 1;
                return 0;
              }
              return 0;
            })
            .map((each) => (
              <CarteCreche each={each} />
            ))}
        </main>
      </div>

      <NavbarApp />
    </div>
  );
}

export default AppliSearch;
