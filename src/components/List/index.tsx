import * as Accordion from '@radix-ui/react-accordion';
import Card from '../Card';
import { Container } from "./styles";

export default function List(){
  return (
    <Container>
      <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
        <Accordion.Item className="AccordionItem" value="item-1">
          <Accordion.Trigger> <h1>Title</h1> </Accordion.Trigger>
          <Accordion.Content>
            <Card/>
            <Card/>               
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </Container>
  )
}