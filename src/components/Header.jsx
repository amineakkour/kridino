import { Link } from "react-router-dom";
import { useState } from "react"
import { NavIndContext } from "../context/NavContextProvider";

function DropDown({items, isActive, setisActive}){

  return (
    <div className={`relative`}>
      <button onClick={() => setisActive(v => !v)} className=""><i className="fa-solid fa-chevron-down"></i> Ajouter</button>
      <ul className={`${isActive ? "block" : "hidden"} absolute bg-gray-100 w-full`}>
        {items.map((item, ind) => {  
          return <li key={ind}>
            <Link onClick={() => setisActive(false)} className="font-normal hover:font-medium border-b link block" to={item.path}>{item.name}</Link>
            </li>
        })}
      </ul>
    </div>
  )
}

const navListItems = [
  { name: "Accuiel", path: "/" },
  {
    dropDown: [
      {name: "client", path: "/clients/ajouter"},
      {name: "kridi", path: "/kridis/ajouter"}
    ]
  },
  { name: "Clients", path: "/clients" },
  { name: "Kridis", path: "/kridis" },
];

export default function Header(){
  const [isActive, setisActive] = useState(false); //for dropDown
  const [activeItem, setActiveItem] = NavIndContext(); //it's an index & default is null;


  return(
    <nav >
      <div className="flex justify-between items-center px-5">
        <h1 id="logo" className="font-bold text-lg">kridino</h1>
        <a className="block group cursor-pointer px-5 relative">
          <i class="fa-solid fa-user"></i>
          <span className="block text-[9px] absolute opacity-0 group-hover:opacity-100 top-62 left-0">Déconnexion</span>
        </a>
      </div >

      <ul className="flex text-sm justify-between items-center mt-5">
        {navListItems.map((item, ind) => {
          return (
              <li key={ind} onClick={() => setActiveItem(ind)} className={`w-1/4 ${ind !=0 && "border-l"} border-black link ${activeItem === ind ? "active" : ""}`}>
                {
                  item.dropDown 
                  ? 
                  <DropDown items={item.dropDown} key={ind} isActive={isActive} setisActive={setisActive} />
                  :
                  <Link onClick={() => setisActive(false)} to={`${item.path}`}>{item.name}</Link>
                }
              </li>
          )
        }
        )}
      </ul>
    </nav>
  )
}