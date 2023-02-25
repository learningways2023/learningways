import React from "react";
import Navbar from "../components/navbar";
import filter from "../public/filter.png";
import Image from "next/image";
import ClassFiveToTenCard from "../components/classFiveToTenCard";
import PremiumCourseCard from "../components/premiumCourseCard";
import Footer from "../components/footer";
import face from "../public/facebook.png";
import insta from "../public/insta.png";
import { useRouter } from "next/router";
import SummerCard from "../components/summerCard";
import linked from "../public/linkedin.png";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import UpcommingCard from "../components/upcommingCard";
import twitter from "../public/twitter.png";
import dbms from "../public/dbms.png";
import john from "../public/john.png";
import Uparrow from "../components/uparrow";
const ClassFivetoTen = () => {
  const router = useRouter();
  const classes =
    " text-black border-b-2  text-base bg-inherit placeholder-[#333]  w-full h-full   block py-2.5 lg:px-9 xl:px-9 px-9 outline-0 focus:outline-0 ";
  const FormHeader = (props) => (
    <h2 className="font-[500] py-5 text-black xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px]">
      {props.title}
    </h2>
  );
  return (
    <div>
      <Navbar />
      <Uparrow url="classFivetoTen" />
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        A Comprehensive Platform for School Students to Learn, Grow, and Thrive
        Choose your category to explore
      </div>
      <div className=" min-h-[40vh]">
        <div className="px-4 py-8 mx-1 rounded-md md:mx-4 lg:mx-4 xl:mx-4 my-8 grid bg-gradient-to-r from-blue-500 to-cyan-500 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 lg:text-xl sm:text-lg text-base font-semibold">
          <div className="w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] font-semibold card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
              onClick={function handleClick() {
                router.push("/classFivetoTen/#coding");
              }}
            >
              Coding Course
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] font-semibold card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
              onClick={function handleClick() {
                router.push("/NCERT_Solutions");
              }}
            >
              NCERT
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] font-semibold card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
              onClick={function handleClick() {
                router.push("/classFivetoTen/#private_tutor");
              }}
            >
              Private Tutoring
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] font-semibold card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
              onClick={function handleClick() {
                router.push("/classFivetoTen/#personality_developement");
              }}
            >
              Personality Development
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] font-semibold card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
              onClick={function handleClick() {
                router.push("/classFivetoTen/#quiz");
              }}
            >
              Quiz Section
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] font-semibold card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
              onClick={function handleClick() {
                router.push("/classFivetoTen/#join");
              }}
            >
              Join Community
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] font-semibold card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
              onClick={function handleClick() {
                router.push("/classFivetoTen/#materials");
              }}
            >
              Reading Materials
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] font-semibold card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
              onClick={function handleClick() {
                router.push("/classFivetoTen/#summer_camp");
              }}
            >
              Summer Camp
            </div>
          </div>
        </div>
      </div>
      <div
        id="coding"
        className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] "
      >
        Coding Course
      </div>
      <div className="mx-4 py-2 px-1 min-h-[80vh] cardbg1 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        <div className="flex justify-center items-center">
          <ClassFiveToTenCard
            img="https://assets10.lottiefiles.com/packages/lf20_4djadzzo.json"
            tittle="Introduction to Coding"
            desc="In this course, students will learn the basics of coding, including problem-solving, logical thinking, and creativity. They will use different online tools and platforms, such as Code.org, Scratch, and Tynker, to create simple programs, games, and animations. They will also learn about different careers in tech and how coding can be used in real-life situations."
            level="Beginner"
            age="8-12 years"
            duration="4 weeks, 1 hour per week"
          />
        </div>
        <div className="flex justify-center items-center">
          <ClassFiveToTenCard
            img="https://assets10.lottiefiles.com/packages/lf20_4djadzzo.json"
            tittle="Mobile App Development"
            desc="In this course, students will learn how to design and develop their own mobile apps using MIT App Inventor, a block-based visual programming tool. They will create apps that can interact with sensors, databases, and external APIs, using design thinking principles and user-centered design. They will also learn how to publish and share their app on different platforms, such as Android and iOS."
            level="Intermediate"
            age="12-16 years"
            duration="6 weeks, 1.5 hours per week"
          />
        </div>
        <div className="flex justify-center items-center">
          <ClassFiveToTenCard
            img="https://assets10.lottiefiles.com/packages/lf20_4djadzzo.json"
            tittle="Cybersecurity and Ethical Hacking"
            desc="In this course, students will learn about the basics of cybersecurity and ethical hacking, including network security, cryptography, and social engineering. They will use different tools and techniques to assess and exploit vulnerabilities in computer systems, while following ethical guidelines and legal frameworks. They will also learn about different careers in cybersecurity and how to stay safe online in a connected world"
            level="Advanced"
            age="14-18 years"
            duration="8 weeks, 2 hours per week"
          />
        </div>
      </div>

      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Testimonials
      </div>
      <div className=" min-h-[60vh] mx-4 rounded-md ">
        <div className="px-4  lg:px-7 xl:px-7 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5">
          <div className=" w-full flex justify-center items-center">
            <div className=" w-[300px] lg:w-[600px] xl:w-[600px] min-h-[200px] card-col border border-1 border-gray-300 rounded-lg drop-shadow-2xl cursor-pointer text-black hover:bg-gradient-to-r from-blue-500 to-cyan-500  flex-row p-3 hover:text-white wwd1 justify-center items-center text-center text-xl">
              <div className="flex justify-center items-center text-center py-4 ">
                I really enjoyed taking the Web Development course. It was very
                informative and helpful. I learned a lot about HTML and CSS, and
                how they work together to create websites. I was able to build
                my own personal website, which I am very proud of. The
                instructor was very patient and answered all my questions. I
                would definitely recommend this course to anyone interested in
                web development.{" "}
              </div>
              <div className=" flex-row md:flex lg:flex xl:flex items-center justify-center">
                <div className="flex justify-center items-center">
                  <Image src={john} width={100} height={100} />
                </div>
                <div className="pl-5">
                  <div className="lg:text-lg md:text-lg text-base  font-semibold">
                    Rohit Kumar | Web Development with HTML/CSS | Age: 14 |
                    Duration: 8 weeks
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-5 w-full flex justify-center items-center">
            <div className=" w-[300px] lg:w-[600px] xl:w-[600px] min-h-[200px] border border-1 border-gray-300 card-col rounded-lg drop-shadow-2xl cursor-pointer text-black hover:bg-gradient-to-r from-blue-500 to-cyan-500  flex-row p-3 hover:text-white wwd1 justify-center items-center text-center text-xl">
              <div className="flex justify-center items-center text-center py-4 ">
                I had so much fun taking the Introduction to Coding course. I
                learned a lot of new things, and I now know how to create simple
                programs and games using different online tools. The instructor
                was very friendly and made the classes interesting. I would love
                to take more coding courses in the future. I feel more confident
                and excited about learning new things.
              </div>
              <div className=" flex-row md:flex lg:flex xl:flex items-center justify-center">
                <div className="flex justify-center items-center">
                  <Image src={john} width={100} height={100} />
                </div>
                <div className="pl-5">
                  <div className="lg:text-lg md:text-lg text-base  font-semibold">
                    Anjali Sharma | Introduction to Coding | Age: 12 | Duration:
                    4 weeks
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="private_tutor"
        className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] "
      >
        Private Tutor
      </div>
      <div className=" min-h-[60vh] mx-4 rounded-md ">
        <div className="px-4  lg:px-7 xl:px-7 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5">
          <div className=" w-full flex justify-center items-center">
            <div className=" w-[300px] lg:w-[600px] xl:w-[600px] min-h-[200px] card-col border border-1 border-gray-300 rounded-lg drop-shadow-2xl cursor-pointer text-black hover:bg-gradient-to-r from-blue-500 to-cyan-500  flex-row p-3 hover:text-white wwd1 justify-center items-center text-center text-xl">
              <div className="flex justify-center items-center text-center py-4 ">
                Priya has helped me understand Python programming from the
                basics to the advanced level. She is patient, friendly, and
                explains complex concepts in a simple way. She also helped me
                with a machine learning project, which I could present at a
                science fair. I would highly recommend her to anyone looking for
                a tutor in programming.
              </div>
              <div className=" flex-row md:flex lg:flex xl:flex items-center justify-center">
                <div className="flex justify-center items-center">
                  <Image src={john} width={100} height={100} />
                </div>
                <div className="pl-5">
                  <div className="lg:text-lg md:text-lg text-base  font-semibold">
                    Priya Singh | Bachelor's in Computer Science | 5 years of
                    teaching experience | Specialization: Python, Machine
                    Learning
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-5 w-full flex justify-center items-center">
            <div className=" w-[300px] lg:w-[600px] xl:w-[600px] min-h-[200px] border border-1 border-gray-300 card-col rounded-lg drop-shadow-2xl cursor-pointer text-black hover:bg-gradient-to-r from-blue-500 to-cyan-500  flex-row p-3 hover:text-white wwd1 justify-center items-center text-center text-xl">
              <div className="flex justify-center items-center text-center py-4 ">
                Rajiv is an excellent tutor in Java programming. He helped me
                prepare for my board exams and also taught me advanced topics
                like data structures and algorithms. His teaching style is very
                organized and systematic. He also provides useful study
                materials and mock tests to assess our learning. I would
                recommend him to any student looking to excel in computer
                science.
              </div>
              <div className=" flex-row md:flex lg:flex xl:flex items-center justify-center">
                <div className="flex justify-center items-center">
                  <Image src={john} width={100} height={100} />
                </div>
                <div className="pl-5">
                  <div className="lg:text-lg md:text-lg text-base  font-semibold">
                    Rajiv Kapoor | Master's in Computer Science | 10 years of
                    teaching experience | Specialization: Java, Data Structures,
                    Algorithms
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="personality_developement"
        className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10"
      >
        Personality Development
      </div>
      <div className=" px-4 mx-4 py-4 lg:px-7 xl:px-7 text-[#fff] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md   flex justify-center items-center text-center   xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
        Unleash Your Potential: Enhance Your Personality and Boost Your
        Confidence
      </div>
      <div className="mx-4 mt-10 py-2 px-1 min-h-[80vh] cardbg1 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        <div className="flex justify-center items-center">
          <ClassFiveToTenCard
            img="https://assets10.lottiefiles.com/packages/lf20_4djadzzo.json"
            tittle="Public Speaking and Communication Skills"
            desc="In this course, students will learn the basics of public speaking and effective communication. They will develop their speaking skills through fun activities such as role-playing, storytelling, and impromptu speaking. They will also learn about body language, vocal variety, and active listening. At the end of the course, they will deliver a short speech to showcase their progress."
            level="Beginner"
            age="8-12 years"
            duration="4 weeks, 1 hour per week"
          />
        </div>
        <div className="flex justify-center items-center">
          <ClassFiveToTenCard
            img="https://assets10.lottiefiles.com/packages/lf20_4djadzzo.json"
            tittle="  Leadership and Team Building  "
            desc="In this course, students will learn about leadership and team building skills through hands-on activities and group projects. They will learn about different leadership styles, goal setting, conflict resolution, and delegation. They will also learn how to work effectively in a team, communicate clearly, and give and receive feedback. At the end of the course, they will showcase their teamwork skills through a group presentation"
            level="Intermediate"
            age="12-16 years"
            duration="6 weeks, 1.5 hours per week"
          />
        </div>
        <div className="flex justify-center items-center">
          <ClassFiveToTenCard
            img="https://assets10.lottiefiles.com/packages/lf20_4djadzzo.json"
            tittle="Emotional Intelligence and Self-awareness"
            desc="In this course, students will learn about emotional intelligence and self-awareness, which are crucial skills for personal and professional success. They will learn how to manage their emotions, understand their strengths and weaknesses, and develop empathy and resilience. They will also learn how to set personal and career goals and make informed decisions based on their values and interests. At the end of the course, they will create a personal development plan"
            level="Advanced"
            age="14-18 years"
            duration="8 weeks, 2 hours per week"
          />
        </div>
      </div>
      <div id="join" className="mx-4 my-10 min-h-[60vh] rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 ">
        <div className="grid grid-cols-1 md:grid-col-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          <div className="flex flex-col justify-center items-center p-4">
            <div className="xl:text-[26px]  lg:text-[25px] sm:text-[25px] text-[18px] font-semibold flex items-center justify-start text-center text-white">
              Join our community groups to connect with like-minded individuals,
              engage in meaningful conversations, and learn from others. Our
              experienced community managers ensure respectful and constructive
              discussions. Expand your network and make new friends today!
            </div>
            <div className="pt-10">
              <div
                className="border-2 text-black rounded px-4 md:px-20 py-2 text-lg  cursor-pointer font-semibold bg-[#fbcf08] border-[#fbcf08] duration-150"
                onClick={function handlePaage() {
                  router.push("/community");
                }}
              >
                <button>Join our community club !</button>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <Player
              autoplay
              loop
              src="https://assets9.lottiefiles.com/packages/lf20_yzvjus7g.json"
              className=" w-[300px] h-[500px] xl:pt-0 xl:pb-0 lg:pt-0 lg:pb-0 sm:pt-5 sm:pb-10"
            ></Player>
          </div>
        </div>
      </div>

      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Upcomming Events
      </div>

      <div className="mx-4 py-2 px-1 min-h-[80vh] cardbg1 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        <div className="flex justify-center items-center">
          <SummerCard
            img="https://assets10.lottiefiles.com/packages/lf20_4djadzzo.json"
            tittle="Summer Coding Camp"
            desc="This 10-day coding camp is perfect for students who want to learn and enhance their coding skills in a fun and interactive way. Students will learn programming concepts through games, puzzles, and real-world applications. They will also work on projects and get personalized feedback from our expert instructors.At the end of the camp, they will showcase their projects in a demo day."
            age="10-15 years"
            duration="10:00 AM - 1:00 PM"
            date="10th May - 20th May"
            loc="Online"
          />
        </div>
        <div className="flex justify-center items-center">
          <SummerCard
            img="https://assets10.lottiefiles.com/packages/lf20_4djadzzo.json"
            tittle="Personality Development Workshop"
            desc="This 2-week workshop is designed to help students build their self-confidence, interpersonal skills, and leadership abilities. Students will learn about different aspects of personality development such as body language, communication skills, goal setting, and stress management. They will also engage in group discussions, role plays, and reflection exercises to enhance their self-awareness and social skills."
            age="12-18 years"
            duration="3:00 PM - 5:00 PM"
            date="15th June - 30th June"
            loc="In-person"
          />
        </div>
        <div className="flex justify-center items-center">
          <SummerCard
            img="https://assets10.lottiefiles.com/packages/lf20_4djadzzo.json"
            tittle="Personality Development Workshop"
            desc="This 2-week workshop is designed to help students build their self-confidence, interpersonal skills, and leadership abilities. Students will learn about different aspects of personality development such as body language, communication skills, goal setting, and stress management. They will also engage in group discussions, role plays, and reflection exercises to enhance their self-awareness and social skills."
            age="12-18 years"
            duration="3:00 PM - 5:00 PM"
            date="15th June - 30th June"
            loc="In-person"
          />
        </div>
      </div>
      <div
        id="summer_camp"
        className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10"
      >
        Summer Camps
      </div>
      <div className=" px-4 mx-4 py-4 lg:px-7 xl:px-7 text-[#fff] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md   flex justify-center items-center text-center   xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
        Summer Online Camps for School Students: Learn, Create, and Connect
      </div>
      <div className="mx-4 py-2 mt-10 px-1 min-h-[80vh] cardbg1 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        <div className="flex justify-center items-center">
          <SummerCard
            img="https://assets10.lottiefiles.com/packages/lf20_4djadzzo.json"
            tittle="Digital Art and Design Camp"
            desc="This 2-week camp is designed for students who want to explore their creativity in the digital world. They will learn about different digital art forms such as graphic design, animation, and video production. They will also learn about visual storytelling, branding, and marketing. They will have the opportunity to showcase their artworks and projects in a virtual exhibition. "
            age="10-15 years"
            duration="10:00 AM - 1:00 PM"
            date="1st May - 15th May"
            loc="Online"
          />
        </div>
        <div className="flex justify-center items-center">
          <SummerCard
            img="https://assets10.lottiefiles.com/packages/lf20_4djadzzo.json"
            tittle="Science and Technology Camp"
            desc=" This 2-week camp is perfect for students who love science and technology. They will learn about different scientific concepts such as physics, chemistry, and biology. They will also learn about technology tools such as coding, robotics, and AI. They will have the opportunity to participate in hands-on experiments and projects. This camp will develop their critical thinking, problem-solving, and innovation skills."
            age="12-16 years"
            duration="3:00 PM - 6:00 PM"
            date="15th May - 30th May"
            loc="Online"
          />
        </div>
        <div className="flex justify-center items-center">
          <SummerCard
            img="https://assets10.lottiefiles.com/packages/lf20_4djadzzo.json"
            tittle="Language and Culture Camp"
            desc="This 2-week camp is designed for students who want to explore different cultures and languages. They will learn about different countries, customs, and traditions. They will also learn about different languages such as Spanish, French, and Mandarin. They will have the opportunity to participate in language lessons and cultural activities. This camp will foster their global awareness, communication skills, and empathy."
            age="8-12 years"
            duration="10:00 AM - 1:00 PM"
            date=" 1st June - 15th June"
            loc="Online"
          />
        </div>
      </div>

      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Enroll your child in the best school
      </div>
      <div className="m-4 min-h-[100vh] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          <div className="w-auto h-auto flex justify-center items-center ">
            <Player
              autoplay
              loop
              src="https://assets6.lottiefiles.com/packages/lf20_uqsv3ztj.json"
              className=" xl:w-[400px] xl:h-[400px] lg:w-[380px] lg:h-[400px] md:w-[400px] md:h-[400px] sm:w-[360px] sm:h-[360px] xl:pt-0 xl:pb-0 lg:pt-0 lg:pb-0 sm:pt-5 sm:pb-10"
            ></Player>
          </div>

          <div className=" p-4 rounded-md flex items-center justify-center  pt-9">
            <div className="newloginContainer   rounded-md">
              <div className="newLoginTop flex items-center justify-center">
                <FormHeader title="Find School" />
              </div>
              <div className="card-col">
                <form
                  className="newLoginForm m-4 py-7"
                  action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSc_QJ0517TP7rdLkVNpYs49aiK3qiH__gMYL8MdvoFop15jEw/formResponse"
                >
                  <label className="text-lg   pb-1">Name</label>
                  <input
                    className={classes}
                    type="text"
                    name="entry.2005620554"
                    placeholder="Enter your Name"
                  />

                  <div className="flex justify-between pr-[1.5rem] pb-1">
                    <label className="text-lg   ">Contact </label>
                  </div>
                  <input
                    className={classes}
                    type="number"
                    name="entry.1045781291"
                    placeholder="Enter your Mobile Number"
                  />
                  <div className="flex justify-between pr-[1.5rem] pb-1">
                    <label className="text-lg   ">Class</label>
                  </div>
                  <input
                    className={classes}
                    type="text"
                    name="entry.1166974658"
                    placeholder="Enter your Grade"
                  />
                  <div className="flex justify-between pr-[1.5rem] pb-1">
                    <label className="text-lg   ">City</label>
                  </div>
                  <input
                    className={classes}
                    type="text"
                    name="entry.1166974658"
                    placeholder="Type Your City"
                  />

                  <div className=" flex justify-center items-center pt-7 pb-3  ">
                    <div
                      className="border-2 text-black rounded px-4 md:px-9 py-1 text-lg  cursor-pointer font-semibold bg-[#fbcf08] border-[#fbcf08] duration-150"
                      onClick={function handlePaage() {
                        router.push("/community");
                      }}
                    >
                      <button>Request a Call back !</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Feedback: Your Ward deserves best & we are on it .
      </div>

      <Footer />
    </div>
  );
};

export default ClassFivetoTen;
