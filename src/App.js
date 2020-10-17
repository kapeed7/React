import React from "react";
import ApprovalCard from "./components/ApprovalCard";
import ProfileCard from "./components/ProfileCard";

export default function App() {
  return (
    <div className="ui container">
      <ApprovalCard>
        <ProfileCard
          name="Alice"
          meta="i am girl"
          info="I am a very beautiful girls"
        />
      </ApprovalCard>
      <ApprovalCard>
        <ProfileCard
          name="Alice"
          meta="i am girl"
          info="I am a very beautiful girls"
        />
      </ApprovalCard>
    </div>
  );
}
