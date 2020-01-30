import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card"
import CardGroup from "react-bootstrap/CardGroup"
import DataCamp_Image from "./Images/datacamp_hor.png"
import Anaconda_Image from "./Images/anaconda_hor.png"
import TDS_Image from "./Images/towards_data_science.png"
const DataAnalysis = () => {
    return (
       
   
    <div>
       <h1> So, you're interested in Data Analysis/Data Science?</h1> <br></br>
          <h2>Here are some great resources</h2><br></br>
        
          <CardGroup >
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={DataCamp_Image} alt="Card image" />
    <Card.Body>
      <Card.Title>DataCamp</Card.Title>
      <Card.Text>
        DataCamp is a great resource for courses on core front end technologies such as HTML, CSS and JavaScript
      </Card.Text>
      <Button href="https://www.datacamp.com/" variant="primary">Go to DataCamp </Button>
    </Card.Body>
  </Card>
  <br></br>

  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={Anaconda_Image} />
    <Card.Body>
      <Card.Title>Anaconda</Card.Title>
      <Card.Text>
        Anaconda is a great open source platform for Data Science package management and deployment.
      </Card.Text>
      <Button href="https://www.anaconda.com/" variant="primary">Go to Anaconda</Button>
    </Card.Body>
  </Card>
  <br></br>
  
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={TDS_Image} />
    <Card.Body>
      <Card.Title>Towards Data Science</Card.Title>
      <Card.Text>
        FreeCodecamp is a great resource that teaches you how to code through projects. There are lots of different languages and resources available
      </Card.Text>
      <Button href="https://towardsdatascience.com/" variant="primary">Go to Towards Data Science</Button>
    </Card.Body>
  </Card>
</CardGroup>
        
          
    </div>
         

      
      
    );
}
 
export default DataAnalysis;