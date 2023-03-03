import './Phases.css'
import React, { useState } from 'react';
import Popup from '../Pop-ups/Popup';

function Phases(){
    const max = 5
    const value = 2
    let rows = [[],[]]
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
      setIsOpen(!isOpen);
    }

    for(let i = 0; i<max;i++){
        if(i<=value){
            rows[0].push(<div className='progress-step-active' onClick={togglePopup}></div>)
        }
        else{
            rows[0].push(<div className='progress-step'></div>)
        }
        rows[1].push(<h2>Fase {i}</h2>)
    }

    return(
        <div className='phase-card'>
            <h1>Processo Seletivo</h1>
            <div className='info'>
                <div className='progressbar'>
                    <progress id="file" value ={value} max={max-1}></progress>
                    {rows[0]}
                </div>
                <div className='description'>
                    {rows[1]}
                </div>
            </div>
            {isOpen && <Popup content={<>
                
            </>} handleClose={togglePopup}/>}
        </div>        
    )
}

export default Phases