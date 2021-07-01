import React from 'react'
import { AuthService } from '../services/AuthService'


interface LoginProps {
    authService: AuthService
}

interface LoginState {
    userName: string,
    password: string,
    loginAttempted: boolean,
    loginSuccessfull:boolean
}

export class Login extends React.Component<LoginProps, LoginState>{

    state: LoginState = {
        userName: '',
        password: '',
        loginAttempted: false,
        loginSuccessfull: false
    }

    render(){
        return(
            <div>
                 <h2>User Login</h2>
                 <form>
                     <input value={this.state.userName} />
                     <input value={this.state.password} type="password" />
                     <input type="submit" value="Login"/>
                 </form>
            </div>
        )
    }
}