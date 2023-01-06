import React, { Component } from "react";
import TextField from "./TextField";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          key: Date.now(),
          name: "",
          email: "",
          phone: ""
        }
      ]
    };
  }

  onChange = (inputUser) => {
    this.setState((prevState) => {
      const newUsers = prevState.users.map((element) => {
        if (element.key === inputUser.key) return inputUser;
        return element;
      });
      return { users: newUsers };
    });
  };

  addElement = () => {
    const { name, email, phone } = this.state;
    this.setState((prevState) => ({
      users: prevState.users.concat({
        key: Date.now(),
        name,
        email,
        phone
      })
    }));
  };

  removeElement = (id) => {
    this.setState((prevState) => ({
      users: prevState.users.filter((user) => user.key !== id)
    }));
  };

  render() {
    const { users } = this.state;
    return (
      <div className="row">
        <button type="button" onClick={this.addElement}>
          Add
        </button>

<div className="col-md-12 form-group">
{users.map((user) => (
	
	<div key={user.key}>
		<TextField value={user} onChange={(inputUser) => this.onChange(inputUser)}/>	
		<button type="button" onClick={() => this.removeElement(user.key)} disabled={users.length <= 1}>
			Remove
		</button>
	</div>
))}



        </div>
      </div>
    );
  }
}

export default App;
