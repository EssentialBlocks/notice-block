import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.scss";

class DimensionsControl extends Component {
  state = {
    top: this.props.top,
    right: this.props.right,
    bottom: this.props.bottom,
    left: this.props.left,
    isLinked: false,
  };

  onButtonClick = () => this.setState({ isLinked: !this.state.isLinked });

  onInputChange = (event) => {
    let { top, right, bottom, left, isLinked } = this.state;
    let { name, value } = event.target;

    if (isLinked) {
      top = right = bottom = left = value;
      this.setState({ top, right, bottom, left }, () => {
        const { top, right, bottom, left } = this.state;
        this.props.onChange({ top, right, bottom, left });
      });
    } else {
      this.setState({ [name]: value }, () => {
        const { top, right, bottom, left } = this.state;
        this.props.onChange({ top, right, bottom, left });
      });
    }
  };

  render() {
    const { top, right, bottom, left, isLinked } = this.state;

    return (
      <div className="dimention-container">
        <div className="dimention-label">{this.props.label}</div>

        <div className="input-container">
          <div className="input-wrapper">
            <input
              type="number"
              name="top"
              value={top}
              onChange={this.onInputChange}
            />
            <label className="dimentions-input-label">Top</label>
          </div>
          <div className="input-wrapper">
            <input
              type="number"
              name="right"
              value={right}
              onChange={this.onInputChange}
            />
            <label className="dimentions-input-label">Right</label>
          </div>
          <div className="input-wrapper">
            <input
              type="number"
              name="bottom"
              value={bottom}
              onChange={this.onInputChange}
            />
            <label className="dimentions-input-label">Bottom</label>
          </div>
          <div className="input-wrapper">
            <input
              type="number"
              name="left"
              value={left}
              onChange={this.onInputChange}
            />
            <label className="dimentions-input-label">Left</label>
          </div>
        </div>
        <button
          className={`linked-btn components-button is-button dashicons dashicons-${
            isLinked ? "admin-links is-primary" : "editor-unlink is-default"
          }`}
          onClick={this.onButtonClick}
        />
      </div>
    );
  }
}

DimensionsControl.propTypes = {
  label: PropTypes.string,
  top: PropTypes.number,
  right: PropTypes.number,
  bottom: PropTypes.number,
  left: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default DimensionsControl;
