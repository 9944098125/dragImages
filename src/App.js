import React, { useState } from "react";
import "./App.css";

const initList = [
  {
    id: 1,
    imageUrl:
      "https://res.cloudinary.com/dakda5ni3/image/upload/v1618676736/94F67A31-D84F-4E5A-AB85-E8F057D0AB8E_ka1vb8.jpg",
  },
  {
    id: 2,
    imageUrl:
      "https://res.cloudinary.com/dakda5ni3/image/upload/v1618675417/E007CAA7-A285-4715-A626-0EDE0A47D977_r3zejf.jpg",
  },
  {
    id: 3,
    imageUrl:
      "https://res.cloudinary.com/dakda5ni3/image/upload/v1618675334/B900A90D-521F-40D3-AF6F-93417308C8C5_z8c71x.jpg",
  },
  {
    id: 4,
    imageUrl:
      "https://res.cloudinary.com/dakda5ni3/image/upload/v1618673334/CEF7DC63-9EB5-4BE0-9E37-51DB247FAC9B_uxw9xq.jpg",
  },
  {
    id: 5,
    imageUrl:
      "https://res.cloudinary.com/dakda5ni3/image/upload/v1618669802/88ED9B12-37AF-413E-95E4-A3A47C0ADB61_oeaczf.jpg",
  },
  {
    id: 6,
    imageUrl:
      "https://res.cloudinary.com/dakda5ni3/image/upload/v1618470247/F884D27E-6C10-4B78-9A78-074DA37DD250_xrhnqv.jpg",
  },
  {
    id: 7,
    imageUrl:
      "https://res.cloudinary.com/dakda5ni3/image/upload/v1618669801/C2E7A938-D154-471C-AF41-04171CACD3AC_nq6tmw.jpg",
  },
  {
    id: 8,
    imageUrl:
      "https://res.cloudinary.com/dakda5ni3/image/upload/v1618672371/2CF031DA-6F84-46DD-814D-3247FDB8B148_wn5pli.jpg",
  },
];

function App() {
  const [list, setList] = useState(initList);

  const [draggedItem, setDraggedItem] = useState(null);

  function onDragStartHandle(e, index) {
    setDraggedItem(list[index]);

    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
  }

  function onDragOverHandle(index) {
    const draggedOverItem = list[index];

    if (draggedOverItem === draggedItem) {
      return;
    }

    const items = list.filter((item) => item !== draggedItem);

    items.splice(index, 0, draggedItem);

    setList(items);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h3>Drag and Drop Images</h3>
        <ul className="ul-style">
          {list.map((item, idx) => {
            return (
              <li
                key={list.id}
                onDragOver={() => onDragOverHandle(idx)}
                className="item-style"
              >
                <div draggable onDragStart={(e) => onDragStartHandle(e, idx)}>
                  <img src={item.imageUrl} alt={item.id} className="image" />
                </div>
              </li>
            );
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
