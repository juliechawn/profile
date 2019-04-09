import React from "react";

function formatDate(date) {
  var monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + " " + monthNames[monthIndex] + " " + year;
}

function formatTime(time) {
  var hour = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();

  var ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;
  hour = hour ? hour : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return hour + ":" + minutes + ":" + seconds + " " + ampm;
}

export default class SearchHistory extends React.Component {
 
  render() {
    const { historyNames } = this.props;
    const date = new Date();
    const time = new Date();
    return (
      <div className="card">
        <div className="card-header bg-primary text-white">Search History</div>
        <div className="card-body table-responsive">
          <table className="table table-striped">
            <tbody>
              {historyNames.map((historyName, index) => (
                <tr key={index}>
                {/* <th className="row ml-1 p-0"><i
                    className="fas fa-times fa-sm"
                  /></th> */}
                  <td>
                    {historyName.name}
                    <br />
                    <small>
                      {formatDate(date)}
                      <span>
                        {" "}
                        <b>@</b>
                      </span>
                      {formatTime(time)}
                    </small>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
