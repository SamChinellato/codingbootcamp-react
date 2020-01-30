import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

const home = () => {
    return (
       <div>
          <h1>Welcome to Code Bootcamp</h1>
          <h3>Welcome to coding bootcamp where you can learn how to code from any level of experience</h3>
          <br></br>
          <p>
             <h3> Need help getting started? Answer the following questions, alternatively if you know what you want to learn head to the menu!</h3> <br></br><br></br>
              <h2>What is your level of experience with coding?</h2>
          </p>
          
          <ButtonGroup>
              <div class="btn-group" role="group" aria-label="First group">
              <Button href="./Interests" variant="success" size="lg">Beginner</Button>
              <Button href="./Interests" variant="warning" size="lg">Intermediate</Button>
              <Button href="./Interests" variant="danger" size="lg">Advanced</Button>
              </div>
        
              </ButtonGroup>  
       </div>
       
    );
}
 
export default home;