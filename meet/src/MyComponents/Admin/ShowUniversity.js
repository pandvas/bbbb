import React from 'react'
import { Component } from "react";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
// import Button from 'react-bootstrap/Button';

import Pagination from '@mui/material/Pagination';


import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from "@material-ui/core";
import '../../index.css';
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import axios from "axios";
export default class ShowUniversity extends Component {

    constructor(props) {
        super(props);
        this.state = {
          data: [],
          id: "",
        };
        this.idHandler = this.idHandler.bind(this);
      }

    idHandler(e) {
        this.setState({ id:Number(e.target.value) });
       const myid = (this.state.id);
        // alert(this.state.id)
        console.log(typeof myid);
         
       // console.log(myid);
        axios
          .delete(
            `http://127.0.0.1:8000/api/universitydel/${this.state.id}`
          )
    
          .then((res) => {
            console.log(res);
            window.location.reload(false);
          })
          .catch((err) => console.error(err));
      }

    componentDidMount() {
        axios
          .get("http://127.0.0.1:8000/api/getUniversity/")
          .then((res) => {
            //console.log(res.data.products);
             this.setState({ data: res.data })
               console.log(res.data);
          })
          .catch((err) => console.error(err));
      }
      

      render(){
    return (

      <Card>
        <Card.Body style={{marginLeft:"4%",marginRight:"4%"}}>
        <Card.Title>University Details</Card.Title>
        <div>
        <Table>
          <TableHead>
          <TableCell>University Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Delete</TableCell>
              <TableCell>Update</TableCell>
          </TableHead>
          <TableBody>
            {this.state.data.map((data) => {
              return (
                <TableRow>
                  <TableCell>{data.id}</TableCell>
                  <TableCell>{data.name}</TableCell>
                  <TableCell>{data.address}</TableCell>
                  <TableCell>{data.email}</TableCell>
                
                  <TableCell>
                  
                  <OverlayTrigger
        delay={{ hide: 450, show: 300 }}
        overlay={(props) => (
          <Tooltip {...props}>
            Click to delete
          </Tooltip>
        )}
        placement="bottom"
      ><button class="btn btn-danger btn-sm" value={data.id} onClick={this.idHandler}>DELETE</button>
      </OverlayTrigger>
    
                      </TableCell>

                  <TableCell>
                  <OverlayTrigger
        delay={{ hide: 450, show: 300 }}
        overlay={(props) => (
          <Tooltip {...props}>
            Click to update
          </Tooltip>
        )}
        placement="bottom"
      ><Link className="btn btn-primary btn-sm" to={`/${data.id}/university/`}>UPDATE</Link>
      </OverlayTrigger>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <div>
                <pagination/>
            </div>
      </div>
      </Card.Body>
      </Card>
    )}
}

