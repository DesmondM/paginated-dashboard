import { useEffect, useState } from "react";

const Surveys = () => {
  const [surveyData, setSurveyData] = useState([]);
  const [startAt, setStartAt] = useState(0);
  const [endAt, setEndAt] = useState(10);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    feedBack();
  }, []);

  const feedBack = async () => {
    const response = await fetch("http://localhost:3500/surveys");
    const outData = await response.json();
    console.log(outData);
    setSurveyData(outData);
  };

  const forwardCount = () => {
    if (surveyData.length > endAt) {
      setStartAt(startAt + 10);
      setEndAt(endAt + 10);
      setPageCount(pageCount + 1);
    }
  };
  const backCount = () => {
    if (startAt >= 10) {
      setStartAt(startAt - 10);
      setEndAt(endAt - 10);
      setPageCount(pageCount - 1);
    }
  };

  return (
    <div className="App">
      <section id="menu">
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-menu-2"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
          <h4>Smartwage</h4>
        </div>

        <div className="at-foot">
          <div
            className="foot-col"
            style={{ marginLeft: "25px", padding: "3px" }}
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-letter-m"
              width="40"
              height="40"
              viewBox="0 -4 14 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 20v-16l6 14l6 -14v16" />
            </svg>
          </div>
          <div className="foot-col">
            <p>Mike Mekenekep</p>
          </div>
        </div>
      </section>

      <section id="interface">
        <div className="navigation">
          <div className="n1">
            <div className="heading">Surveys</div>
          </div>
        </div>
        <div className="board">
          <table style={{ width: "100%", borderSpacing: "0px" }}>
            <thead>
              <tr>
                <td>Survey Name</td>
                <td>Created By</td>
                <td>Responses</td>
                <td>Launch Date</td>
                <td>Close Date</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              {surveyData.slice(startAt, endAt).map((survey) => {
                return (
                  <tr key={survey.id}>
                    <td>{survey.name}</td>
                    <td>{survey.created_by}</td>
                    <td>{survey.response}</td>
                    <td>{survey.launch_date}</td>
                    <td>{survey.close_date}</td>
                    <td>
                      {survey.status === "Live" ? (
                        <p className="live">{survey.status}</p>
                      ) : (
                        <p className="closed">{survey.status}</p>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <hr></hr>
        <div className="pagination">
          Rows per page 10 | {pageCount} of {Math.ceil(surveyData.length / 10)}{" "}
          <span onClick={backCount}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-caret-left"
              width="22"
              height="22"
              viewBox="0 0 24 12"
              stroke-width="1"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 15l-6 -6l-6 6h12" transform="rotate(270 12 12)" />
            </svg>
          </span>
          <span onClick={forwardCount}>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-caret-right"
              width="22"
              height="22"
              viewBox="0 0 24 12"
              stroke-width="1"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 15l-6 -6l-6 6h12" transform="rotate(90 12 12)" />
            </svg>
          </span>
        </div>
      </section>
    </div>
  );
};

export default Surveys;
