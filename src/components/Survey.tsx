import React from "react";

const Survey = (props: {
  survey: {
    id: React.Key | null | undefined;
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
      <td>{props.survey.launch_date}</td>
      <td>{props.survey.close_date}</td>
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
