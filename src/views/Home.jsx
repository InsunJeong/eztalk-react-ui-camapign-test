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
import React from "react";


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

function Home() {
  return (
    <>
      <div className="content">
        <Row><p className="">h.e.a 팀을 소개합니다. :-)
          </p></Row>
        <Row>
          <Col >
            <Card className="card-user">
              <div className="image">
                <img
                  alt="..."
                  src="img/damir-bosnjak.jpg"
                />
              </div>
              <CardBody>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src="img/mike.jpg"
                    />
                    <h5 className="title">Steven</h5>
                  </a>
                  <p className="eztalk_profile">@chetfaker</p>
                </div>
                <p className="eztalk_profile text-center">
                  "I like the way you work it <br />
                  No diggity <br />I wanna bag it up"
                </p>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="button-container">
                  <Row>
                    <h5>
                        Scrum Master
                    </h5>

                  </Row>
                </div>
              </CardFooter>
            </Card>
          </Col>  

          <Col>
            <Card className="card-user">
              <div className="image">
                <img
                  alt="..."
                  src="img/damir-bosnjak.jpg"
                />
              </div>
              <CardBody>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src="img/mike.jpg"
                    />
                    <h5 className="title">Curry</h5>
                  </a>
                  <p className="eztalk_profile">@chetfaker</p>
                </div>
                <p className="eztalk_profile text-center">
                  "I like the way you work it <br />
                  No diggity <br />I wanna bag it up"
                </p>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="button-container">
                  <Row>
                    <h5>
                        Action Captine
                    </h5>

                  </Row>
                </div>
              </CardFooter>
            </Card>
          </Col>  

          <Col>
            <Card className="card-user">
              <div className="image">
                <img
                  alt="..."
                  src="img/damir-bosnjak.jpg"
                />
              </div>
              <CardBody>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src="img/mike.jpg"
                    />
                    <h5 className="title">Sunny</h5>
                  </a>
                  <p className="eztalk_profile">@chetfaker</p>
                </div>
                <p className="eztalk_profile text-center">
                  "I like the way you work it <br />
                  No diggity <br />I wanna bag it up"
                </p>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="button-container">
                  <Row>
                    <h5>
                        Writer
                    </h5>

                  </Row>
                </div>
              </CardFooter>
            </Card>
          </Col>  

          <Col>
            <Card className="card-user">
              <div className="image">
                <img
                  alt="..."
                  src="img/damir-bosnjak.jpg"
                />
              </div>
              <CardBody>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src="img/mike.jpg"
                    />
                    <h5 className="title">Stella</h5>
                  </a>
                  <p className="eztalk_profile">@chetfaker</p>
                </div>
                <p className="eztalk_profile text-center">
                  "I like the way you work it <br />
                  No diggity <br />I wanna bag it up"
                </p>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="button-container">
                  <Row>
                    <h5>
                        Speaker
                    </h5>
                   </Row>
                </div>
              </CardFooter>
            </Card>
          </Col>  

          <Col>
            <Card className="card-user">
              <div className="image">
                <img
                  alt="..."
                  src="img/mj-bg-simple.jpg"
                />
              </div>
              <CardBody>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src="img/magaretjo-voila.png"
                    />
                    <h5 className="title">Magaret</h5>
                  </a>
                  <p className="eztalk_profile">
                    magaret@sk.com<br/>
                    조은숙
                  </p>
                  
                </div>
                <p className="eztalk_profile text-center">
                  배워서 남주자 !
                  <br />ㅎㅎㅎ
                </p>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="button-container">
                  <Row>
                      <h5>
                        Product Owner
                      </h5>
                    </Row>
                </div>
              </CardFooter>
            </Card>
           </Col>
        </Row>
      </div>
    </>
  );
}

export default Home;
