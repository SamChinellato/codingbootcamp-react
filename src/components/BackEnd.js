import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card"
import CardGroup from "react-bootstrap/CardGroup"
import Python_Image from "./Images/python_hor.png"
import Baeldung_Image from "./Images/baeldung_hor.jpg"
import W3_Image from "./Images/w3_schools.jpg"

const FrontEnd = () => {
    return (
       
   
    <div>
       <h1> So, You're Interested in Back End?</h1> <br></br>
          <h2>Here are some great resources</h2><br></br>
        
          <CardGroup>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={Python_Image} alt="Card image" />
    <Card.Body>
      <Card.Title>PythonForBeginners</Card.Title>
      <Card.Text>
        PythonForBeginners offers a great introduction to python
      </Card.Text>
      <Button href="https://www.pythonforbeginners.com/basics/" variant="primary">Go to Codecademy</Button>
    </Card.Body>
  </Card>
  <br></br>

  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={Baeldung_Image} />
    <Card.Body>
      <Card.Title>Baeldung</Card.Title>
      <Card.Text>
        Baeldung is a great resource for all things Java
      </Card.Text>
      <Button href="https://codepen.io/" variant="primary">Go to CodePen</Button>
    </Card.Body>
  </Card>
  <br></br>
  
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={W3_Image} />
    <Card.Body>
      <Card.Title>W3Schools</Card.Title>
      <Card.Text>
      W3Schools is a great resource for learning web technologies online, such as JavaScript, JSON, PHP, Python, AngularJS, React.js, SQL and much more.
      </Card.Text>
      <Button href="https://www.freecodecamp.org/" variant="primary">Go to W3Schools</Button>
    </Card.Body>
  </Card>
</CardGroup>
        
          
    </div>
         

      
      
    );
}
 
export default FrontEnd;