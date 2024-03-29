import React from "react";

const Survey = (props: {
  survey: {
    id: React.Key;
    name: string;
    created_by: string;
    response: string;
    launch_date: string;
    close_date: string;
    status: string;
  };
}) => {
  return (
    <tr key={props.survey.id}>
      <td>{props.survey.name}</td>
      <td>{props.survey.created_by}</td>
      <td>{props.survey.response}</td>
      <td>
        <a>{props.survey.launch_date.slice(0, 5)}...</a>
        <span>{props.survey.launch_date}</span>
      </td>
      <td>
        <a>{props.survey.close_date.slice(0, 5)}...</a>
        <span>{props.survey.close_date}</span>
      </td>
      <td>
        {props.survey.status === "Live" ? (
          <p className="live">{props.survey.status}</p>
        ) : (
          <p className="closed">{props.survey.status}</p>
        )}
      </td>
    </tr>
  );
};

export default Survey;
