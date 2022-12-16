import React from "react";

const About = () => {
  return (
    <div className="mt-10 mb-10" id="about">
      <h1 className="text-2xl lg:text-left md:text-left text-center font-semibold text-white">
        About Me
      </h1>
      <hr></hr>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-5">
        <div className="lg:text-left md:text-left text-center mt-3">
          <h1 className="text-xl text-yellow-400">I am Nasir Ullah</h1>
          <p className=" mb-2">
            Just completed a Diploma in Computer from Cumilla Private
            Polytechnic Institute. In the Future, I want to be a Machine
            Learning Expert.
          </p>
          <p className="">
            On the way to becoming a Machine Learning Expert, I am doing my
            basic Programming practice. I just recently completed the "Complete
            Web Development Course" and become a full stack web developer from
            programming hero Bangladesh.
          </p>
        </div>
        <div className="lg:text-right md:text-right text-center mt-3">
          <h1 className="text-xl text-yellow-400">Education</h1>
          <div>
            <p className="text-white">Diploma in Computer Engineering</p>
            <p><small>Cumilla Private Polytechnic Institute</small></p>
            <p><small>JUN 2018 / DEC 2022</small></p>
          </div>
          <div>
            <p className="text-white">Complete Web Development Course</p>
            <p><small>Programming Hero</small></p>
            <p><small>SEP 2022 / Running</small></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
