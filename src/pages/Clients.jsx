import { Link } from "react-router-dom";
import useDocumentTitle from "../funcs/usePageTitle";
import { useState } from "react";
import { NavIndContext } from "../context/NavContextProvider";

function Client(){
  const [showMore, setShowMore] = useState(false);

  return (
  <div className="bg-gray-100 my-2 p-2 rounded-sm">
    <div className="flex justify-between items-center">
      <h2 className="font-medium">Hamid Mol Me7laba</h2>
      <button onClick={() => setShowMore(v => !v)} className="text-xs">Show {showMore ? "Less" : "More"}</button>
    </div>
    {showMore && (
      <>
        <h3>Total de Kridis: 99Dhs </h3>
        <h3>Counter Kridis: 3</h3>
      </>
      )
    }
  </div>
  )
}

export default function Clients() {
  useDocumentTitle("Clients");
  const [, setNavItem] = NavIndContext();

  return (
    <div className="text-sm my-6">
      <div className="flex justify-end">
        <Link onClick={() => setNavItem(1)} to="/clients/ajouter" className="link w-24 block">Ajouter clients</Link>
      </div>

      <form className="flex gap-3 my-4">
        <input 
          type="text"
          className="outline-none focus:ring-2 focus:ring-blue-300 text-sm bg-[#F3F3F3] px-2 py-1 rounded-md w-full"
        placeholder="Rechercher des clients" />
        <button className="stone-btn h-full">Rechercher</button>
      </form>

      <div>
        <div className="text-xs text-gray-600">Total: 9 clients</div>

        <div>
          <Client />
          <Client />
          <Client />
          <Client />
        </div>
      </div>
    </div>
  )
}
