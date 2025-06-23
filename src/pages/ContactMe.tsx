"use client"; // Next.js App Router directive if needed
import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import axios from 'axios';


interface FormData {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
}

interface Status {
  loading: boolean;
  error: string | null;
  success: boolean;
}

export default function ContactMe() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  });
  const [status, setStatus] = useState<Status>({
    loading: false,
    error: null,
    success: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });

    try {
      await axios.post('https://tuservidor.com/enviar-form', formData);
      setStatus({ loading: false, error: null, success: true });
      setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
    } catch (err) {
      let message = 'Error desconocido';
      if (axios.isAxiosError(err)) {
        message = err.response?.data?.message || err.message;
      } else if (err instanceof Error) {
        message = err.message;
      }
      setStatus({ loading: false, error: message, success: false });
    }
  };

  return (
    <div
      id="contacto"
      className="flex flex-col items-center justify-center px-4 py-12 w-full"
    >
      <h2 className='text-3xl md:text-4xl font-bold mt-20 mb-16'>
        Contáctame
      </h2>
      <div className=" bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200 dark:border-gray-700 w-[800px]">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Nombre
            </label>
            <div className="relative mt-1">
             
              <input
                id="nombre"
                name="nombre"
                type="text"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="pl-10 block w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Correo electrónico
            </label>
            <div className="relative mt-1">
           
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="pl-10 block w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Asunto
            </label>
            <div className="relative mt-1">
             
              <input
                id="asunto"
                name="asunto"
                type="text"
                value={formData.asunto}
                onChange={handleChange}
                className="pl-10 block w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Mensaje
            </label>
            <div className="relative mt-1">
              
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                value={formData.mensaje}
                onChange={handleChange}
                required
                className="pl-10 pt-2 block w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
              ></textarea>
            </div>
          </div>

          {status.success && <p className="text-green-600 text-sm">¡Mensaje enviado con éxito!</p>}
          {status.error && <p className="text-red-500 text-sm">{status.error}</p>}

          <button
            type="submit"
            disabled={status.loading}
            className="w-full flex justify-center items-center bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            {status.loading && (<i className="fa-solid fa-spinner"></i>)} 
            {status.loading ? 'Enviando...' : 'Enviar mensaje'}
          </button>
        </form>
      </div>
    </div>
  );
}
