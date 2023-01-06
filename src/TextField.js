import { Component } from "react";

class TextField extends Component {



  handleChange = (ev) => {
    const { name, value } = ev.target;
    this.props.onChange({
      ...this.props.value,
      [name]: value
    });
  };


  render() {
    const { value: user } = this.props;
    return (
      <>
        <input
          className="form-control"
          name="name"
          value={user.name}
          onChange={this.handleChange}
          placeholder="name"
          type="text"
        />
        <input
          className="form-control"
          name="email"
          value={user.email}
          onChange={this.handleChange}
          placeholder="email"
          type="text"
        />
        <input
          className="form-control"
          name="phone"
          value={user.phone}
          onChange={this.handleChange}
          placeholder="phone"
          type="text"
        />
      </>
    );
  }
}



export default TextField;
