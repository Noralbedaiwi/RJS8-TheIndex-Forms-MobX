import React, { Component } from "react";

import BookStore from "../stores/BookStore";

class BookForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      color: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmmit() {
    BookStore.addBook(this.state, this.props.author);
  }

  handleChange(e) {
    this.setState({ [e.target.title]: [e.target.value] });
  }

  render() {
    return (
      <div className="mt-5">
        <form>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Title</span>
            </div>
            <input
              type="text"
              className="form-control"
              value={this.state.first_name}
              name="title"
              onChange={event => this.handleChange(event)}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Color</span>
            </div>
            <input
              type="text"
              className="form-control"
              value={this.state.last_name}
              name="color"
              onChange={event => this.handleChange(event)}
            />
          </div>
          <input onClick={() => this.handleSubmmit()} type="submit" /> <br />
        </form>
      </div>
    );
  }
}

export default BookForm;
