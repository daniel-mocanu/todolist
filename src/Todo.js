import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import ListItemText from '@material-ui/core/ListItemText';




function Todo() {
    const [name, setName] = useState("");
    const [theList, setList] = useState([]);
    const [editText, seteditText] = useState("");
    const [ternValue, setTernValue] = useState(null); 



   const handleChange = (e) =>{
      if (e.key === "Enter") {
       {addItem()} 
      }
          
    }; 


    const addItem = () =>  {
        
        if (name !== "" ) {

         setList([...theList, {
          id: 1 + Math.random(),
          value: name
         
        }]);

      }
        if(name === ""){
          alert("Please enter a value")
        }

        
        setName(""); 
    
        };

    const deleteItem = (id) => {
      
      const oldList = [...theList];

      const newList = oldList.filter(e => e.id !== id )

      setList(newList);

    } 

    const submitEdits = (id) => {
      const updateList2 = [...theList].map(e => {
        if (e.id === id) {
          e.value = editText;
       
        }
        return e;
      
      
      });
      setList(updateList2);
      setTernValue(null);
      seteditText(""); 
    };

    
    
      return (
      
        <div>
          <h1 align="center">Todo List</h1>
           <Box mt="auto"  p={1}/>
            
            <div align="center">
           
                <TextField
                 required
                 id="standard-read-only-input"
                 label="My Todo List"
                 variant="outlined"
                 type="text"
                 placeholder="Input someting"
                 onChange = {(e) => setName(e.target.value)}
                 value = {name}
                 onKeyDown={handleChange}
                
                />

                
                <div >
                
                <Button onClick = {addItem}   variant="contained" color="primary">
                  Enter Value
                </Button>
               

                <ul align="center">
                
                  {theList.map( e => (
                    <ListItemText align="center" key={e.id}>
                      <div> 
                        {e.id === ternValue ? (
                          <div>
                          <TextField required
                          id="standard-read-only-input"
                          label="Change your value here"
                          
                          variant="outlined"
                          type="text"
                          placeholder="Change the Text"
                          onChange = {(e) => seteditText(e.target.value) }
                           />  
                          
                          

                          </div>      
                         ) : (
                           <div> {e.value}  </div>
                           
                        )}
                        </div>
                          
                          <div>
                         
                            {e.id === ternValue ? (

                              <Button
                            
                              onClick = {() => submitEdits(e.id)} 
                              variant="contained" color="primary" 
                              style={{maxWidth: '70px', maxHeight: '20px', minWidth: '30px', minHeight: '20px'}}>  Update </Button>
                            ) : ( 

                              <div>
                                <Button 
                                onClick = {() => setTernValue(e.id)} 
                                variant="contained"
                                style={{maxWidth: '50px', maxHeight: '20px', minWidth: '30px', minHeight: '20px'}} variant="contained" color="primary"> Edit</Button>

                                <Button
                            
                                onClick = { () => deleteItem(e.id)} 
                                variant="contained" 
                                color="secondary"  
                                style={{ maxHeight: '20px', minHeight: '20px'}} > 
                                  Delete Value</Button> 
                              </div>
                                  
                            )}
                                     
                              
                          </div>
                                         
                       </ListItemText>
                  ))}
                  
                </ul>
                </div>

            
            </div>


         
    
        </div>
      );
    }





export default Todo;