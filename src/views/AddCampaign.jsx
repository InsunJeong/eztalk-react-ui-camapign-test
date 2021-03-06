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
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const handleInputChange = (event) => {
    console.log("event : " + event.target);
    const { name, value } = event.target;
    console.log("name : " + name);
    console.log("value : " + value);
    if(name == 'startDate')
      setStartDate(value);
    else if (name == 'endDate')
      setEndDate(value);
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
                <CardTitle tag="h5">????????? ??????</CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col className="pr-1" md="10">
                    <FormGroup>
                      <label>????????????</label>
                      <Input type="text" name="campaignTitle" required placeholder="aaaaa" value={campaign.campaignTitle}
                        onChange={handleInputChange} />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="10">
                    <FormGroup>
                      <label>????????? ??????</label>
                      <Input type="textarea" name="campaignDesc" required placeholder="aaaaa" value={campaign.campaignDesc} onChange={handleInputChange} />
                    </FormGroup>
                  </Col>
                  <Col className="pl-1" md="5">
                    <FormGroup>
                      <label>????????? ????????????</label>
                      <DatePicker
                        name="startDate"
                        type="date"
                        dateFormat="yyyy-MM-dd"
                        locale={ko}
                        selected={startDate}
                        onChange={date => handleInputChange({ target: { value: date, name: 'startDate' } })} />
                    </FormGroup>
                  </Col>
                  <Col className="pl-1" md="5">
                    <FormGroup>
                      <label>????????? ????????????</label>
                      <DatePicker
                        name="endDate"
                        type="date"
                        dateFormat="yyyy-MM-dd"
                        locale={ko}
                        selected={endDate}
                        onChange={date => handleInputChange({ target: { value: date, name: 'endDate' } })} />

                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pl-1" md="5">
                    <FormGroup>
                      <label>????????????</label>
                      <Input type="number" name="targetAmount" placeholder="aaaaa" value={campaign.targetAmount} onChange={handleInputChange} />
                    </FormGroup>
                  </Col>
                  <Col className="pr-1" md="5">
                    <FormGroup>
                      <label>?????? ????????????</label>
                      <Input type="number" name="leastPayAmount" placeholder="aaaaa" value={campaign.leastPayAmount} onChange={handleInputChange} />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="5">
                    <FormGroup>
                      <label>?????? ID</label>
                      <Input type="text" name="accountStaffId" placeholder="aaaaa" value={campaign.accountStaffId} onChange={handleInputChange} />
                    </FormGroup>
                  </Col>
                  <Col className="pr-1" md="5">
                    <FormGroup>
                      <label>?????? ID</label>
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
                    >????????? ??????
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

