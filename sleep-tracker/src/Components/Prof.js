import React from "react";

const Prof = ({ prof }) => {
  return (
    <div>
      {prof.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
        </div>
      ))}
    </div>
  );
};
