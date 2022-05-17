import React, { useState, useEffect } from "react";
import CampaignService from "../hooks/CampaignService";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

// react plugin used to create charts
function CampaignList(props) {

  const [campaigns, setCampaigns] = useState([]);
  const [currentCampaign, setCurrentCampaign] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  const {authUser} = props;

  useEffect(() => {
    retrieveCampaigns();
    console.log(props);
  }, []);

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };
  const retrieveCampaigns = () => {
    CampaignService.getAll()
      .then(response => {
        setCampaigns(response.data.data);
        console.log(response.data.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  const refreshList = () => {
    retrieveCampaigns();
    setCurrentCampaign(null);
    setCurrentIndex(-1);
  };
  const setActiveCampaign = (campaign, index) => {
    setCurrentCampaign(campaign);
    setCurrentIndex(index);
  };
  const removeAllCampaigns = () => {
    CampaignService.removeAll()
      .then(response => {
        console.log(response.data.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };
  const findByTitle = () => {
    CampaignService.findByTitle(searchTitle)
      .then(response => {
        setCampaigns(response.data.data);
        console.log(response.data.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  return (
    <>
      <div className="content">
      {/* <div className="col-md-6">
        <h4>Tutorials List</h4>
        <ul className="list-group">
          {campaigns &&
            campaigns.map((campaign, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveCampaign(campaign, index)}
                key={index}
              >
                {campaign.campaignTitle}
              </li>
            ))}
        </ul>
      </div> */}
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">캠페인 목록</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive >
                  <thead className="text-primary">
                    <tr>
                      <th>캠페인명</th>
                      <th>캠페인 시작일자</th>
                      <th>캠페인 종료일자</th>
                      <th>목표금액</th>
                      <th>캠페인 상태</th>
                      <th className="text-right">상세보기</th>
                    </tr>
                  </thead>
                  <tbody>
                    {campaigns.map((campaign, index) => (
                      <tr key={campaign.campaignId}>
                        <td>{campaign.campaignTitle}</td>
                        <td>{campaign.startDate}</td>
                        <td>{campaign.endDate}</td>
                        <td>{campaign.targetAmount}</td>
                        <td>{campaign.status}</td>
                        <td className="text-right"><Link
                          to={"/link/campaigns/" + campaign.campaignId}
                          className="badge badge-warning"
                        >
                          Edit
                        </Link></td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Link to='/link/campaigns/AddCampaign'><button className="btn-round btn btn-primary">캠페인등록</button></Link>
      </div>
    </>
  );
}

export default CampaignList;
