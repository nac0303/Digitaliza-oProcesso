import './App.css';

function App() {
  return (
      <form className='stuff'>
        <div class="form-group">
          <label for="exampleFormControlInput1">Nome</label>
          <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Seu Nome"></input>
          <label for="exampleFormControlInput1">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
          <label for="exampleFormControlInput1">Telefone</label>
          <input type="phone" class="form-control" id="exampleFormControlInput1" placeholder="(99) 12345-6789"></input>
          <label class="control-label" for="date">Date</label>
          <input class="form-control" id="date" name="date" placeholder="MM/DD/YYY" type="text" />
          <label class="control-label" for="date">Curso</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Selecione o curso</option>
            <option value="1">Desenvolvimento de Sistemas</option>
            <option value="2">Análise de sistemas</option>
            <option value="3">Mecatrônica</option>
          </select>
          <label for="avatar">Currículo</label> 
          <input type="file" id="avatar" name="avatar" accept=".pdf" ></input>
            <label for="exampleFormControlInput1">Senha</label>
            <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Seu Nome"></input>
          <button type="button" class="btn btn-primary">Cadastrar</button>
        </div>
      </form> 
  );
}

export default App;
