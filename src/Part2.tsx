import {
  container,
  wrap,
  vstack,
  grid,
  center,
  circle,
  square,
} from "../styled-system/patterns";
import { css } from "../styled-system/css";

function App() {
  return (
    <>
      <div className={square({ size: "200px", bg: "teal.100" })} />
      <div className={circle({ size: "200px", bg: "teal.100" })} />
      <div className={center({ inline: false })}>
        <div className={css({ h: "240px", w: "300px", bg: "red" })} />
      </div>
      <div className={grid({ columns: 3, gap: 6 })}>
        <div className={css({ h: "240px", w: "300px", bg: "red" })} />
        <div className={css({ h: "240px", w: "300px", bg: "green" })} />
        <div className={css({ h: "260", w: "300px", bg: "orange" })} />
        <div className={css({ h: "280px", w: "300px", bg: "red" })} />
      </div>
      <div className={vstack({ gap: 6 })}>
        <div className={css({ h: "240px", w: "640px", bg: "red" })} />
        <div className={css({ h: "360px", w: "640px", bg: "orange" })} />
        <div className={css({ h: "480px", w: "640px", bg: "plum" })} />
      </div>
      <div className={container()}>
        <div className={wrap({ gap: 12 })}>
          <div className={css({ h: "240px", w: "300px", bg: "red" })} />
          <div className={css({ h: "240px", w: "300px", bg: "green" })} />
          <div className={css({ h: "240px", w: "300px", bg: "orange" })} />
          <div className={css({ h: "240px", w: "300px", bg: "red" })} />
        </div>
      </div>
    </>
  );
}

export default App;
