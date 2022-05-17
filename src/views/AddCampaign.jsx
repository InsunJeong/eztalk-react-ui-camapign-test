import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import { useNavigate } from 'react-router-dom';
import CampaignService from '../hooks/CampaignService';

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

function AddCampaign(props) {
  const navigate = useNavigate();
  const initialCampaignState = {
    campaignId: null,
    campaignTitle: "",
    campaignDesc: "",
    startDate: "",
    endDate: "",
    targetAmount: "",
    leastPayAmount: "",
    accountStaffId: "",
    representativeId: ""
  };

  const [campaign, setCampaign] = useState(initialCampaignState);
  const [submitted, setSubmitted] = useState(false);
  const [date, setDate] = useState(new Date());

  const handleInputChange = (event) => {
    console.log("event : " + event.target);
    const { name, value } = event.target;
    console.log("name : " + name);
    console.log("value : " + value);
    setCampaign({ ...campaign, [name]: value });
  };

  const saveCampaign = () => {
    var data = {
      campaignTitle: campaign.campaignTitle,
      campaignDesc: campaign.campaignDesc,
      startDate: campaign.startDate,
      endDate: campaign.endDate,
      targetAmount: campaign.targetAmount,
      leastPayAmount: campaign.leastPayAmount,
      accountStaffId: campaign.accountStaffId,
      representativeId: campaign.representativeId
    };

    CampaignService.create(data)
      .then(response => {
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newCampaign = () => {
    setCampaign(initialCampaignState);
    setSubmitted(false);
  };

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
                <Row>
                  <Col className="pr-1" md="10">
                    <FormGroup>
                      <label>캠페인명</label>
                      <Input type="text" name="campaignTitle" required placeholder="aaaaa" value={campaign.campaignTitle}
                        onChange={handleInputChange} />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="10">
                    <FormGroup>
                      <label>캠페인 내용</label>
                      <Input type="textarea" name="campaignDesc" required placeholder="aaaaa" value={campaign.campaignDesc} onChange={handleInputChange} />
                    </FormGroup>
                  </Col>
                  <Col className="pl-1" md="5">
                    <FormGroup>
                      <label>캠페인 시작일자</label>
                      <DatePicker
                        name="startDate"
                        type="date"
                        dateFormat="yyyy-MM-dd"
                        locale={ko}
                        value={date.toString()}
                        selected={date}
                        onChange={date => handleInputChange({ target: { value: date, name: 'startDate' } })} />
                    </FormGroup>
                  </Col>
                  <Col className="pl-1" md="5">
                    <FormGroup>
                      <label>캠페인 종료일자</label>
                      <DatePicker
                        name="endDate"
                        type="date"
                        dateFormat="yyyy-MM-dd"
                        locale={ko}
                        selected ={date}
                        onChange={date => handleInputChange({ target: { value: date, name: 'endDate' } })} />

                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pl-1" md="5">
                    <FormGroup>
                      <label>목표금액</label>
                      <Input type="number" name="targetAmount" placeholder="aaaaa" value={campaign.targetAmount} onChange={handleInputChange} />
                    </FormGroup>
                  </Col>
                  <Col className="pr-1" md="5">
                    <FormGroup>
                      <label>최소 납부금액</label>
                      <Input type="number" name="leastPayAmount" placeholder="aaaaa" value={campaign.leastPayAmount} onChange={handleInputChange} />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="5">
                    <FormGroup>
                      <label>총무 ID</label>
                      <Input type="text" name="accountStaffId" placeholder="aaaaa" value={campaign.accountStaffId} onChange={handleInputChange} />
                    </FormGroup>
                  </Col>
                  <Col className="pr-1" md="5">
                    <FormGroup>
                      <label>대표 ID</label>
                      <Input type="text" name="representativeId" placeholder="aaaaa" value={campaign.representativeId} onChange={handleInputChange} />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <div className="update ml-auto mr-auto">
                    <Button
                      className="btn-round"
                      color="primary"
                      type="button"
                      onClick={saveCampaign}
                    >캠페인 등록
                    </Button>
                  </div>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default AddCampaign;

