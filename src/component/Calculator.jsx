import './Style.css';
import History from './HIstory';
import { useState, useEffect } from 'react';
 

const Calculator = () =>{
    const [value, setValue] = useState("");
    const [history, setHistory] = useState([]);
 
    const handleAddHistory = () => {
        try{
            const result = eval(value);  
            // Add the calculation to history
            const newEntry = `${value} = ${result}`;
            setValue(result);
            setHistory([...history, newEntry]);
            // setValue("𝗜'𝗺 𝗷𝘂𝘀𝘁 𝗮 𝗴𝗶𝗿𝗹 🎀ྀི")
        } catch (error) {
            console.error("Invalid expression", error);
            setValue("Error")
            
            
        }
    }
    const removeItem = (indexToDelete) => {
        setHistory(history.filter((_, index) => index !== indexToDelete));
      };


    // Load history from local storage when the component mounts
    useEffect(() => {
        const savedHistory = localStorage.getItem("history");
        if (savedHistory) {
            setHistory(JSON.parse(savedHistory));
        }
    }, []); 

    
    useEffect(() => {
        if (history.length > 0) {
            localStorage.setItem("history", JSON.stringify(history));
        } else {
            localStorage.removeItem("history");
        }
    }, [history]);

    // Component unmount  
    useEffect(() => {
        return () => {
            console.log('Component unmounted');
        };
    }, []);

    return(
        <>
          <h2> Calculator</h2>
        <div className="container">
        
            <div className="calculator">
                <form action="">
                    <div>
                        <input className="display" type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                    </div>
                    <div >
                        <input type="button" value="AC" onClick={e => setValue("")}/>
                        <input type="button" value="DE"onClick={e => setValue(value.slice(0,-1))}/>
                        <input type="button" value="." onClick={ e => setValue(value + e.target.value)}/>
                        <input type="button" value="/" onClick={ e => setValue(value + e.target.value)}/>
                    </div>
                    <div >
                        <input type="button" value="7" onClick={ e => setValue(value + e.target.value)}/>
                        <input type="button" value="8" onClick={e => setValue(value + e.target.value)}/>
                        <input type="button" value="9" onClick={e => setValue(value + e.target.value)}/>
                        <input type="button" value="*" onClick={e => setValue(value + e.target.value)}/>
                    </div>
                    <div >
                        <input type="button" value="4" onClick={e => setValue(value + e.target.value)}/>
                        <input type="button" value="5" onClick={e => setValue(value + e.target.value)}/>
                        <input type="button" value="6" onClick={e => setValue(value + e.target.value)}/>
                        <input type="button" value="+" onClick={e => setValue(value + e.target.value)}/>
                    </div>
                    <div >
                        <input type="button" value="1" onClick={e => setValue(value + e.target.value)}/>
                        <input type="button" value="2" onClick={e => setValue(value + e.target.value)}/>
                        <input type="button" value="3" onClick={e => setValue(value + e.target.value)}/>
                        <input type="button" value="-" onClick={e => setValue(value + e.target.value)}/>
                    </div>
                    <div >
                        <input type="button" value="0" onClick={e => setValue(value + e.target.value)}/>
                        <input type="button" value="00"onClick={e => setValue(value + e.target.value)}/>
                        {/* <input type="button" className="equal" value="="onClick={e => setValue(eval(value))}/> */}
                        <input type="button" className="equal" value="="onClick={handleAddHistory}/>
                        
                    </div>
                    <div className="history">
                  <h2 style={{ color: 'black' }}>History</h2>
                    <ul style={{ color: 'black' }}>
                        {history.map((item, index) => (
                         <History
                           key={index}
                            title={item}
                            onDelete={() => removeItem(index)}
                            style={{ color: 'black' }}
                    />
                       ))}
                   </ul>
                 </div>
                </form>
 
            </div>
        </div>
        </>
    )
}
export default Calculator