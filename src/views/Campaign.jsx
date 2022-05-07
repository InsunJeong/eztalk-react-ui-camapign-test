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
import React, { useEffect, useCallback, useState } from "react";
import axios from 'axios';
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";
import { Link, Navigate, Outlet, Route, Routes } from "react-router-dom";
import CampaignInsert from "./CampaignInsert";

// react plugin used to create charts
function Campaign() {

  const [campaigns, setCampaignList] = useState([]);

  useEffect(() => {
    console.log('useEffect');
    axios.get(`http://localhost:8080/api/campaignList`)
      .then((response) => {
        console.log(response.data.data);
        setCampaignList(response.data.data);
      })
  }, [])

  function moveToCampaignDetail(value) {
    console.log("moveToCampaignDetail");
    console.log(value);
  }

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">캠페인 목록</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>캠페인명</th>
                      <th>캠페인 시작일자</th>
                      <th>캠페인 종료일자</th>
                      <th>목표금액</th>
                      <th className="text-right">캠페인 상태</th>
                    </tr>
                  </thead>
                  <tbody>
                    {campaigns.map((campaign) => (
                      <tr key={campaign.campaignNum} onClick={moveToCampaignDetail(campaign.campaignNum)}>
                        <td>{campaign.campaignTitle}</td>
                        <td>{campaign.startDate}</td>
                        <td>{campaign.endDate}</td>
                        <td>{campaign.targetAmount}</td>
                        <td className="text-right">{campaign.approveYn}</td>
                      </tr>
                    ))}

                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Link to='/link/campaigns/CampaignInsert'><button className="btn-round btn btn-primary">캠페인등록</button></Link>
      </div>
    </>
  );
}

export default Campaign;
