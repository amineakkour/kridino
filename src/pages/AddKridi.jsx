import { useEffect, useState } from "react"
import getCurrentDate from "../funcs/getCurrentDate";
import useDocumentTitle from "../funcs/usePageTitle";

export default function AddKridi() {
  const [date, setDate] = useState(getCurrentDate());

  useDocumentTitle("Ajouter Kridis");

  return (
    <div className="">
      <h2 className="text-lg font-medium my-2 mt-6">Ajouter un Kridi</h2>

      <form action="">
        <div className="grid grid-cols-[1fr_auto_auto] grid-rows-1 gap-2">
          <div>
            <label htmlFor="name" className="block text-sm text-gray-700">Nom du Produit</label>
            <input type="text" id="name" className="input w-full" />
          </div>

          <div className="w-14">
            <label htmlFor="name" className="block text-sm text-gray-700">Quantité</label>
            <input type="number" id="name" className="input w-full" />
          </div>

          <div className="w-20">
            <label htmlFor="name" className="block text-sm text-gray-700">Prix en DHS</label>
            <input type="number" id="name" className="text-sm w-full py-1 px-2 rounded-sm outline-none focus:ring-2 focus:ring-blue-300" />
          </div>          
        </div>

        <div className="grid grid-cols-[1fr_1fr] grid-rows-1 gap-2 my-2">
          <div>
            <label htmlFor="name" className="block text-sm text-gray-700">Date du Kridi</label>
            <input type="date" id="name" className="input w-full" value={date} onChange={e => setDate(e.target.value)} />
          </div>

          <div>
            <label htmlFor="name" className="block text-sm text-gray-700">Client</label>
            <select name="clients" id="clients" className="input w-full">
              <option value="1">Ait 7med</option>
              <option value="2">Ait Mo7emad</option>
              <option value="3">Ait Simo 7med</option>
              <option value="4">Ait 7amdan</option>
            </select>
          </div>
        </div>

        <button className="stone-btn">Ajouter Kridi</button>
      </form>

      <div>
        <h4 className="text-sm font-medium">Veuilliez ajouter Kridis Pour afficher le bilan</h4>
      </div>
    </div>
  )
}
