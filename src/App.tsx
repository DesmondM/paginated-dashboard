import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [surveyData, setSurveyData] = useState([]);

  useEffect(() => {
    feedBack();
  }, []);

  const feedBack = async () => {
    const response = await fetch("http://localhost:3500/surveys");
    const outData = await response.json();
    console.log(outData);
    setSurveyData(outData);
  };

  return (
    <>
      <div className="App">
        <div>
          <div
            style={{
              display: "flex",
              width: "15%",
              float: "left",
              padding: "40px",
              height: "600px",
            }}
          >
            SmartWage
          </div>
          <div style={{ display: "flex", width: "80%" }}>
            <div>
              {" "}
              <h1>Surveys</h1>
            </div>
            <div style={{ display: "flex", width: "80%" }}>
              <table>
                <tr>
                  <th style={{ width: "120px" }}>Survey Name</th>
                  <th style={{ width: "120px" }}>Created By</th>
                  <th style={{ width: "120px" }}>Responses</th>
                  <th style={{ width: "120px" }}>Launch Date</th>
                  <th style={{ width: "120px" }}>Close Date</th>
                  <th style={{ width: "120px" }}>Status</th>
                </tr>
                {surveyData &&
                  surveyData.map((survey) => {
                    return (
                      <tr key={survey.id}>
                        <td>{survey.name}</td>
                        <td>{survey.created_by}</td>
                        <td>{survey.response}</td>

                        <td>{survey.launch_date}</td>
                        <td>{survey.close_date}</td>
                        <td>
                          {survey.status === "Live" ? (
                            <p style={{ color: "green" }}>{survey.status}</p>
                          ) : (
                            <p style={{ color: "red" }}>{survey.status}</p>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                {/* <div>{surveyData}</div> */}
              </table>
            </div>
          </div>
        </div>
        <h1>Surveys</h1>
      </div>
    </>
  );
}

export default App;
