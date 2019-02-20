import React, { Component  } from "react";
import API from "./utils/API";



const MyContext = React.createContext();

class Provider extends Component {
  state = {
    currentUser: null,
    password: null,
    currentId: null,
    userNames: [],
    passwords: [],
    userIds: [],
    auth: null
  };

  

  componentDidMount() {
    this.userInfo();
  }

  

  userInfo = () => {
    var allNames = [];
    var allPasswords = [];
    var userids = [];
    API.getUsers()
    .then((res) => 
    {for (var i = 0; i < res.data.length; i++) 
      {
        allNames.push(res.data[i].userName);
        allPasswords.push(res.data[i].password);
        userids.push(res.data[i]._id);
      }})
      .then(this.setState({ userNames:allNames, passwords: allPasswords, userIds:userids}))
      .then(()=> console.log(this.state)) ///comment out when done!!!!!!!!!!!!!!11
      .catch(err => console.log(err));
      
    };


  logIn = (name, password) => { 
    var where = this.state.userNames.indexOf(name);
    if (where > -1 && this.state.passwords[where] === password) {
      var id = this.state.userIds[where];
      
      this.setState({ currentUser: name, password: password, currentId: id, auth: true });
      
    }
    else {
      console.log("invalid password");
      alert("Invalid Password or Username. Please try again or register")
    }
    
  };

  logOut = () => {
    console.log(this.state);
    this.setState({ currentUser: null, password: null, auth: false });
  }


  
  render() {
    return (
      <MyContext.Provider
        value={{
          currentId: this.state.currentId,
          currentUser: this.state.currentUser,
          password: this.state.password,
          logIn: this.logIn,
          logOut: this.logOut,
          handleQuestion: this.handleQuestion,
          auth: this.state.auth
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}


export { Provider, MyContext };
