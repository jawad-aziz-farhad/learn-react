import React, { useState } from 'react';
import firebase from '../../config/firestore';
import { IUser } from '../../interfaces/';
import { Router } from 'react-router-dom';
import history from '../../services/history';

const SignUp= () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profile , setProfile] = useState<IUser | undefined>(undefined)

    const updateState = (e : any) => {
        if(e.target.name === 'email'){
            setEmail(e.target.value);
            setProfile({...profile, email : e.target.value});
        }
        else if(e.target.name === 'password')
            setPassword(e.target.value);
        else
            setProfile({
                ...profile,
                [e.target.name] : e.target.value
            })
    }

    const createAccount = () => {
        firebase.auth().createUserWithEmailAndPassword(email , password)
                       .then(response => {
                           console.log('Response', response);
                           addUserInfo(response);
                       })
                       .catch(error => {
                           console.error('Error', error);
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            if(errorCode == 'auth/weak-password')
                                alert('Password is too weak.');
                            else    
                                alert(errorMessage);    
                       });
    }

    /* Adding User's addition info to users collection */
    const addUserInfo = (createdUser : any) => {
        firebase.auth().onAuthStateChanged(user => {
            const userRef = firebase.firestore().collection('users');
            const _profile = {...profile};
            const userProfile = userRef.doc(`${createdUser.user.uid}`).set(_profile);
            userProfile.then(result => {
                console.log('User Profile', result);
                history.push('/dashboard', _profile);
            }).catch(error => {
                console.error('User Profile Error', error);
            })
        });
    }

    return (
        <div className="container h-100">
            <div className="row h-100">
                <div className="col-sm-12 col-md-4"></div>
                <div className="col-sm-12 col-md-8 my-auto">
                    <h2 className="text-center">SignUp</h2>    
                    <form className="mt-5">

                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" name="firstname" className="form-control" id="firstName" placeholder="Enter first name" onChange={updateState}/>
                        </div>

                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" name="lastname" className="form-control" id="lastName" placeholder="Enter last name" onChange={updateState}/>
                        </div>

                        <div className="form-group input-animation">
                            <label>Email address</label>
                            <input type="email" name="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" onChange={updateState}/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" className="form-control" id="inputPassword" placeholder="Enter password" onChange={updateState}/>
                        </div>

                        <div className="form-group">
                            <label>Date of birth</label>
                            <input type="text" name="date_of_birth" className="form-control" id="date_of_birth" placeholder="Enter date of birth" onChange={updateState}/>
                        </div>

                        <button type="button" className="btn btn-block btn-primary" onClick={createAccount}>SignUp</button>
                    </form>
                </div> 
            </div>
        </div>
    )
}

export  default SignUp;