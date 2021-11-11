import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import "./App.css";
import shoeList from "./data";
import styled from "styled-components";

import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import Detail from "./Detail.js";

import axios from "axios";

let Pointer = styled.img`
  cursor: pointer;
`;

let Pointer2 = styled.div`
  cursor: pointer;
`;

function App() {
  let history = useHistory();
  let [shoes, shoesChange] = useState(shoeList);
  let [stock, stockChange] = useState([10, 11, 12, 15, 14, 20]);

  // function dataAdd(data) {
  //   let newData = [...shoes];
  //   let addData = [...newData, ...data];
  //   shoesChange(addData);
  // }

  return (
    <div className="App">
      <BrowserRouter basename="/React_ShoppingMall_Demo">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">
              ShoeShop
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {/* <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link> */}
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/detail/0">
                  Detail
                </Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Switch태그로 감싸면 중복되는 url주소 있어도 상단에 작성된 하나만 보여줌 */}
        <Switch>
          <Route exact path="/">
            <div className="background">
              <h1>20% Season off</h1>
              <p>jumbotron</p>
              <p>
                <Button variant="primary">Primary</Button>
              </p>
            </div>
            <div className="container">
              <div className="row">
                {shoes.map((item, index) => {
                  return <ItemBox item={item} index={index} key={index} />;
                })}
              </div>
              <button
                className="btn btn-primary"
                onClick={() => {
                  // 로딩중 UI

                  // axios post 요청 = 데이터 전송
                  // axios.post('서버URL', {id : "아이디", pw : 1234});

                  // axios get요청
                  axios
                    .get("https://codingapple1.github.io/shop/data2.json")
                    .then((result) => {
                      // 로딩중 UI 안보이게
                      //서버와 연결 성공했을때
                      // result는 성공해서 받아온 모든 정보들이 담겨있는 객체
                      shoesChange([...shoes, ...result.data]);
                      // result.data는 결과 객체에서 데이터 프로퍼타에 해당하는 값만 가져옴
                    })
                    .catch(() => {
                      //서버와 연결 실패했을때
                      console.log("실패!");
                    });
                  //fetch도 위와 사용법은 거의 같음 대신 axios는 JSON파일의 "":"" 내용의 문자열에서
                  // ""를 제거하여 객체 타입으로 반환해주고 fetch 함수는 JSON 그대로 반환하기때문에 객체타입으로 변환하는 작업이 필요하다.
                  // fetch("https://codingapple1.github.io/shop/data2.json")
                  //   .then((result) => {
                  //     console.log(result.data);
                  //   })
                  //   .catch();
                  // 위처럼 사용하면 undefined 출력됨, 객체타입으로 변환 필요
                }}
              >
                더보기
              </button>
            </div>
          </Route>
          <Route exact path="/detail/:id">
            <Detail
              shoes={shoes}
              shoesChange={shoesChange}
              stock={stock}
              stockChange={stockChange}
            />
          </Route>

          <Route path="/:id">
            {/* :id 는 아무문자를 의미 */}
            <div>아무거나 적었을때 이거 보여줌</div>
          </Route>
        </Switch>
      </BrowserRouter>
      {/* <Route path="~~~" component={~~~}></Route> */}
    </div>
  );
}

function ItemBox(props) {
  let history = useHistory();

  return (
    <div
      className="col-md-4"
      onClick={() => {
        history.push("/detail/" + props.index);
      }}
    >
      <Pointer
        src={
          "https://codingapple1.github.io/shop/shoes" +
          (props.index + 1) +
          ".jpg"
        }
        alt="상품이미지1"
        width="100%"
      />
      <h4>{props.item.title}</h4>
      <p>
        {props.item.content} & {props.item.price}
      </p>
    </div>
  );
}

export default App;
