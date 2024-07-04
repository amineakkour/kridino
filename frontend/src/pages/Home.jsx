import { Link } from "react-router-dom";
import Card from "../components/Home/Card";
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

      <div>
        <Card />
        <Card />
      </div>

    </div>
  )
}