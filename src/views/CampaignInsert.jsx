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
import Campaign from "./Campaign";
import { useNavigate } from 'react-router-dom';
import { useFormik, Formik, Form, Field } from 'formik';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Input,
  Row,
  Col,
} from "reactstrap";
import { values } from "lodash-es";

function CamapaignInsert(props) {
  // useEffect(() => {
  //   console.log('useEffect');
  // }, [])
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  async function callServer(values, actions) {
    console.log("onSubmit values " + values);

    const {
      campaignTitle,
      campaignDesc,
      startDate,
      endDate,
      targetAmount,
      leastPayAmount,
      accountStaffId,
      representativeId
    } = values;

    try {
      const { data } = await axios.post('http://localhost:8080/campaigns', {
        campaignTitle,
        campaignDesc,
        startDate,
        endDate,
        targetAmount,
        leastPayAmount,
        accountStaffId,
        representativeId
      }).then(res => {
        console.log(res);
        console.log(res.data);
        navigate("/menu/campaigns");
      });
    } catch (error) {
      // const { status, data } = error.response
      // if (status === 422) {
      //   actions.setErrors(data.errors)
      // }
    }
  }

  function CreateCampaignFormik() {


    return (
      <Formik
        initialValues={{
          campaignTitle: "", campaignDesc: "", startDate: new Date(), endDate: new Date(), targetAmount: "", leastPayAmount: "", accountStaffId: "", representativeId: ""
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            callServer(values);
            setSubmitting(false);
          }, 500);
        }}
      >
        {props => {
          const {
            values,
            onDateChange,
            touched,
            errors,
            dirty,
            isSubmitting,
            setFieldValue,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          } = props;
          return (
            <Form on onSubmit={handleSubmit}>
              <Row>
                <Col className="pr-1" md="10">
                  <FormGroup>
                    <label>캠페인명</label>
                    <Input type="text" name="campaignTitle" placeholder="aaaaa" value={values.campaignTitle}
                      onChange={handleChange} />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col className="pr-1" md="10">
                  <FormGroup>
                    <label>캠페인 내용</label>
                    <Input type="textarea" name="campaignDesc" placeholder="aaaaa" value={values.campaignDesc} onChange={handleChange} />
                  </FormGroup>
                </Col>
                <Col className="pl-1" md="5">
                  <FormGroup>
                    <label>캠페인 시작일자</label>
                    <DatePicker
                      name="startDate"
                      dateFormat="yyyy-MM-dd"
                      locale={ko}
                      selected={values.startDate} onChange={date => setFieldValue('startDate', date)} />
                    {/* <Input type="text" name="startDate" placeholder="aaaaa" onClick={this.DatePickerComponent} value={this.state.startDate} onChange={this.handleStartDateChange}/> */}

                  </FormGroup>
                </Col>
                <Col className="pl-1" md="5">
                  <FormGroup>
                    <label>캠페인 종료일자</label>
                    <DatePicker
                      name="endDate"
                      dateFormat="yyyy-MM-dd"
                      locale={ko}
                      selected={values.endDate} onChange={date => setFieldValue('endDate', date)} />
                    {/* <Input type="text" name="endDate" placeholder="aaaaa" value={this.state.endDate} onChange={this.handleEndDateChange} /> */}
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col className="pl-1" md="5">
                  <FormGroup>
                    <label>목표금액</label>
                    <Input type="number" name="targetAmount" placeholder="aaaaa" value={values.targetAmount} onChange={handleChange} />
                  </FormGroup>
                </Col>
                <Col className="pr-1" md="5">
                  <FormGroup>
                    <label>최소 납부금액</label>
                    <Input type="number" name="leastPayAmount" placeholder="aaaaa" value={values.leastPayAmount} onChange={handleChange} />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col className="pr-1" md="5">
                  <FormGroup>
                    <label>총무 ID</label>
                    <Input type="text" name="accountStaffId" placeholder="aaaaa" value={values.accountStaffId} onChange={handleChange} />
                  </FormGroup>
                </Col>
                <Col className="pr-1" md="5">
                  <FormGroup>
                    <label>대표 ID</label>
                    <Input type="text" name="representativeId" placeholder="aaaaa" value={values.representativeId} onChange={handleChange} />
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
          );
        }}
      </Formik >
    )
  }

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
                <CreateCampaignFormik />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default CamapaignInsert;

