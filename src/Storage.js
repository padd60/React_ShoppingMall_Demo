import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";

export let stockContext = React.createContext();

function Storage(props) {
  let Pointer = styled.img`
    cursor: pointer;
  `;

  let history = useHistory();

  let state = useSelector((state) => {
    return state;
  });

  return (
    <div
      className="col-md-4"
      onClick={() => {
        history.push("/detail/" + props.item.id);
      }}
    >
      <Pointer
        src={
          "https://codingapple1.github.io/shop/shoes" +
          (props.item.id + 1) +
          ".jpg"
        }
        alt="상품이미지1"
        width="100%"
      />
      <h4>{props.item.title}</h4>
      <p>
        {props.item.content} & {props.item.price}
      </p>
      <Stock index={props.index} stock={props.stock}></Stock>
    </div>
  );
}

function Stock(props) {
  // state 공유 범위 사용 변수
  let stock = useContext(stockContext);

  // 부모의 context범위 안에 포함되어 있는 컴포넌트들은 전부 state값 공유 가능
  // 공유 범위 사용 변수 작성 시...
  return <p>재고 : {props.stock[props.index]}</p>;
}

export default Storage;
