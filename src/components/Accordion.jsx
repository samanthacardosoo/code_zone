import React from 'react';
import styled from "styled-components";

// body {
//   font-family: "Roboto Condensed", sans-serif;
//   line-height: 1.4;
//   padding: 30px;
// }

// .wrapper {
//   width: 600px;
//   margin: 0 auto;
// }

const AccordionContainer = styled.div `
  & + * {
    margin-top: 0.5em;
  }


.accordion-item {
  overflow: hidden;
  transition: max-height 0.3s cubic-bezier(1, 0, 1, 0);
  height: auto;
  width: 90%;
}

.accordion-item.collapsed {
  max-height: 0;
  transition: max-height 0.35s cubic-bezier(0, 1, 0, 1);
}

.accordion-title {
  cursor: pointer;
  color: #101933;
  border: solid 1px #ccc;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  height: 5%;
  width: 80%;
  padding: 3%;
  margin-bottom: 2%;

  &::after {
    content: "";
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid currentColor;
  }

  &:hover,
  &.open {
    color: #FF4F01;
  }

  &.open {
    &::after {
      content: "";
      border-top: 0;
      border-bottom: 5px solid;
    }
  }
}

.accordion-content {
  padding: 1em 1.5em;
}
`

const Container = styled.div `
    font-size: 16px;
    color: #666D81;
    text-align: left;
    line-height: 1.4;
    margin-left: 20%;
    margin-top: 5%;

    @media (max-width:1024px) {
    
  }
  
  @media (max-width:768px) {
   .accordion-title {
      font-size: 16px;
   }
  }
  
  @media (max-width:480px) {
      
  }
`

const Accordion = ({ title, children }) => {
    const [isOpen, setOpen] = React.useState(false);
    return (
      <AccordionContainer>
        
        <div
          className={`accordion-title ${isOpen ? "open" : ""}`}
          onClick={() => setOpen(!isOpen)}
          >
          {title}
        </div>
        <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
          <div className="accordion-content">{children}</div>
        </div>
      </AccordionContainer>
    );
  };

  const TextAccordion = () => (
    <Container>
      <Accordion title="How to process the funtion for construction?">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit vehicula est
            eget felis vehicula imperdiet non lacus at quam gravida porta usce
            viverra consectetur turpis id lacinia dolor sit amet.
      </Accordion>
      <Accordion title="Where should I incorporate my business?">
            There are many variations of passages of available but the majority 
            have suffered alteration in that some form by injected randomised words 
            which don’t look even as slightly believable now.
      </Accordion>
      <Accordion title="How there are many variations of passages">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit vehicula est
            eget felis vehicula imperdiet non lacus at quam gravida porta usce
            viverra consectetur turpis id lacinia dolor sit amet.
      </Accordion>
      <Accordion title="What about our safety measures?">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit vehicula est
            eget felis vehicula imperdiet non lacus at quam gravida porta usce
            viverra consectetur turpis id lacinia dolor sit amet.
      </Accordion>
      </Container>
  )

export default TextAccordion