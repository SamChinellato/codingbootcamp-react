import React from 'react';
//import './Home.scss'
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card"
import CardGroup from "react-bootstrap/CardGroup"
import CodeCademy_Image from "./Images/cc_hor.jpg"
import CodePen_Image from "./Images/codepen_hor.png"
import FreeCodeCamp_Image from "./Images/freecodecamp_hor.png"
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
const FrontEnd = () => {
    return (
       
   
    <div>
       <h1> So, you're interested in Front End?</h1> <br></br>
          <h2>Here are some great resources</h2><br></br>
        
          <CardGroup>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={CodeCademy_Image} alt="Card image" />
    <Card.Body>
      <Card.Title>CodeCademy</Card.Title>
      <Card.Text>
        Codcademy is a great resource for courses on core front end technologies such as HTML, CSS and JavaScript
      </Card.Text>
      <Button href="https://www.codecademy.com/" variant="primary">Go to Codecademy</Button>
    </Card.Body>
  </Card>
  <br></br>

  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={CodePen_Image} />
    <Card.Body>
      <Card.Title>CodePen</Card.Title>
      <Card.Text>
        CodePen is a great resource for building and testing front end code
      </Card.Text>
      <Button href="https://codepen.io/" variant="primary">Go to CodePen</Button>
    </Card.Body>
  </Card>
  <br></br>
  
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={FreeCodeCamp_Image}>
      </Card.Img> 
    <Card.Body>
      <Card.Title>FreeCodeCamp</Card.Title>
      <Card.Text>
        FreeCodecamp is a great resource that teaches you how to code through projects. There are lots of different languages and resources available
      </Card.Text>
      <Button href="https://www.freecodecamp.org/" variant="primary">Go to FreeCodeCamp</Button>
    </Card.Body>
  </Card>
</CardGroup>
        
          
    </div>
         

      
      
    );
}
 
export default FrontEnd;