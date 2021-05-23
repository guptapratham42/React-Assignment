import React, { Component, useRef } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      jobs: [
        {
          mobile: "8888888888",
          earning_id: "1",
          earning: "1000",
        },
        {
          mobile: "9999999999",
          earning_id: "2",
          earning: "500",
        },
        {
          mobile: "1000000000",
          earning_id: "3",
          earning: "200",
        },
        {
          mobile: "1212121212",
          earning_id: "4",
          earning: "500",
        },
        {
          mobile: "4534532344",
          earning_id: "5",
          earning: "1000",
        },
        {
          mobile: "7777777777",
          earning_id: "6",
          earning: "1200",
        },
        {
          mobile: "6666666666",
          earning_id: "7",
          earning: "1300",
        },
        {
          mobile: "5555555555",
          earning_id: "8",
          earning: "1400",
        },
      ],
    };
    this.handleapproveall = this.handleapproveall.bind(this);
    this.handleselection = this.handleselection.bind(this);
    this.handleClickReject = this.handleClickReject.bind(this);
    this.handleClickApprove = this.handleClickApprove.bind(this);
  }
  handleClickReject(id) {
    let remark = prompt("Please enter Remark", "");
    let curr_person = this.state.jobs.filter(function (person) {
      return person.earning_id === id;
    });
    curr_person[0].action = "reject";
    curr_person[0].remark = remark;
    console.log(curr_person);
    this.setState({
      jobs: this.state.jobs.filter(function (person) {
        return person.earning_id !== id;
      }),
    });
  }
  handleClickApprove(id) {
    let curr_person = this.state.jobs.filter(function (person) {
      return person.earning_id === id;
    });
    curr_person[0].action = "approve";
    console.log(curr_person);
    this.setState({
      jobs: this.state.jobs.filter(function (person) {
        return person.earning_id !== id;
      }),
    });
  }
  handleselection(e, id) {
    let check = e.target.checked;
    if (check) {
      this.setState({ selected: [...this.state.selected, id] });
    } else {
      this.setState({
        selected: this.state.selected.filter(function (person) {
          return person !== id;
        }),
      });
    }
  }
  handleapproveall() {
    let arr = [], reducedarr=this.state.jobs;
    for (let value of this.state.selected) {
      let curr_person = this.state.jobs.filter(function (person) {
        return person.earning_id === value;
      });
      curr_person[0].action = "approve";
      arr = arr.concat(curr_person);
      reducedarr=reducedarr.filter(item => item.earning_id !== value);
    }
    this.setState({jobs: reducedarr});
    console.log(arr);
    this.setState({ selected: [] });
    document
      .querySelectorAll('input[type="checkbox"]')
      .forEach((el) => (el.checked = false));
  }
  render() {
    return (
      <div>
        <br />
        <br />
        <Grid container style={{ justifyContent: "center" }}>
          <Grid item xs={12} md={9} lg={9}>
            <Paper>
              <Table size="small" style={{ width: "100%" }}>
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Mobile</TableCell>
                    <TableCell>Id</TableCell>
                    <TableCell>Earning</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.jobs.map((jobs, ind) => (
                    <TableRow key={ind}>
                      <TableCell>
                        <input
                          type="checkbox"
                          onChange={(e) =>
                            this.handleselection(e, jobs.earning_id)
                          }
                        />
                      </TableCell>
                      <TableCell>{jobs.mobile}</TableCell>
                      <TableCell>{jobs.earning_id}</TableCell>
                      <TableCell>{jobs.earning}</TableCell>
                      <TableCell>
                        <button
                          className="button2"
                          onClick={() =>
                            this.handleClickApprove(jobs.earning_id)
                          }
                        >
                          Approve
                        </button>
                        <button
                          className="button3"
                          onClick={() =>
                            this.handleClickReject(jobs.earning_id)
                          }
                        >
                          Reject
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
            <br />
            <div style={{ textAlign: "center" }}>
              <button
                className="button"
                // style={{ justifyContent: "center" }}
                onClick={() => this.handleapproveall()}
              >
                Approve All selected
              </button>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
