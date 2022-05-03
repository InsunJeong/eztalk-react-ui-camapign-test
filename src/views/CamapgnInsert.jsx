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
import React, { useCallback } from "react";
import axios from 'axios';

// react plugin used to create charts

export default class Campaign extends React.Component {
  state = {
    campaigns: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/api/campaignList`)
      .then(res => {
        const campaigns = res.data.data;
        console.log(campaigns);

        this.setState({ campaigns });
      })
  }

  clickCampaign(e) {
    console.log(e);
  }

  render() {
    return (
      <>
        <div className="content">

          <ul>
            {
              this.state.campaigns.map(campaign =>
                <li key={campaign.campaignNum} onClick={() => this.clickCampaign(campaign.campaignNum)}>Delete{campaign.campaignDesc}, {campaign.startDate}, {campaign.endDate}</li>
              )
            }
          </ul>
          <button onclick="activateLasers()">캠페인등록</button>
        </div>
      </>
    )
  }
}
