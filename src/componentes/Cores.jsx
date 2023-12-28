import { useEffect, useState } from "react"
import "./style.css"

//import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';

export function Cores() {

    const geraCor = () => {
        return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase()
    }


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

    // useEffect(()=>{   
    //     function handleKeyPress(event) {
    //         if (event.key !== ' ') return

    //         console.log("hello")

    //     }
    //     document.addEventListener(onkeydown, handleKeyPress)
    // },[])
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



    return (<>
        
        <div >
            <h1>Colorista</h1>
            <div className="wrapper-color" >
                {cores.map((el, i) =>
                    <div
                        className={"box-color"+i}
                        style={{ backgroundColor: el.cor }}
                        key={i}>
                        {/* <span {onClick={() => {
                        toast.success(`Cor ${el.hex} copiada para o clipboard`);
                        navigator.clipboard.writeText(el.hex)}}}>{el.cor}</span> */}
                        {el.cor}
                        <button onClick={() => handleClick(i)}>{el.isblocked ? "desbloquear" : "bloquear"}</button>
                    </div>
                )}</div>

            <button onClick={() => geraPaleta()}
            className="btn-gerarpaleta"> Gerar paleta</button>


{/*<ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                        />*/}

        </div>
    </>
    )
}