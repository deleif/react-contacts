import React from "react";
import { Link } from "react-router-dom";

const ContactDetail = ({ selectedContact }) => {
  const { id, name, tel, email } = selectedContact;

  return (
    <div>
      <div className="">
        <div className="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-3">
          <div className="mt-2 mb-8 w-full">
            <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
              Detalles del contacto
            </h4>
            <p className="mt-2 px-2 text-base text-gray-600"></p>
          </div>
          <div className="grid grid-cols-2 gap-4 px-2 w-full">
            <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
              <p className="text-sm text-gray-600">Identificador</p>
              <p className="text-base font-medium text-navy-700 dark:text-white">
                ID: {id}
              </p>
            </div>

            <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
              <p className="text-sm text-gray-600">Nombre</p>
              <p className="text-base font-medium text-navy-700 dark:text-white">
                <p>Nombre: {name}</p>
              </p>
            </div>

            <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
              <p className="text-sm text-gray-600">Teléfono</p>
              <p className="text-base font-medium text-navy-700 dark:text-white">
                <p>Teléfono: {tel}</p>
              </p>
            </div>

            <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
              <p className="text-sm text-gray-600">Email</p>
              <p className="text-base font-medium text-navy-700 dark:text-white">
                <p>Email: {email}</p>
              </p>
            </div>
          </div>
        </div>
        <p className="font-normal text-navy-700 mt-2 mx-auto w-max">
          <Link to="/contactos">Volver a la página anterior </Link>
        </p>
      </div>
    </div>
  );
};

export default ContactDetail;
