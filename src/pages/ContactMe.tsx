import type { MouseEvent } from "react";

export default function ContactMe() {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-4 py-12 w-full">
        <h2 className="text-3xl md:text-4xl font-bold mt-20 mb-16">Contáctame</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200 dark:border-gray-700 w-full max-w-4xl">
          <div className="flex flex-col sm:flex-row gap-6 justify-center">

            {/* Email */}
             <a
              href="mailto:tuemail@correo.com"
              className="flex items-center gap-4 flex-1 p-5 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-200 group"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 dark:bg-gray-600 group-hover:bg-gray-600 dark:group-hover:bg-gray-500 transition-colors">
                <i className="bx bx-envelope text-white text-xl"></i>
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-0.5">
                  Correo
                </p>
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  tuemail@correo.com
                </p>
              </div>
            </a>

            {/* Teléfono */}
            <a
              href="tel:+51999999999"
              className="flex items-center gap-4 flex-1 p-5 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-200 group"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 dark:bg-gray-600 group-hover:bg-gray-600 dark:group-hover:bg-gray-500 transition-colors">
                <i className="bx bx-phone text-white text-xl"></i>
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-0.5">
                  Teléfono
                </p>
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  +51 999 999 999
                </p>
              </div>
            </a>

          </div>
        </div>
      </div>
    </>
  );
}