import React from "react";
import { useStyletron } from "styletron-react";
import { Input } from "atomize";
import { Div, Container } from "atomize";

function Home() {
  const [css] = useStyletron();
  return (
  <Container>
    Welcome to Gatsby!
    <br/>
    <form>
      <label>
        Name:
      <Input placeholder="Basic Input" />
      </label>
      <label>
        Age:
        <Input placeholder="Basic Input" />
      </label>
      <label>
        Email:
        <Input placeholder="Basic Input" />
      </label>
      <label>
        Phone number:
        <Input placeholder="Basic Input" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </Container>
  );
}

export default Home;
