import { Component } from "react";
import "./api_call_style.css";
import axios from "axios";

class ApiCall extends Component {
  state = {
    api: [],
    error: null,
  };

  fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
      );
      this.setState({ api: response.data, error: null });
    } catch (error) {
      if (error.response && error.response.status === 429) {
        // Handle rate limit exceeded error
        console.error("Too Many Requests. Retrying in 30 seconds...");
        setTimeout(() => {
          this.fetchData(); // Retry the request after a delay
        }, 30000); // Retry after 5 seconds
      } else {
        // Handle other errors
        this.setState({ error: "Error fetching data" });
      }
    }
  };

  async componentDidMount() {
    this.fetchData();
  }

  render() {
    const arrayToRender = Array(4).fill(0);
    const { api, error } = this.state;
    return (
      <>
        {error ? (
          <div className="error-message">429 status code (Too Many Requests) from the server, it means that you have exceeded the rate limit for making requests</div>
        ) : (
          <div className="row">
            {arrayToRender.map((e, index) => (
              <div className="api-call text-center m-3 p-3" key={index}>
                <header className="post-header">
                  <h6>{api.title}</h6>
                  <p className="">date : {api.data}</p>
                </header>
                <img className="image" src={api.url} alt="moon" />
                <p>{api.explanation}</p>
                <button
                  className="btn btn-primary"
                  onClick={(event) => {
                    event.preventDefault();
                    window.open(api.hdurl, "_blank");
                  }}
                >
                  HD picture
                </button>
              </div>
            ))}
          </div>
        )}
      </>
    );
  }
}

export default ApiCall;
