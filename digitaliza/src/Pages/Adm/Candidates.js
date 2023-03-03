import './Candidates.css'

function Candidates (){
    let candidatos = []
    for(let i = 0; i<50;i++){
    <tr>
      <td>Name {i}</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    }
    return(
        <div>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>
        </div>
    )
}

export default Candidates