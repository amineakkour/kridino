import { Link } from "react-router-dom";
import { useState } from "react"
import { NavIndContext } from "../context/NavContextProvider";

function DropDown({items, isActive, setisActive}){

  return (
    <div className={`${isActive ? "border-t border-r border-gray-100 rounded-sm" : ""} relative`}>
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

export default function Header(){
  const [isActive, setisActive] = useState(false); //for dropDown
  const [activeItem, setActiveItem] = NavIndContext(); //it's an index & default is null;

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

  return(
    <nav className="flex justify-between aligns-center">
      <div id="logo" className="font-medium">kridino</div>

      <ul className="flex gap-2 text-sm">
        {navListItems.map((item, ind) => {
          return (
              <li key={ind} onClick={() => setActiveItem(ind)} className={`link ${activeItem === ind ? "active" : ""}`}>
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