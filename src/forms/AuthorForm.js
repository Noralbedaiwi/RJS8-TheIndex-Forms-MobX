import React, { Component } from "react";

import authorStore from "../stores/AuthorStore";

class AuthorForm extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      imageUrl: "",
      books: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmmit() {
    authorStore.addAuthor(this.state);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: [e.target.value] });
  }

  render() {
    return (
      <div className="mt-5">
        <form>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">First Name</span>
            </div>
            <input
              type="text"
              className="form-control"
              value={this.state.first_name}
              name="first_name"
              onChange={event => this.handleChange(event)}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Last Name</span>
            </div>
            <input
              type="text"
              className="form-control"
              value={this.state.last_name}
              name="last_name"
              onChange={event => this.handleChange(event)}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Image URL</span>
            </div>
            <input
              type="text"
              className="form-control"
              value={this.state.imageUrl}
              name="imageUrl"
              onChange={event => this.handleChange(event)}
            />
          </div>
          <input onClick={() => this.handleSubmmit()} type="submit" /> <br />
        </form>
      </div>
    );
  }
}

export default AuthorForm;
