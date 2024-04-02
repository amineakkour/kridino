function Card() {
  return (
    <div className="bg-gray-200 p-2 my-2">
        <div className="font-medium flex justify-between items-center">
          <p className="flex items-center gap-1"><i className="fa-solid fa-user text-xs"></i> Simo Ait Fila7i</p>
          <p>2023/03/20</p>
        </div>

        <ul>
          <li className="flex justify-between">
            <p>- kilo Sokar <span className="item-amount">x3</span></p>
            <p>20DHS</p>
          </li> 

          <li className="flex justify-between">
            <p>- kilo Sokar <span className="item-amount">x3</span></p>
            <p>20DHS</p>
          </li>

          <li className="flex justify-between">
            <p>- kilo Sokar <span className="item-amount">x3</span></p>
            <p>20DHS</p>
          </li>
        </ul>

        <div className="flex justify-between items-center">
          <button className="stone-btn">Afficher Plus</button>

          <p className="border-top border-t border-gray-700 font-medium"> Total: 180DHS</p>
        </div>
      </div>
  )
}

export default function Cards(){
  return (
    <div>
      <Card />
      <Card />
      <Card />
    </div>
  )
}
