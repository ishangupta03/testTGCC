import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react'
import React from 'react';


const DiabloAccordion = ({ question, answer }) => {
 
  return (
    <>
      
        <Accordion allowMultiple className="drop-shadow-xl">
          <AccordionItem m={5} color='#FFFFFF' backgroundColor="#2B4257" rounded="5">
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left' className="font-medium">
                  {question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} color='#595858' backgroundColor='#FFFFFF'>
              {answer}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
     
    </>
  )
};

export default DiabloAccordion;
