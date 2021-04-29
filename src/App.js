import React, {useState} from 'react';
import Particles from 'react-particles-js';
import Todo from './Todo'




function App() {
  



  return (


  
    <div>
      <Todo/> 
      <Particles 
              params={{
            		particles: {
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#3CA9D1",
            					blur: 5
            				}
            			}
            		}
            	}}
              style={{
                width: '100%'
                
              }}
            />
      
    </div>
  );
}

export default App;

