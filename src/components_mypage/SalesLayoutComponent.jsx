import React from "react";
import { useNavigate } from "react-router-dom";
import "./SalesLayoutComponent.css"

const SalesLayoutComponent = () => {

  return (
    <div>
        <div className="title">판매 내역</div>
        <div className="container">
            <div className="menu-container">
                <div className="menu-item">정보</div>
                <div className="menu-item">게시 날짜</div>
                <div className="menu-item">상태</div>
        </div>
    </div>
  </div>
  );
  
}

export default SalesLayoutComponent;
