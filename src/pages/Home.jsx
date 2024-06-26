import { Link } from "react-router-dom";
import Cards from "../components/Home/Cards";
import { NavIndContext } from "../context/NavContextProvider";
import useDocumentTitle from "../funcs/usePageTitle";

export default function Home(){
  const [, setNavItem] = NavIndContext();

  useDocumentTitle("Accuiel");

  return(
    <div className="my-6">

      <div className="flex justify-end mt-8">
        <li className="link inline-block"><Link to="/kridis" onClick={() => setNavItem(3)}>Afficher tous</Link></li>
      </div>

      <Cards />

    </div>
  )
}