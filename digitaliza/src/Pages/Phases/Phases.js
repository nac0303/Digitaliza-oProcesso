import './Phases.css'

function Phases(){
    return(
        <div className='phase-card'>
            <h1>Processo Seletivo</h1>
            <div className='progressbar'>
                <progress id="file" value ="2"max="4"></progress>
                <div className='progress-step'></div>
                <div className='progress-step'></div>
                <div className='progress-step'></div>
                <div className='progress-step'></div>
                <div className='progress-step'></div>
            </div>
            <div className='description'>
                <h2>nathan</h2>
                <h2>nathan</h2>
                <h2>nathan</h2>
                <h2>nathan</h2>
                <h2>nathan</h2>
            </div>
        </div>
    )
}

export default Phases