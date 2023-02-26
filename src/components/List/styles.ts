import styled from "styled-components";

export const Container = styled.div`

  border: 1px black;
  width: 100%;
  margin: 10px;

  button,
  h3 {
    all: unset;
  }

  .AccordionRoot {
  border-radius: 6px;
  width: 100%;
  background-color: yellow;
  box-shadow: 0 2px 5px #000;
  padding: 5px;

  }

  .AccordionItem {
  overflow: hidden;
  margin-top: 1px;
  }

`