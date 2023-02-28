import React from "react";
import "./skeletonLoading.css";

function SkeletonLoading() {
  return (
    <>
      <div className="loading">
        <div className="card-img skeleton"></div>
      </div>
      <div className="loading">
        <div className="card-img skeleton"></div>
      </div>
      <div className="loading">
        <div className="card-img skeleton"></div>
      </div>
      <div className="loading">
        <div className="card-img skeleton"></div>
      </div>
    </>
  );
}

export default SkeletonLoading;
