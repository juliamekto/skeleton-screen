import React, { Component } from "react";
import classNames from "classnames/bind";
import CircularProgress from '@material-ui/core/CircularProgress';
import UserAvatar from "../../components/UserAvatar";
import StatiscticView from "../../components/StatiscticView";
import "./styles.scss";

class Card extends Component {
  render() {
    const { loading, loadingType } = this.props;
    const cardCard = classNames("card", {
      loading: loading && loadingType === "skeleton"
    });

    if (loading && loadingType === "text") {
      return <p>Loading...</p>;
    }

    if (loading && loadingType === "spinner") {
      return <CircularProgress disableShrink />;
    }

    if (loading === false || loadingType === "skeleton") {
      return (
        <div className={cardCard}>
          <div className="card-content">
            <div className="card_user-info">
              <UserAvatar url="../../assets/img/user.png" />
              <p className="card__username">userName</p>
            </div>
            <div className="card__main-info">
              <h3>New York</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="card__statistics">
            <StatiscticView />
            <p className="card__statistics-info">15613</p>
          </div>
        </div>
      );
    }

    return null
  }
}

export default Card;
