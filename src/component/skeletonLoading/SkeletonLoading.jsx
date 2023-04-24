import React from "react";
import "./skeletonLoading.css";

function SkeletonLoading() {
  const skeletonCards = [1, 2, 3, 4];

  return (
    <>
      {skeletonCards.map((skeletonCard) => (
        <div key={skeletonCard} className="card-img skeleton">
          <div className="caption skeleton">
            <div className="text skeleton"></div>
            <div className="text skeleton"></div>
          </div>
        </div>
      ))}
    </>
  );
}

export default SkeletonLoading;
