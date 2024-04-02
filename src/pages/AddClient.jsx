import { useEffect, useRef } from "react";
import { useState } from "react"
import { Link } from "react-router-dom";
import { NavIndContext } from "../components/NavContextProvider";

export default function AddClient() {
  const [fullName, setFullName] = useState("");
  const [cin, setCin] = useState("");
  const [phone, setPhone] = useState("");
  const fullNameEl = useRef(0)
  const [, setNavInd] = NavIndContext();

  useEffect(() => {
    fullNameEl.current.focus();
  }, [])
  
  function submitForm(e){

    e.preventDefault()

    console.log(e)
  }

  return (
    <div>
      <h2 className="text-lg font-medium my-2 mt-6">Ajouter un client</h2>

      <form onSubmit={e => submitForm(e)} className="bg-gray-200 px-1 py-2">
        <small className="text-xs text-gray-400">Les champs contenant * sont obligatoires</small>
        <div className="my-2 flex justify-between">
          <label htmlFor="name">Nom Complet* </label>
          <input 
            className="input w-48" 
            type="text" 
            id="name"
            placeholder="Ex: Amine Akkour"
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            ref={fullNameEl}
          />
        </div>

        <div className="my-2 flex justify-between">
          <label htmlFor="cin">CIN* </label>

          <input 
            className="input w-48" 
            type="text"
            id="cin"
            placeholder="Ex: BK123456"
            value={cin}
            onChange={e => setCin(e.target.value)}
          />
        </div>

        <div className="my-2 flex justify-between">
          <label htmlFor="phone">Num de telephone </label>

          <input 
          className="input w-48" 
          type="text" 
          id="phone" 
          placeholder="Ex: +212 674997460" 
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        </div>

        <button className="primary-btn" type="submit">Ajouter</button>

      </form>

      <div className="my-4">
        <div className="flex justify-between items-center">
          <h2 className="font-medium">Clients récemment ajoutés</h2>
          <Link className="link w-28 text-center block" to={"/clients"} onClick={() => setNavInd(2)}>Tous les clients</Link>
        </div>

        <ul className="text-sm">
          <li className="flex gap-2">
            - <span>2024/04/12 44:11:20</span>
            |
            <span>Mohemd Amine Akkour</span>
          </li>

          <li className="flex gap-2">
            - <span>2024/04/12 44:11:20</span>
            |
            <span>Mohemd Amine Akkour</span>
          </li>

          <li className="flex gap-2">
            - <span>2024/04/12 44:11:20</span>
            |
            <span>Mohemd Amine Akkour</span>
          </li>

          <li className="flex gap-2">
            - <span>2024/04/12 44:11:20</span>
            |
            <span>Mohemd Amine Akkour</span>
          </li>

          <li className="flex gap-2">
            - <span>2024/04/12 44:11:20</span>
            |
            <span>Mohemd Amine Akkour</span>
          </li>

        </ul>
      </div>
    </div>
  )
}