import { useEffect, useState } from "react"
import styles from "./style.css"
// import "./style.css"

//import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';

export function Cores() {

    const geraCor = () => {
        return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase()
    }


    const [isClient, setIsClient] = useState(false)
    
    const [cores, setCores] = useState([
        {
            cor: geraCor(),
            isblocked: false
        },
        {
            cor: geraCor(),
            isblocked: false
        },
        {
            cor: geraCor(),
            isblocked: false
        },
        {
            cor: geraCor(),
            isblocked: false
        },
        {
            cor: geraCor(),
            isblocked: false
        }
    ])

    function geraPaleta(){
        const novoState=[...cores]
        for (let i = 0; i < novoState.length; i++) {
            if (!novoState[i].isblocked) {
                novoState[i].cor = geraCor() }
        setCores(novoState);}
    }

   
   
    useEffect(() => {setIsClient(true)}, [])

    useEffect(() => {
        
        function handleKeyPress(event) {
          if (event.key === ' ') {
            event.preventDefault()
            geraPaleta();
          }
        }
        document.removeEventListener("keydown", handleKeyPress);
        document.addEventListener("keydown", handleKeyPress);
        
      }, [cores]);


  

    function handleClick(index) {
        setCores(pCores => pCores.map((c, i) => ({ ...c, 
            isblocked: i === index ? !c.isblocked : c.isblocked })))
    }



    return (<>{isClient ? 
        
        <div className="container" >
            
            <div  className="wrapper-color" >
                {cores.map((el, i) =>
                    <div
                        //  className={styles.boxColor}
                        className={"box-color"}
                        
                        style={{ backgroundColor: el.cor }}
                        key={i}>
                       
                        {el.cor}
                        <button className="btn" onClick={() => handleClick(i)}>{el.isblocked ? "desbloquear" : "bloquear"}</button>
                    </div>
                )}</div>

            <button onClick={() => geraPaleta()}
            className="btn-gerarpaleta"> Gerar paleta</button>

        </div>: null}
        </>
    )
}