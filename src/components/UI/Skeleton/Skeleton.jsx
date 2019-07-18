import React from "react";
import "./Skeleton.css";
import Skeleton from "react-loading-skeleton";
const Skel = () => {
  return (
    <div>
      <div className="Order">
        <p>
          <Skeleton height={25} width={430} />
        </p>
        <p>
          <Skeleton height={30} width={140} />
        </p>
      </div>
      <div className="Order">
        <p>
          <Skeleton height={25} width={430} />
        </p>
        <p>
          <Skeleton height={30} width={140} />
        </p>
      </div>
      <div className="Order">
        <p>
          <Skeleton height={25} width={430} />
        </p>
        <p>
          <Skeleton height={30} width={140} />
        </p>
      </div>
      <div className="Order">
        <p>
          <Skeleton height={25} width={430} />
        </p>
        <p>
          <Skeleton height={30} width={140} />
        </p>
      </div>
    </div>
  );
};

export default Skel;
