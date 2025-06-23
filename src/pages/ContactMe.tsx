import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import axios from "axios";

interface FormData {
  nombre: string
  email: string
  asunto: string
  mensaje: string
}

interface Status {
  loading: boolean
  error: string | null
  success: boolean
}

export default function ContactMe() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  })
  const [status, setStatus] = useState<Status>({
    loading: false,
    error: null,
    success: false,
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setStatus({ loading: true, error: null, success: false })

    try {
      await axios.post("https://tuservidor.com/enviar-form", formData)
      setStatus({ loading: false, error: null, success: true })
      setFormData({ nombre: "", email: "", asunto: "", mensaje: "" })
    } catch (err) {
      let message = "Error desconocido"
      if (axios.isAxiosError(err)) {
        message = err.response?.data?.message || err.message
      } else if (err instanceof Error) {
        message = err.message
      }
      setStatus({ loading: false, error: message, success: false })
    }
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center px-4 py-12 w-full">
        <h2 className="text-3xl md:text-4xl font-bold mt-20 mb-16">Contáctame</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200 dark:border-gray-700 w-full max-w-4xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Grid para los primeros 3 campos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Campo Nombre */}
              <div className="space-y-1">
                <label
                  htmlFor="nombre"
                  className="block text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide"
                >
                  Nombre
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="bx bx-user text-gray-400 dark:text-gray-500 text-lg"></i>
                  </div>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="block w-full pl-10 pr-3 py-2.5 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white dark:focus:bg-gray-600 transition-all duration-200"
                    placeholder="Tu nombre"
                  />
                </div>
              </div>

              {/* Campo Email */}
              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide"
                >
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="bx bx-envelope text-gray-400 dark:text-gray-500 text-lg"></i>
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="block w-full pl-10 pr-3 py-2.5 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white dark:focus:bg-gray-600 transition-all duration-200"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              {/* Campo Asunto */}
              <div className="space-y-1 md:col-span-2 lg:col-span-1">
                <label
                  htmlFor="asunto"
                  className="block text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide"
                >
                  Asunto
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="bx bx-tag text-gray-400 dark:text-gray-500 text-lg"></i>
                  </div>
                  <input
                    id="asunto"
                    name="asunto"
                    type="text"
                    value={formData.asunto}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-2.5 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white dark:focus:bg-gray-600 transition-all duration-200"
                    placeholder="Tema del mensaje"
                  />
                </div>
              </div>
            </div>

            {/* Campo de mensaje */}
            <div className="space-y-1">
              <label
                htmlFor="mensaje"
                className="block text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide"
              >
                Mensaje
              </label>
              <div className="relative">
                <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
                  <i className="bx bx-message-dots text-gray-400 dark:text-gray-500 text-lg"></i>
                </div>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  className="block w-full pl-10 pr-3 py-2.5 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white dark:focus:bg-gray-600 transition-all duration-200 resize-vertical"
                  placeholder="Escribe tu mensaje aquí..."
                />
              </div>
            </div>

            {/* Mensajes de estado */}
            {status.success && (
              <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <i className="bx bx-check-circle text-green-600 dark:text-green-400 text-lg"></i>
                <p className="text-green-700 dark:text-green-400 text-sm font-medium">¡Mensaje enviado con éxito!</p>
              </div>
            )}
            {status.error && (
              <div className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <i className="bx bx-error-circle text-red-600 dark:text-red-400 text-lg"></i>
                <p className="text-red-700 dark:text-red-400 text-sm font-medium">{status.error}</p>
              </div>
            )}

            {/* Botón de envío */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={status.loading}
                className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-blue-400 disabled:to-blue-500 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 disabled:cursor-not-allowed transform hover:scale-[1.01] active:scale-[0.99] shadow-lg hover:shadow-xl"
              >
                {status.loading ? (
                  <>
                    <i className="bx bx-loader-alt animate-spin text-lg"></i>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <i className="bx bx-send text-lg"></i>
                    <span>Enviar mensaje</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
