import React, {  useState , useEffect} from "react";
import { PortfHead } from "./comps/Portf-Head";
import './assets/support.css';
import MOCK_DATA from "./MOCK_DATA.json"
import { PortfContacts } from "./comps/Portf-contacts";
import { PortDesc } from "./comps/Portf-Desc";
export const Portfolio = () => {



    const [selected, setselected] = useState(0);
    const [id,setid] = useState(0);
    useEffect(() => {
        const fetchData = () => {
          const selected = MOCK_DATA[id];
          setselected(selected);
        };
    
        fetchData();
      }, [id]);


      const handleidchange = (SetIdTo) => {
        setid(SetIdTo);
      };


      const handleBclick = (SetIdTo) => {
        handleidchange(SetIdTo);
      }
 //load a different json array ^



    return(
        <div className="flex justify-center w-screen flex-col">
          <button onClick={() => handleBclick(0)}></button> 
          {/* unused ^ jsut for testing remove if wanted */}
                {selected && <PortfHead data={selected}/>}
                {selected && <PortfContacts data={selected}/>}
                {selected && <PortDesc data={selected}/>}
        </div>
    )
}