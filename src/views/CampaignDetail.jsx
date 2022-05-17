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
import React, { useEffect, useState } from "react";
import axios from 'axios';
import DatePicker from 'react-datepicker/dist/react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from "date-fns/esm/locale";
import Campaign from "./Campaign";
import { useNavigate, useLocation } from 'react-router-dom';
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
import CampaignInsert from "./AddCampaign";

// react plugin used to create charts
function CampaignDetail(props) {

  const navigate = useNavigate();
  const location = useLocation();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const initialCampaignInfo = {
    campaignId : null,
    campaignTitle : null,
    campaignDesc : null,
    startDate : new Date(),
    endDate : new Date(),
    targetAmount : null,
    leastPayAmount : null,
    accountStaffId : null,
    representativeId : null,
    status : "00"
  };

  const [campaign, setCampaignInfo] = useState(initialCampaignInfo);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    console.log('useEffect');
    console.log(location.state.campaignId);
    if (campaign.status) {
      // console.log(img[0]);
    }
    axios.get(`http://localhost:8080/campaigns/` + location.state.campaignId)
      .then((response) => {
        console.log(response.data.data);
        setCampaignInfo(response.data.data);


        console.log('campaignId : ' + campaign.campaignId);
        console.log('campaignStatus : ' + campaign.status);
      })
  }, [campaign.status])


  function onClickModify() {
    console.log("onClickModify");
    setDisabled(!disabled);
  }

  function onClickUpdate() {
    console.log("onClickUpdate");

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

    axios.patch(`http://localhost:8080/campaigns/` + location.state.campaignId, {
      campaignTitle,
      campaignDesc,
      startDate,
      endDate,
      targetAmount,
      leastPayAmount,
      accountStaffId,
      representativeId
    })
      .then((response) => {
        console.log(response.data.data);
        setCampaignInfo(response.data.data);
      })
  }

  function onClickDelete() {
    console.log("onClickDelete");
    axios.delete(`http://localhost:8080/campaigns/` + location.state.campaignId)
      .then((response) => {
        console.log(response.data.data);
        setCampaignInfo(response.data.data);
      })
  }

  function onClickApprove() {
    console.log("onClickApprove");
    axios.patch(`http://localhost:8080/campaigns/` + location.state.campaignId + '/approve')
      .then((response) => {
        console.log(response.data.data);
        alert(response.data.data);
        // setCampaignInfo(response.data.data);
      })
  }

  function onClickStop() {
    console.log("onClickApprove");
    axios.patch(`http://localhost:8080/campaigns/` + location.state.campaignId + '/stop')
      .then((response) => {
        console.log(response.data.data);
        alert(response.data.data);
        // setCampaignInfo(response.data.data);
      })
  }

  function onClickCancel() {
    console.log("onClickApprove");
    axios.patch(`http://localhost:8080/campaigns/` + location.state.campaignId + '/cancel')
      .then((response) => {
        console.log(response.data.data);
        alert(response.data.data);
        // setCampaignInfo(response.data.data);
      })
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
                    <Input disabled={disabled} type="text" name="campaignTitle" placeholder="aaaaa" value={{ disabled } ? values.campaignTitle : campaign.campaignTitle}
                      onChange={handleChange} />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col className="pr-1" md="10">
                  <FormGroup>
                    <label>캠페인 내용</label>
                    <Input disabled={disabled} type="textarea" name="campaignDesc" placeholder="aaaaa" value={{ disabled } ? values.campaignDesc : campaign.campaignDesc} onChange={handleChange} />
                  </FormGroup>
                </Col>

                <Col className="pl-1" md="5">
                  <FormGroup>
                    <label>캠페인 시작일자</label>
                    <DatePicker
                      disabled
                      name="startDate"
                      dateFormat="yyyy-MM-dd"
                      locale={ko}
                      selected={values.startDate} onChange={date => setFieldValue('startDate', date)} />

                  </FormGroup>
                </Col>
                <Col className="pl-1" md="5">
                  <FormGroup>
                    <label>캠페인 종료일자</label>
                    <DatePicker
                      disabled
                      name="endDate"
                      dateFormat="yyyy-MM-dd"
                      locale={ko}
                      selected={values.endDate} onChange={date => setFieldValue('endDate', date)} />
                  </FormGroup>
                </Col>

              </Row>
              <Row>
                <Col className="pl-1" md="5">
                  <FormGroup>
                    <label>목표금액</label>
                    <Input disabled={disabled} type="number" name="targetAmount" placeholder="aaaaa" value={{ disabled } ? values.targetAmount : campaign.targetAmount} onChange={handleChange} />
                  </FormGroup>
                </Col>
                <Col className="pr-1" md="5">
                  <FormGroup>
                    <label>최소 납부금액</label>
                    <Input disabled={disabled} type="number" name="leastPayAmount" placeholder="aaaaa" value={{ disabled } ? values.leastPayAmount : campaign.leastPayAmount} onChange={handleChange} />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col className="pr-1" md="5">
                  <FormGroup>
                    <label>총무 ID</label>
                    <Input disabled={disabled} type="text" name="accountStaffId" placeholder="aaaaa" value={{ disabled } ? values.accountStaffId : campaign.accountStaffId} onChange={handleChange} />
                  </FormGroup>
                </Col>
                <Col className="pr-1" md="5">
                  <FormGroup>
                    <label>대표 ID</label>
                    <Input disabled={disabled} type="text" name="representativeId" placeholder="aaaaa" value={{ disabled } ? values.representativeId : campaign.representativeId} onChange={handleChange} />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <div className="update ml-auto mr-auto">
                  {(() => {
                    if (campaign.status == '00' && disabled) {
                      return (
                        <p> <Button className="btn-round" color="primary" type="button" onClick={onClickModify}>캠페인 수정</Button>
                          <Button className="btn-round" color="primary" type="button" onClick={onClickModify}>캠페인 삭제</Button>
                          <Button className="btn-round" color="primary" type="button" onClick={onClickApprove}>캠페인 승인</Button>
                        </p>
                      )
                    }
                    if (!disabled) {
                      return (
                        <p> <Button className="btn-round" color="primary" type="button" onClick={onClickUpdate}>수정완료</Button>
                        </p>
                      )
                    }
                    return (
                      <p>
                        <Button className="btn-round" color="primary" type="button" onClick={onClickStop}>캠페인 중지</Button>
                        <Button className="btn-round" color="primary" type="button" onClick={onClickCancel}>캠페인 취소</Button>
                      </p>
                    )
                  })()}
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

export default CampaignDetail;

