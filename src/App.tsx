import { circle, hstack, stack, center } from "../styled-system/patterns";
import { css, cva } from "../styled-system/css";
import { styled } from "../styled-system/jsx";

const button = cva({
  base: { cursor: "pointer" },
  variants: {
    visual: {
      solid: { bg: "red.500" },
      outline: { borderWidth: "1px", borderColor: "blue.300" },
    },
    size: {
      sm: { padding: "4", fontSize: "12px" },
      lg: { padding: "8", fontSize: "24px" },
    },
  },
  compoundVariants: [
    {
      visual: "solid",
      size: "sm",
      css: { borderWidth: "4px", borderColor: "black" },
    },
  ],
  defaultVariants: {
    visual: "solid",
    size: "lg",
  },
});

const Button = styled("button", button);

function App() {
  return (
    <div className={center({ height: "100vh" })}>
      <div className={stack()}>
        <div
          className={css({
            border: "3px solid #000000",
            boxShadow: "4px 4px 0 #000000",
            borderRadius: "20px",
            padding: 6,
            maxWidth: "388px",
          })}
        >
          <div className={stack({ gap: 4 })}>
            <div className={hstack({ gap: 4 })}>
              <div className={circle({ size: 12, overflow: "hidden" })}>
                <img
                  src="https://images.unsplash.com/profile-1577593037132-e4cc78d1173dimage?auto=format&fit=crop&w=800&h=800&q=60&crop=faces&bg=fff"
                  alt="Bard Gnnomes"
                  width="120px"
                  height="120px"
                />
              </div>
              <div>
                <h2 className={css({ fontWeight: 600 })}>Some Girl</h2>
                <p className={css({ color: "#7D7D7D" })}>@some_girl</p>
              </div>
            </div>
            <blockquote className={css({ fontSize: "17px" })}>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
            </blockquote>
          </div>
        </div>
        <div className={stack({ bg: "yellow.100", padding: 4, gap: 10 })}>
          <button className={button({ visual: "solid" })}>Hi There</button>
          <button className={button({ visual: "outline" })}>Hi There</button>
          <Button visual="outline" size="sm">
            More Hi's
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
