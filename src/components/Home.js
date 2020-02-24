import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

const home = () => {
    return (
       <div>
          <h1>Welcome to Code Bootcamp</h1>
          <h3>Welcome to Code Bootcamp where you can learn how to code from any level of experience.</h3>
          <br></br>
          <p>
             <h3> Need help getting started? Answer the following questions, alternatively, if you know what you want to learn, head to the menu!</h3> <br></br><br></br>
              <h2>To start, press the button below:</h2>
          </p> <br></br><br></br>
          
              <div class= "container bouncing">
              <Button href="./Interests" variant="success" size="lg">
              Begin <span class="glyphicon glyphicon-ok-sign" aria-hidden="true"></span>
              </Button>
              </div>
        
           
       </div>
       
    );
}
 
export default home;