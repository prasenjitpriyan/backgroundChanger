import { useState } from "react";

function App() {
  const [color, setColor] = useState("#98b564");

  return (
    <div
      className="w-full h-screen duration-150"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button
            onClick={() => setColor("#990f02")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#990f02" }}
          >
            Cherry
          </button>
          <button
            onClick={() => setColor("#3cb043")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#3cb043" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("#fdff00")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "#fdff00" }}
          >
            Lemon
          </button>
          <button
            onClick={() => setColor("#3944bc")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#3944bc" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("#fc4c02")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#fc4c02" }}
          >
            Tangelo
          </button>
          <button
            onClick={() => setColor("#3ded97")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "#3ded97" }}
          >
            Sea foam
          </button>
          <button
            onClick={() => setColor("#710193")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#710193" }}
          >
            Violet
          </button>
          <button
            onClick={() => setColor("#016064")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#016064" }}
          >
            Ocean
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
