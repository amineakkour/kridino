function Card() {
  return (
    <div className="relative bg-gray-200 p-2 my-2 flex ">
      <p className="absolute right-2 text-sm text-gray-500"> 2023/03/20</p>
      <div className="h-full w-1/12 mr-1">
        <div className="w-[23px] h-[23px] bg-gray-300 flex justify-center items-center rounded-full">

        <i className="fa-solid fa-user text-xs text-black"></i>
        </div>
      </div>

      <ul className="w-full">
        <li>
          
          <p className="flex items-center gap-1"> Simo Ait Fila7i</p>
        </li>
        <li className="flex justify-between">
          <p>
            - kilo Sokar <span className="item-amount">x3</span>
          </p>
          <p>20DHS</p>
        </li>

        <li className="flex justify-between">
          <p>
            - kilo Sokar <span className="item-amount">x3</span>
          </p>
          <p>20DHS</p>
        </li>

        <li className="flex justify-between">
          <p>
            - kilo Sokar <span className="item-amount">x3</span>
          </p>
          <p>20DHS</p>
        </li>
        <div className="flex justify-between items-center">
          <button className="stone-btn">Afficher Plus</button>

          <p className="border-top border-t border-gray-700 font-medium">
            
            Total: 180DHS
          </p>
        </div>
      </ul>
    </div>
  );
}

export default function Cards() {
  return (
    <div>
      <Card />
      <Card />
      <Card />
    </div>
  );
}
