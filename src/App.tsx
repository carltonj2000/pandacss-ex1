import { useState } from "react";
import { center, hstack } from "../styled-system/patterns";
import Part1 from "./Part1";
import Part2 from "./Part2";

function App() {
  const [page, setpage] = useState("Part 2");

  const routeTo = (newpage: string) => setpage(newpage);
  return (
    <div>
      <div className={center()}>
        <div className={hstack({ gap: 4 })}>
          <button onClick={() => routeTo("Part 1")}>Part 1</button>
          <button onClick={() => routeTo("Part 2")}>Part 2</button>
        </div>
      </div>

      {page === "Part 1" ? <Part1 /> : <Part2 />}
    </div>
  );
}

export default App;
