import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card"
import CardGroup from "react-bootstrap/CardGroup"
import Swift_Image from "./Images/swift_hor.svg"
import Kotlin_Image from "./Images/kotlin_hor.jpg"
const DataAnalysis = () => {
    return (
       
   
    <div>
       <h1> So, you're interested in Mobile Development</h1> <br></br>
          <h2>Here are some great resources</h2><br></br>
        
          <CardGroup>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={Swift_Image} alt="Card image" />
    <Card.Body>
      <Card.Title>Swift</Card.Title>
      <Card.Text>
        Swift is Apple's programming language for Apps. They offer great tutorials:
      </Card.Text>
      <Button href="https://developer.apple.com/library/archive/referencelibrary/GettingStarted/DevelopiOSAppsSwift/" variant="primary">Go to Swift Intro </Button>
    </Card.Body>
  </Card>
  <br></br>

  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={Kotlin_Image} />
    <Card.Body>
      <Card.Title>Kotlin</Card.Title>
      <Card.Text>
        Kotlin is the main programming language for Android Devices. Here's a great tutorial:
      </Card.Text>
      <Button href="https://kotlinlang.org/docs/tutorials/kotlin-for-py/introduction.html" variant="primary">Go to Kotlin Intro</Button>
    </Card.Body>
  </Card>
  <br></br>
</CardGroup>
        
          
    </div>
         

      
      
    );
}
 
export default DataAnalysis;