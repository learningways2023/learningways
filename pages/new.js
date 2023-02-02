import React from "react";
import Image from "next/image";
import ment from "../public/john.png";
const New = () => {
  return (
    <div className="bdy">
      <div className="container">
        <div className="card">
          <div className="imgBx">
            <Image src={ment} width={150} height={150} />
          </div>
          <div className="contentBx">
            <h2>Design</h2>
            <p>
              Welcome to our comprehensive skill development platform. Discover
              a wide range of courses and resources to help you learn new
              skills, improve existing ones and advance your career. With our
              expert-led training, interactive practice exercises and real-world
              examples, you'll have everything you need to succeed in your
              professional and personal life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
