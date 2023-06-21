import {
  Container,
  Wrap,
  Stack,
  Grid,
  Center,
  Circle,
  Square,
} from "../styled-system/jsx";
import { css } from "../styled-system/css";

function App() {
  return (
    <>
      <Circle size="200px" bg="teal.100" />
      <Square size="200px" bg="teal.100" />
      <Center inline={false}>
        <div className={css({ h: "240px", w: "300px", bg: "red" })} />
      </Center>
      <Grid columns={3} gap={6}>
        <div className={css({ h: "240px", w: "300px", bg: "red" })} />
        <div className={css({ h: "240px", w: "300px", bg: "green" })} />
        <div className={css({ h: "260", w: "300px", bg: "orange" })} />
        <div className={css({ h: "280px", w: "300px", bg: "red" })} />
      </Grid>
      <Stack gap="6">
        <div className={css({ h: "240px", w: "640px", bg: "red" })} />
        <div className={css({ h: "360px", w: "640px", bg: "orange" })} />
        <div className={css({ h: "480px", w: "640px", bg: "plum" })} />
      </Stack>
      <Container>
        <Wrap>
          <div className={css({ h: "240px", w: "300px", bg: "red" })} />
          <div className={css({ h: "240px", w: "300px", bg: "green" })} />
          <div className={css({ h: "240px", w: "300px", bg: "orange" })} />
          <div className={css({ h: "240px", w: "300px", bg: "red" })} />
        </Wrap>
      </Container>
    </>
  );
}

export default App;
