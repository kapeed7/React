import React from "react";
import faker from "faker";

class ProfileCard extends React.Component {
  render() {
    return (
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="hmm" src={faker.image.avatar()} />
        </a>
        <a href="/" className="author">
          {this.props.name}{" "}
        </a>
        <div className="meta">
          <span className="date"> {this.props.meta}</span>
        </div>
        <div className="description">{this.props.info} </div>
      </div>
    );
  }
}

export default ProfileCard;
