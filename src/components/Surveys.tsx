import { useEffect, useState } from "react";
import BackSvg from "../assets/BackSvg";
import LogoSvg from "../assets/LogoSvg";
import MSvg from "../assets/MSvg";
import NextSvg from "../assets/NextSvg";
import Survey from "./Survey";

const Surveys = () => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [surveyData, setSurveyData] = useState([]);
  const [startAt, setStartAt] = useState(0);
  const [endAt, setEndAt] = useState(rowsPerPage);
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
      setStartAt(startAt + rowsPerPage);
      setEndAt(endAt + rowsPerPage);
      setPageCount(pageCount + 1);
    }
  };
  const backCount = () => {
    if (startAt >= rowsPerPage) {
      setStartAt(startAt - rowsPerPage);
      setEndAt(endAt - rowsPerPage);
      setPageCount(pageCount - 1);
    }
  };

  return (
    <div className="container">
      <section id="menu">
        <div className="logo">
          <LogoSvg />
          <h4>Smartwage</h4>
        </div>

        <div className="at-foot">
          <div
            className="foot-col"
            style={{ marginLeft: "25px", padding: "3px" }}
          >
            {" "}
            <MSvg />
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
                <td>Closing Date</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              {surveyData.slice(startAt, endAt).map((survey) => {
                return <Survey survey={survey} />;
              })}
            </tbody>
          </table>
        </div>
        <hr className="rule"></hr>
        <div className="pagination">
          Rows Per Page{" "}
          <select
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(+e.target.value)}
          >
            <option value={rowsPerPage}>{rowsPerPage}</option>
            <option>{5}</option>
            <option>{10}</option>
            <option>{20}</option>
            <option>{30}</option>
            <option>{40}</option>
          </select>{" "}
          | {pageCount} of {Math.ceil(surveyData.length / rowsPerPage)}{" "}
          <span onClick={backCount}>
            <BackSvg />
          </span>
          <span onClick={forwardCount}>
            {" "}
            <NextSvg />
          </span>
        </div>
      </section>
    </div>
  );
};

export default Surveys;
