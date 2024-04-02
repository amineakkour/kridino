import { Link } from "react-router-dom";
import { useState } from "react"
import { NavIndContext } from "./NavContextProvider";

function DropDown({items, isDown, setIsDown}){

  return (
    <>
      <button onClick={() => setIsDown(v => !v)}>Ajouter</button>
      <ul className={`${isDown ? "block" : "hidden"} absolute`}>
        {items.map((item, ind) => {  
          return <li key={ind}>
            <Link onClick={() => setIsDown(false)} className="font-normal hover:font-medium border-b link block" to={item.path}>{item.name}</Link>
            </li>
        })}
      </ul>
    </>
  )
}

export default function Header(){
  const [isDown, setIsDown] = useState(false); //for dropDown
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
                  <DropDown items={item.dropDown} key={ind} isDown={isDown} setIsDown={setIsDown} />
                  :
                  <Link onClick={() => setIsDown(false)} to={`${item.path}`}>{item.name}</Link>
                }
              </li>
          )
        }
        )}
      </ul>
    </nav>
  )
}