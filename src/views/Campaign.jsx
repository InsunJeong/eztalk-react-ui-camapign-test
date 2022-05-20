import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import CampaignService from "../hooks/CampaignService";
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
  Table,
} from "reactstrap";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import CampaignInsert from "./AddCampaign";
import CampaignDetail from "./ZCampaignDetail-bak";

// react plugin used to create charts
function Campaign(props) {

  const { id }= useParams();

  let navigate = useNavigate();
  const initialCampaignState = {
    campaignId: null,
    campaignTitle: "",
    campaignDesc: "",
    startDate: "",
    endDate: "",
    targetAmount: "",
    leastPayAmount: "",
    accountStaffId: "",
    representativeId: "",
    status: ""
  };

  const [currentCampaign, setCurrentCampaign] = useState(initialCampaignState);
  const [message, setMessage] = useState("");
  const [date, setDate] = useState(new Date());
  const [disabled, setDisabled] = useState(true);

  const getCampaign = id => {
    CampaignService.get(id)
      .then(response => {
        setCurrentCampaign(response.data.data);
        console.log(response.data.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  useEffect(() => {
    if (id)
    getCampaign(id);
  }, [id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentCampaign({ ...currentCampaign, [name]: value });
  };
  // const updatePublished = status => {
  //   var data = {
  //     id: currentTutorial.id,
  //     title: currentTutorial.title,
  //     description: currentTutorial.description,
  //     published: status
  //   };
  //   TutorialDataService.update(currentTutorial.id, data)
  //     .then(response => {
  //       setCurrentTutorial({ ...currentTutorial, published: status });
  //       console.log(response.data);
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // };

  const updateCampaign = () => {
    CampaignService.update(currentCampaign.campaignId, currentCampaign)
      .then(response => {
        console.log(response.data);
        setMessage("The tutorial was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };
  const deleteCampaign = () => {
    CampaignService.remove(currentCampaign.campaignId)
      .then(response => {
        console.log(response.data.data);
        // navigate("/tutorials");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const approveCampaign = () => {
    CampaignService.approve(currentCampaign.campaignId)
      .then(response => {
        console.log(response.data.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const stopCampaign = () => {
    CampaignService.stop(currentCampaign.campaignId)
      .then(response => {
        console.log(response.data.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const cancelCampaign = () => {
    CampaignService.cancel(currentCampaign.campaignId)
      .then(response => {
        console.log(response.data.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const changeUpdateForm = () => {
    setDisabled(!disabled);
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
                <Row>
                  <Col className="pr-1" md="10">
                    <FormGroup>
                      <label>캠페인명</label>
                      <Input type="text" disabled={disabled} name="campaignTitle" required placeholder="aaaaa" value={currentCampaign.campaignTitle}
                        onChange={handleInputChange} />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="10">
                    <FormGroup>
                      <label>캠페인 내용</label>
                      <Input type="textarea" disabled={disabled} name="campaignDesc" required placeholder="aaaaa" value={currentCampaign.campaignDesc} onChange={handleInputChange} />
                    </FormGroup>
                  </Col>
                  <Col className="pl-1" md="5">
                    <FormGroup>
                      <label>캠페인 시작일자</label>
                      <DatePicker
                        disabled={disabled}
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
                        disabled={disabled}
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
                      <Input type="number" disabled={disabled} name="targetAmount" placeholder="aaaaa" value={currentCampaign.targetAmount} onChange={handleInputChange} />
                    </FormGroup>
                  </Col>
                  <Col className="pr-1" md="5">
                    <FormGroup>
                      <label>최소 납부금액</label>
                      <Input type="number" disabled={disabled} name="leastPayAmount" placeholder="aaaaa" value={currentCampaign.leastPayAmount} onChange={handleInputChange} />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="5">
                    <FormGroup>
                      <label>총무 ID</label>
                      <Input type="text" disabled={disabled} name="accountStaffId" placeholder="aaaaa" value={currentCampaign.accountStaffId} onChange={handleInputChange} />
                    </FormGroup>
                  </Col>
                  <Col className="pr-1" md="5">
                    <FormGroup>
                      <label>대표 ID</label>
                      <Input type="text" disabled={disabled} name="representativeId" placeholder="aaaaa" value={currentCampaign.representativeId} onChange={handleInputChange} />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                <div className="update ml-auto mr-auto">
                {(() => {
                    if (disabled) {
                      return (
                        <p>
                          <Button className="btn-round" color="primary" type="button" onClick={changeUpdateForm}>캠페인 수정</Button>
                          <Button className="btn-round" color="primary" type="button" onClick={deleteCampaign}>캠페인 삭제</Button>
                          <Button className="btn-round" color="primary" type="button" onClick={approveCampaign}>캠페인 승인</Button>
                        </p>
                      )
                    }
                    else if (!disabled) {
                      return (
                        <p> <Button className="btn-round" color="primary" type="button" onClick={updateCampaign}>수정완료</Button>
                        </p>
                      )
                    }
                    return (
                      <p>
                        <Button className="btn-round" color="primary" type="button" onClick={stopCampaign}>캠페인 중지</Button>
                        <Button className="btn-round" color="primary" type="button" onClick={cancelCampaign}>캠페인 취소</Button>
                      </p>
                    )
                  })()}
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

export default Campaign;
