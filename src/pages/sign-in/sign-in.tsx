import React from 'react'
import './sign-in.scss';
const SignIn = () => {

    return ( 
        <div className="container h-100">
            <div className="row h-100">
                <div className="col-sm-12 col-md-4"></div>
                <div className="col-sm-12 col-md-8 my-auto">
                    <h2 className="text-center">SignIn</h2>    
                    <form className="mt-5">
                        <div className="form-group input-animation">
                            <label>Email address</label>
                            <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" id="inputPassword" placeholder="Enter password" />
                        </div>
                        <button type="button" className="btn btn-block btn-primary">Submit</button>
                    </form>
                </div> 
            </div>
        </div>)
}

export  default SignIn;