import './Phases.css'

function Phases(){
    const max = 5
    const value = 2
    let rows = [[],[]]
    for(let i = 0; i<max;i++){
        if(i<=value){
            rows[0].push(<div className='progress-step-active'></div>)
        }
        else{
            rows[0].push(<div className='progress-step'></div>)
        }
        rows[1].push(<h2>Item {i}</h2>)
    }

    return(
        <div className='phase-card'>
            <div className='progressbar'>
                <progress id="file" value ={value} max={max-1}></progress>
                {rows[0]}
            </div>
            <div className='description'>
                {rows[1]}
            </div>
        </div>
    )
}

export default Phases