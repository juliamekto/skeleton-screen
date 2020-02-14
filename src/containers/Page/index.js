import React, { Component } from "react";
import classNames from "classnames/bind";
import Card from "../Card";
import "./styles.scss";
import Button from "@material-ui/core/Button";

class Page extends Component {
  state = {
    loadingType: null,
    loading: null
  };

  fetchData = type => {
    this.setState({ loadingType: type, loading: true });
    setTimeout(() => this.setState({ loading: false }), 6000);
  };

  reload = () => {
    this.setState({ loadingType: null, loading: null });
  };

  render() {
    const { loadingType, loading } = this.state;
    const btnClass = classNames("", {
      reload: loadingType === null,
      fetch: loadingType !== null
    });
    return (
      <div className="page">
        <h3 className="page__title">Fetch data with..</h3>
        <div className="page__controls">
          <Button
            onClick={() => this.fetchData("text")}
            variant="contained"
            color="primary"
            className={btnClass}
          >
            loading text
          </Button>

          <Button
            onClick={() => this.fetchData("spinner")}
            variant="contained"
            color="primary"
            className={btnClass}
          >
            with spinner
          </Button>

          <Button
            onClick={() => this.fetchData("skeleton")}
            variant="contained"
            color="primary"
            className={btnClass}
          >
            skeleton screen
          </Button>
          <Button
            onClick={this.reload}
            variant="contained"
            className={btnClass}
            color="primary"
          >
            Reload
          </Button>
        </div>
        <div className="page__content">
          <Card loadingType={loadingType} loading={loading} />
        </div>
      </div>
    );
  }
}

export default Page;
