import React, { Component } from 'react';

class GoogleAuth extends Component {

    state = {
        isSignedIn: null
    }

    componentDidMount(){
        window.gapi.load("client:auth2", ()=>{
            //When we call init it returns a promise
            window.gapi.client.init({
                clientId: "364944284050-9eqevoed5ir5kme30eu4n27ds9q2tg3h.apps.googleusercontent.com",
                scope: "email"
            }).then(()=>{
                this.oauth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.oauth.isSignedIn.get()})
                this.oauth.isSignedIn.listen(this.onAutChange)
            })
        })
    }

    onAutChange = () => {
        this.setState({isSignedIn: this.oauth.isSignedIn.get()})
    }

    onSignIn = () => {
        this.oauth.signIn()
    }

    onSignOut = () => {
        this.oauth.signOut()
    }

    renderAuthButton(){
        if(this.state.isSignedIn === null){
            return <div>I dont know if we are signed in</div>
        }
        else if(this.state.isSignedIn){
            return(
                <button onClick = {this.onSignOut} className = "ui red google button">
                    <i className = "google icon"></i>
                    SignOut
                </button>
            )
        }
        else{
            return(
                <button onClick = {this.onSignIn} className = "ui red google button">
                    <i className = "google icon"></i>
                    Signin With Google
                </button>
            )
        }
    }

    render() { 
        return ( 
            <div>
                {this.renderAuthButton()}
            </div>
         );
    }
}
 
export default GoogleAuth;