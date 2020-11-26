import React, { Component } from "react";
import "./SearchBar.css";
export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.getWeatherByCityName(this.state.value);
    this.setState({ value: "" });
  }
  render() {
    return (
      <section className="top-banner">
        <div className="container">
          <h1 className="heading">Simple Weather App</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Search for a city"
              onChange={this.handleChange}
              value={this.state.value}
            />
            <button type="submit">SUBMIT</button>
            <span className="msg">{this.props.message}</span>
          </form>
        </div>
      </section>
    );
  }
}
