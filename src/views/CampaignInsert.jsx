/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";
import axios from 'axios';
import DatePicker from 'react-datepicker/dist/react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from "date-fns/esm/locale";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

function DatePickerComponent() {
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = ({ value, onClick }) => (
    <button className="example-custom-input" onClick={onClick}>
      {value}
    </button>
  );
  return (
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      customInput={<ExampleCustomInput />}
    />
  );
};

function CalendarTest() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};


export default class CamapaignInsert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      campaignTitle: '',
      campaignDesc: '',
      startDate: new Date(),
      endDate: new Date(),
      targetAmount: '',
      leastPayAmount: '',
      accountStaffId: '',
      representativeId: ''
    }
  }


  handleCampaignTitleChange = (event) => {
    const campaignTitle = event.target.value
    this.setState({ campaignTitle: campaignTitle })
  }

  handleCampaignDescChange = (event) => {
    const campaignDesc = event.target.value
    this.setState({ campaignDesc: campaignDesc })
  }

  handleStartDateChange = (startDate) => {
    this.setState({
      startDate: startDate
    });
  }

  handleEndDateChange = (endDate) => {
    this.setState({
      endDate: endDate
    });
  }

  handleTargetAmountChange = (event) => {
    const targetAmount = event.target.value
    this.setState({ targetAmount: targetAmount })
  }

  handleLeastPayAmountChange = (event) => {
    const leastPayAmount = event.target.value
    this.setState({ leastPayAmount: leastPayAmount })
  }

  handleAccountStaffIdChange = (event) => {
    const accountStaffId = event.target.value
    this.setState({ accountStaffId: accountStaffId })
  }

  handleRepresentativeIdChange = (event) => {
    const representativeId = event.target.value
    this.setState({ representativeId: representativeId })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const {
      campaignTitle,
      campaignDesc,
      startDate,
      endDate,
      targetAmount,
      leastPayAmount,
      accountStaffId,
      representativeId,
    } = this.state

    console.log(campaignTitle)

    axios.post("http://localhost:8080/api/insertCampaign", {
      campaignTitle: campaignTitle,
      campaignDesc: campaignDesc,
      startDate: startDate,
      endDate: endDate,
      targetAmount: targetAmount,
      leastPayAmount: leastPayAmount,
      accountStaffId: accountStaffId,
      representativeId: representativeId
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })


  }


  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="10">
              <Card className="campaign-form">
                <CardHeader>
                  <CardTitle tag="h5">캠페인 등록</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form onSubmit={this.handleSubmit}>
                    <Row>
                      <Col className="pr-1" md="10">
                        <FormGroup>
                          <label>캠페인명</label>
                          <Input type="text" name="campaignTitle" placeholder="aaaaa" value={this.state.campaignTitle} onChange={this.handleCampaignTitleChange} />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="10">
                        <FormGroup>
                          <label>캠페인 내용</label>
                          <Input type="textarea" name="campaignDesc" placeholder="aaaaa" value={this.state.campaignDesc} onChange={this.handleCampaignDescChange} />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="5">
                        <FormGroup>
                          <label>캠페인 시작일자</label>
                          <DatePicker
                            name="startDate"
                            dateFormat="yyyy-MM-dd"
                            selected={this.state.startDate}
                            onChange={this.handleStartDateChange}
                            locale={ko} />
                          {/* <Input type="text" name="startDate" placeholder="aaaaa" onClick={this.DatePickerComponent} value={this.state.startDate} onChange={this.handleStartDateChange}/> */}

                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="5">
                        <FormGroup>
                          <label>캠페인 종료일자</label>
                          <DatePicker
                            name="endDate"
                            dateFormat="yyyy-MM-dd"
                            selected={this.state.endDate}
                            onChange={this.handleEndDateChange}
                            locale={ko} />
                          {/* <Input type="text" name="endDate" placeholder="aaaaa" value={this.state.endDate} onChange={this.handleEndDateChange} /> */}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pl-1" md="5">
                        <FormGroup>
                          <label>목표금액</label>
                          <Input type="number" name="targetAmount" placeholder="aaaaa" value={this.state.targetAmount} onChange={this.handleTargetAmountChange} />
                        </FormGroup>
                      </Col>
                      <Col className="pr-1" md="5">
                        <FormGroup>
                          <label>최소 납부금액</label>
                          <Input type="number" name="leastPayAmount" placeholder="aaaaa" value={this.state.leastPayAmount} onChange={this.handleLeastPayAmountChange} />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="5">
                        <FormGroup>
                          <label>총무 ID</label>
                          <Input type="text" name="accountStaffId" placeholder="aaaaa" value={this.state.accountStaffId} onChange={this.handleAccountStaffIdChange} />
                        </FormGroup>
                      </Col>
                      <Col className="pr-1" md="5">
                        <FormGroup>
                          <label>대표 ID</label>
                          <Input type="text" name="representativeId" placeholder="aaaaa" value={this.state.representativeId} onChange={this.handleRepresentativeIdChange} />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <div className="update ml-auto mr-auto">
                        <Button
                          className="btn-round"
                          color="primary"
                          type="submit"
                        >캠페인 등록
                        </Button>
                      </div>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
