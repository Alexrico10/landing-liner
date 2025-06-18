import { useState } from "react";
import Link from "next/link";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // evita recargar la página
    alert(
      `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phoneNumber}\nObservaciones: ${description}`
    );
  };

  return (
    <div
      id="contacto"
      className="max-w-4xl mx-auto py-16 px-6 text-center rounded-lg"
    >
      <p className="text-3xl font-bold text-color-gold mb-8">
        CONTÁCTAME SIN COMPROMISO
      </p>
      <p className="mb-8">
        Expresa tu idea sin miedo, lo antes posible me pondré en
        contacto contigo.
      </p>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 max-w-6x1 mx-auto text-left"
      >
        <div>
          <input
            type="text"
            placeholder="Nombre"
            className="w-full px-4 py-2 rounded border-b border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded  border-b border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Teléfono"
            className="w-full px-4 py-2 rounded  border-b border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            required
          />
        </div>
        <div>
          <textarea
            placeholder="Observaciones"
            className="w-full px-4 py-2 rounded  border-b border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            rows="4"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-white text-black px-6 py-3 cursor-pointer rounded font-bold hover:bg-yellow-600 transition w-full"
        >
          CONTACTAR
        </button>
      </form>
      <Link 
        href="/"
        className="mt-8 inline-block text-color-gold hover:text-yellow-500"
      >
        ↑ INICIO ↑
      </Link >
    </div>
  );
};

export default Contact;
