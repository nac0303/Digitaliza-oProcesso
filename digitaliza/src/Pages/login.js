import './login.css'

function Login() {
    return (
        <div className='main'>
            <div className='banner'>
                
            </div>
            <div className='forms'>
                <form>  
                    <div className="form-outline mb-4">
                        <label class="form-label" for="form2Example1">Email address</label>
                        <input type="email" id="form2Example1" class="form-control" />
                    </div>

                    <div className="form-outline mb-4">
                        <label class="form-label" for="form2Example2">Password</label>
                        <input type="password" id="form2Example2" class="form-control" />
                    </div>
                    <button type="button" class="btn btn-primary" >Login</button>
                </form>
            </div>
        </div>
    )
}



export default Login            

