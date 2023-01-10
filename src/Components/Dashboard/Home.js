import React from "react";
import "../../App.css";

export default function Home() {
  return (
    <div className="main">
      <div className="main-top">
        <h1>Attendance</h1>
        <i className="fas fa-user-cog"></i>
      </div>
      <div className="users">
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="#"
          />
          <h4>Shashank Ranjan</h4>
          <p>Front-end Developer</p>
          <div className="per">
            <table>
              <tr>
                <td>
                  <span>85%</span>
                </td>
                <td>
                  <span>87%</span>
                </td>
              </tr>
              <tr>
                <td>Month</td>
                <td>Year</td>
              </tr>
            </table>
          </div>
          <button>Profile</button>
        </div>
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="#"
          />
          <h4>Avinash Kumar Ranjan</h4>
          <p>Progammer</p>
          <div className="per">
            <table>
              <tr>
                <td>
                  <span>82%</span>
                </td>
                <td>
                  <span>85%</span>
                </td>
              </tr>
              <tr>
                <td>Month</td>
                <td>Year</td>
              </tr>
            </table>
          </div>
          <button>Profile</button>
        </div>
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="#"
          />
          <h4>Ankit Keshri</h4>
          <p>Marketing Executive</p>
          <div className="per">
            <table>
              <tr>
                <td>
                  <span>94%</span>
                </td>
                <td>
                  <span>92%</span>
                </td>
              </tr>
              <tr>
                <td>Month</td>
                <td>Year</td>
              </tr>
            </table>
          </div>
          <button>Profile</button>
        </div>
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="#"
          />
          <h4>Srijan Kumar Gupta</h4>
          <p>Tech Writer</p>
          <div className="per">
            <table>
              <tr>
                <td>
                  <span>85%</span>
                </td>
                <td>
                  <span>82%</span>
                </td>
              </tr>
              <tr>
                <td>Month</td>
                <td>Year</td>
              </tr>
            </table>
          </div>
          <button>Profile</button>
        </div>
      </div>

      <section className="attendance">
        <div className="attendance-list">
          <h1>Attendance List</h1>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Depart</th>
                <th>Date</th>
                <th>Join Time</th>
                <th>Logout Time</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="active">
                <td>01</td>
                <td>Shashank Ranjan</td>
                <td>Front-end Developer</td>
                <td>03-24-22</td>
                <td>8:00AM</td>
                <td>3:00PM</td>
                <td>
                  <button>View</button>
                </td>
              </tr>
              <tr className="">
                <td>02</td>
                <td>Avinash Kumar Ranjan</td>
                <td>Progammer</td>
                <td>03-24-22</td>
                <td>9:00AM</td>
                <td>4:00PM</td>
                <td>
                  <button>View</button>
                </td>
              </tr>
              <tr>
                <td>03</td>
                <td>Ankit Keshri</td>
                <td>Marketing Executive</td>
                <td>03-24-22</td>
                <td>8:00AM</td>
                <td>3:00PM</td>
                <td>
                  <button>View</button>
                </td>
              </tr>
              <tr>
                <td>04</td>
                <td>Srijan Kumar Gupta</td>
                <td>Tech Writer</td>
                <td>03-24-22</td>
                <td>8:00AM</td>
                <td>3:00PM</td>
                <td>
                  <button>View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
