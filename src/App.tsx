import { useState } from "react";
import { center, hstack } from "../styled-system/patterns";
import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";

function App() {
  const [page, setpage] = useState("Part 3");

  const routeTo = (newpage: string) => setpage(newpage);
  return (
    <div>
      <div className={center()}>
        <div className={hstack({ gap: 4 })}>
          <button onClick={() => routeTo("Part 1")}>Part 1</button>
          <button onClick={() => routeTo("Part 2")}>Part 2</button>
          <button onClick={() => routeTo("Part 3")}>Part 3</button>
        </div>
      </div>

      {page === "Part 1" ? (
        <Part1 />
      ) : page === "Part 2" ? (
        <Part2 />
      ) : (
        <Part3 />
      )}
    </div>
  );
}

export default App;
