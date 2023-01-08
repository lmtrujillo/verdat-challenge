import React from "react";
import { useState } from "react";

const Group = ({ notes }) => {
  const groupByBucket = notes.reduce((bucketsSoFar, { bucket, item }) => {
    if (!bucketsSoFar[bucket]) bucketsSoFar[bucket] = [];
    bucketsSoFar[bucket].push(item);
    return bucketsSoFar;
  }, {});

  return (
    <div className="group">
      {Object.keys(groupByBucket).map((key) => (
        <span>
          {key !== "" ? (
            <button className="save group-button">{key}</button>
          ) : null}
        </span>
      ))}
    </div>
  );
};

export default Group;
