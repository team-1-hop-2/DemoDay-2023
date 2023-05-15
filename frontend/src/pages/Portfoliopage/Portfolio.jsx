import React, {  useState , useEffect} from "react";
import { PortfHead } from "./comps/Portf-Head";
import './assets/support.css';
import MOCK_DATA from "./MOCK_DATA.json"
export const Portfolio = () => {



    const [selected, setselected] = useState(null);
    const [id,setid] = useState(0);
    useEffect(() => {
        const fetchData = () => {
          const selected = MOCK_DATA[id];
          setselected(selected);
        };
    
        fetchData();
      }, [id]);


      const handleidchange = () => {
        setid(id+1);
      };


      const handleBclick = () => {
        handleidchange();
      }


    return(
        <div className="flex justify-center w-screen">
            <button onClick={handleBclick}>++</button>
                {selected && <PortfHead data={selected}/>}
        </div>
    )
}