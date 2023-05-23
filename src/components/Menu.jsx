import { Link } from "react-router-dom";

import React from "react";
import { Typography } from "@material-tailwind/react";

const Menu = () => {
  return (
    <ul className="flex bg-gray-200">
      <li className="inline-block border border-white rounded hover:border-gray-200 text-blue-700 font-semibold hover:bg-gray-200 py-1 px-3">
        <Link to="/">Inicio</Link>
      </li>
      <li className="inline-block border border-white rounded hover:border-gray-200 text-blue-700 font-semibold hover:bg-gray-200 py-1 px-3">
        <Link to="contactos">Contactos</Link>
      </li>
      <li className="inline-block border border-white rounded hover:border-gray-200 text-blue-700 font-semibold hover:bg-gray-200 py-1 px-3">
        <Link to="tareas">Tareas</Link>
      </li>
    </ul>
  );
};

export default Menu;
