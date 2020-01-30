import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Interests = () => {
    return (
       
   
       <div>
          <div>
          <h1>What Are you interested in? </h1>
          <br></br> <br></br>
          </div>
          <ButtonGroup>
          <Button href="./FrontEnd"  size="lg" block>
    Building Websites (Front End)
  </Button>
  <Button href="./BackEnd" size="lg" block>
    Building Websites (Back End)
  </Button>
  <Button href="./DataAnalysis" size="lg" block>
    Programming for Data Analysis/Data Science
  </Button>
  <Button href="./MobileApps" size="lg" block>
    Develop Mobile Application
  </Button>
              </ButtonGroup>

       </div>
      
    );
}
 
export default Interests;