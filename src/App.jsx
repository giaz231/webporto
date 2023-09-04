import "./App.css";
import foto from "/fotoGiyas.png";
import fotoHero from "/bgHero2.jpg";
import ikuzsport from "/ikuzsport.png";
import airbnbClone from "/airbnbclone.png";
import dashboard from "/dashboard.png";
import figma from "/figma.png";
import github from "/github.png";
import js from "/js.png";
import mysql from "/mysql.png";
import nodejs from "/nodeJS.png";
import react from "/react.png";
import tailwind from "/tailwind.png";
import postman from "/postman.png";
// import { BsFillCheckCircleFill } from "react-icons/bs";
import check from "/check.png";
import certif from "/certificate.png";

function App() {
  return (
    <>
      <div className="bg-white text-hardBlue">
        <div className="x-4 sm:mx-2 lg:mx-28 sticky top-0 z-10">
          <div className="navbar border-2  bg-base-100 shadow-xl rounded-3xl h-28 ">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>About</a>
                  </li>
                  <li>
                    <a>Project</a>
                  </li>
                  <li>
                    <a>Work Experience</a>
                  </li>
                  <li>
                    <a>Certifications</a>
                  </li>
                </ul>
              </div>
              <a className="btn btn-ghost normal-case "> </a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="text-xl  menu menu-horizontal px-1">
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Project</a>
                </li>
                <li>
                  <a>Work Experience</a>
                </li>
                <li>
                  <a>Certifications</a>
                </li>
              </ul>
            </div>
            <div className="navbar-end"></div>
          </div>
        </div>
        <div className="m-4 sm:m-2 lg:m-28 font-plus-jak ">
          <section>
            <div
              className="hero rounded-3xl min-h-screen bg-zinc-300"
              style={{
                backgroundImage: `url(${fotoHero})`,
              }}
            >
              <div className="hero-content flex-col lg:flex-row gap-10">
                <img
                  src={foto}
                  className=" rounded-full shadow-2xl bg-white "
                />
                <div>
                  <h1 className="text-4xl font-bold text-black">
                    Muhammad Ghiyats Shufy
                  </h1>
                  <div className="py-6">
                    <p className="text-md mb-5 text-black">
                      Enthusiast Developer with Product Operational Specialist
                      experience at a software company in the Jakarta City Hall.
                      I was responsible for the system implementation and
                      maintenance web apps, leading a team of 5 Product
                      Operational Specialist (POS).
                    </p>
                    <p className="text-md mb-5 text-black">
                      I developed several project such as KSBB, SmartChange and
                      partial fiture CRM V1. Working closely with some
                      developers, I gained interest in programming area so I
                      decided to join Alterra Academy Frontend Bootcamp.
                    </p>
                    <p className="text-md mb-5 text-black">
                      I built several project as FE engineer using ReactJS,
                      NextJS and several UI such as Tailwind CSS, Bootstrap,
                      Daisy UI, Chakra UI. Strive for perfection. Familiar with
                      tight deadline and flexible working hour, I'm excited to
                      join company which could challenge my skills.
                    </p>
                  </div>
                  <button className=" btn bg-hardBlue text-white hover:bg-green">
                    Get To Know Me
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="flex items-center mt-20 mb-20  pt-10 pb-10">
            <div className="my-24 bg-white  font-bold text-5xl max-sm:hidden ">
              The Tech I Muster
            </div>

            <div className="flex flex-wrap  items-center gap-4">
              <div className="flex flex-wrap  items-center gap-4">
                <img className="w-24 h-24" src={github} alt="" />{" "}
                <span className="text-xl box-sizing w-24 h-24  flex items-center">
                  Github
                </span>
              </div>
              <div className="flex flex-wrap  items-center gap-4">
                <img className="w-24 h-24" src={mysql} alt="" />{" "}
                <span className="text-xl box-sizing w-24 h-24  flex items-center">
                  MySQL
                </span>
              </div>
            </div>
            <div className="flex flex-wrap  items-center gap-4">
              <div className="flex flex-wrap  items-center gap-4">
                <img className="w-24 h-24" src={nodejs} alt="" />{" "}
                <span className="text-xl box-sizing w-24 h-24  flex items-center">
                  NodeJS
                </span>
              </div>

              <div className="flex flex-wrap  items-center gap-4">
                <img className="w-24 h-24" src={figma} alt="" />{" "}
                <span className="text-xl box-sizing w-24 h-24  flex items-center">
                  Figma
                </span>
              </div>
            </div>
            <div className="flex flex-wrap  items-center gap-4 ">
              <div className="flex flex-wrap  items-center gap-4 ">
                <img className=" w-24 h-24" src={js} alt="" />{" "}
                <span className="text-xl box-sizing w-24 h-24  flex items-center">
                  Javascript
                </span>
              </div>

              <div className="flex flex-wrap  items-center gap-4 ">
                <img className=" w-24 h-24 " src={react} alt="" />
                <span className="text-xl box-sizing w-24 h-24  flex items-center ">
                  React
                </span>
              </div>
            </div>
            <div className="flex flex-wrap  items-center gap-4  ">
              <div className="flex flex-wrap   items-center gap-4">
                <img className="w-24 h-24 w-100 h-24" src={tailwind} alt="" />
                <span className="text-xl box-sizing w-24 h-24  flex items-center">
                  Tailwind
                </span>
              </div>
              <div className="flex flex-wrap  items-center gap-4">
                <img className="w-24 h-24" src={postman} alt="" />{" "}
                <span className="text-xl box-sizing w-24 h-24  flex items-center">
                  Postman
                </span>
              </div>
            </div>
          </section>
          <div className="my-24 py-10">
            <div className=" bg-white my-5 font-bold text-5xl text-center">
              <p>
                My <span className="mx-4"> ̶S̶w̶e̶a̶t̶ ̶a̶n̶d̶ ̶B̶l̶o̶o̶d̶ </span> Projects{" "}
              </p>
            </div>
            <div className="text-center text-black">
              <p>
                <span>
                  Based on my work experiencei have plenty of product management
                </span>
                <br />
                project but for this porto i only put programming project
              </p>
            </div>
          </div>
          <section className="flex flex-wrap gap-20 justify-center">
            <div className="card w-96 bg-white shadow-xl ">
              <figure className="">
                <img src={ikuzsport} alt="logo" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Ikuzsport</h2>
                <p className="mb-5 text-black">
                  Ikuzports is a wesbite to help you to find people who have the
                  same hobbies, there is several fitur such as
                  oauth,midtrans,chat box,pagination,filter,search. I worked as
                  frontend and this project was build from scratch.The tech at
                  the frontend side we use was ReactJS,Chakra UI and Redux
                </p>
                <div className="card-actions justify-end">
                  <a href="https://github.com/Capstone-Project-Group3-Ikuzports/FE-Ikuzports-CapstoneProject">
                    <button className="btn bg-hardBlue text-white hover:bg-green">
                      Check the source code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-white shadow-xl ">
              <figure className="">
                <img src={airbnbClone} alt="Screenshot" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Airbnb Clone Project</h2>
                <p className="mb-5 text-black">
                  Airbnb Clone Project is a website that provides hotels or
                  homestays for rent when people are on vacation. The feature
                  that I cloned was creating boards, lists, and cards. The
                  technologies at the frontend side we use was NextJS, Tailwind
                  css, and DaisyUI.
                </p>
                <div className="card-actions justify-end">
                  <a href="https://github.com/Property-Marketplace-Air-BnB-Clone-App/AirBnB-Clone-App">
                    <button className="btn bg-hardBlue text-white hover:bg-green">
                      Check the source code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-white shadow-xl">
              <figure>
                <img src={dashboard} alt="logo" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Alterra Dashboard</h2>
                <p className="mb-5 text-black">
                  Alterra dashboard is a project for cloning the Altera
                  dashboard website. The feature that I create is a list
                  feature, and cards. The technologies at the frontend side we
                  use was ReactJS, Tailwindcss, and DaisyUI
                </p>
                <div className="card-actions justify-end">
                  <a href="https://github.com/ImmersiveDashboard/FE-Project-2">
                    <button className="btn bg-hardBlue text-white hover:bg-green">
                      Check the source code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-white shadow-xl ">
              <figure>{/*    */}</figure>
              <div className="card-body">
                <h2 className="card-title">Kodiklatal Persuratan</h2>
                <p className="mb-5 text-black">
                  Dashboard about mailing sytem at Kodiklatal TNI , in the era
                  of digitization 3.0, physical correspondence has begun to be
                  abandoned. then a system of internal correspondence was formed
                  in the TNI Kodiklat The technologies we use was Laravel ,
                  Mysql.
                </p>
                <div className="card-actions justify-end">
                  <a href="https://github.com/giaz231/Kodiklatal-TNI">
                    <button className="btn bg-hardBlue text-white hover:bg-green">
                      Check the source code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-white shadow-xl ">
              <figure>
                {/* <img
                src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              /> */}
              </figure>
              <div className="card-body">
                <h2 className="card-title">Koperasipbs</h2>
                <p className="text-black">
                  Koperasipbs website is a cooperative website for prospective
                  ship captains who are concerned about retirement. The
                  technologies we use was PHP Native, Mysql.
                </p>
                <div className="card-actions justify-end">
                  <a href="https://github.com/giaz231/koperasipbs">
                    <button className="btn bg-hardBlue text-white hover:bg-green">
                      Check the source code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <div className="my-24 py-10">
            <div className=" bg-white my-5 font-bold text-5xl text-center">
              <p>Work Experience</p>
            </div>
            <div className="text-center text-black">
              <p>
                <span>
                  Had tremendous experience of analis and develope project
                  outside the code
                </span>
                <br />
                for only insipire me to coding
              </p>
            </div>
          </div>

          <section className="flex flex-wrap justify-center">
            <div className="flex flex-row w-full max-sm:grid">
              <div className="grid p-8 basis-2/5 w-96 card bg-lightBlue rounded-box place-items-center ">
                <ul className="list-disc grid gap-2 text-black">
                  <li className="list-none mb-4">
                    <span className="font-bold text-lg ">
                      PRODUCT OPERATIONAL SPECIALIST (TEAM LEADER)
                    </span>
                    <br />
                    <span className="font-normal text-regular text-slate-600">
                      Jakarta Smart City (Diskominfotik DKI JAKARTA)
                    </span>
                  </li>

                  <li>
                    Making plans, curriculum, and/or scenarios for technical
                    guidance/training
                  </li>
                  <li>
                    Supporting instruments for technical
                    guidance/socialization/training
                  </li>
                  <li>
                    Engage and play an active role in System Integration Testing
                    (SIT), Functional Testing, and User Acceptance Testing (UAT)
                    for Mobile and/or Dashboard applications
                  </li>
                  <li>
                    Create a scenario, test case, and perform manual testing for
                    application or website developed by Jakarta Smart City at
                    System Integration Testing (SIT), Functional Testing, and
                    User Acceptance Testing (UAT) environment and also document
                    (inventory) findings (bugs/issues/requests) during the
                    testing process
                  </li>
                </ul>
              </div>
              <div className="divider divider-horizontal basis-1/5 max-sm:hidden">
                February 2022 - Present
              </div>
              <div className=" grid p-8 basis-2/5 w-96 card   rounded-box place-items-center "></div>
            </div>

            <div className="flex flex-row w-full max-sm:grid">
              <div className=" grid p-8 basis-2/5 w-96 card   rounded-box place-items-center "></div>
              <div className="divider divider-horizontal basis-1/5 max-sm:hidden">
                February 2020 - January 2022
              </div>
              <div className="grid w-96 p-8 basis-2/5 card bg-lightBlue rounded-box place-items-center text-black">
                <ul className="list-disc grid gap-2">
                  <li className="list-none mb-4">
                    <span className="font-bold text-lg">
                      TECHNICAL SUPPORT(TEAM LEADER)
                    </span>
                    <br />
                    <span className="font-normal text-regular text-slate-600">
                      Jakarta Smart City (Diskominfotik DKI JAKARTA)
                    </span>
                  </li>

                  <li>
                    Collect and document (inventory): complaints or bugs related
                    to applications to be coordinated with the Technical Team
                    (Developer/Programmer); as well as requests submitted by the
                    applications' users to be coordinated with the
                    Project/Product Manager and System Analyst
                  </li>
                  <li>
                    Perform routine checking of application, such as checking
                    API integration using Postman, and ensuring the application
                    is operating properly
                  </li>
                  <li>
                    Arrange socialization/technical guidance/training to users
                    about application utilization, including preparing
                    plans/curriculum and compiling supporting instruments
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-row w-full max-sm:grid max-sm:my-20 max-sm:py-20">
              <div className="grid w-96 p-8 basis-2/5 card bg-lightBlue rounded-box place-items-center">
                <ul className="list-disc grid gap-2 text-black">
                  <li className="mb-2 list-none">
                    <span className="font-bold text-lg">ENGINEER ON SITE</span>
                    <br />
                    <span className="font-normal text-regular text-slate-600">
                      PT. Innovez Singapore
                    </span>
                  </li>

                  <li>Maintaning hardware and software system on site</li>
                  <li>
                    Transfer knowledge about how to use webapp to non IT
                    users(ship captain)
                  </li>
                  <li>Report bugs to developers</li>
                  <li>Daily report log</li>
                  <li>Implement new digitalization shipping system</li>
                </ul>
              </div>
              <div className="divider divider-horizontal basis-1/5 max-sm:hidden">
                2018 - 2019
              </div>
              <div className="grid h-20 basis-2/5 card  rounded-box place-items-center "></div>
            </div>
            <div className="flex flex-row w-full max-sm:grid">
              <div className=" grid p-8 basis-2/5 w-96 card   rounded-box place-items-center "></div>
              <div className="divider divider-horizontal basis-1/5 max-sm:hidden">
                2017 - 2018
              </div>
              <div className="grid p-8 w-96 basis-2/5 card bg-lightBlue rounded-box place-items-center">
                <ul className="list-disc grid gap-2 text-black">
                  <li className="mb-2 list-none">
                    <span className="font-bold text-lg">PLB/KM</span>
                    <br />
                    <span className="font-normal text-regular text-slate-600">
                      PT. Transjakarta BUMD
                    </span>
                  </li>

                  <li>Operating traffic software bus</li>
                  <li>Maintenance time arriving and deploy at bus stop</li>
                  <li>
                    High discipline with time sensitive shifting working hour
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <div className="flex flex-row my-20 py-10">
            <div className="basis-1/2">
              <img src={certif} alt="" />
            </div>
            <div className="basis-1/2 ">
              <div className=" bg-white my-5 font-bold text-5xl ">
                <p>Certification</p>
              </div>
              <div className="text-black">
                <p>
                  <span>
                    As tech always going forward , one cant have too much
                    certificate
                  </span>
                </p>
              </div>

              <ul className=" font-bold my-10">
                <li className="flex  items-center">
                  <img src={check} alt="" className="w-10" />
                  <span className="px-3">
                    Oracle : SQL and Extended SQL with Programming Feature
                    (Issued by Gunadharma University 2016).
                  </span>
                </li>

                <li className="flex  items-center">
                  <img src={check} alt="" className="w-10" />
                  <span className="px-3">
                    Penelitian Ilmiah : Game Berbasis Android Menggunakan Unity
                    dengan Bahasa pemrograman C# (Issued by Gunadharma
                    University Jan 2016).
                  </span>
                </li>

                <li className="flex  items-center">
                  <img src={check} alt="" className="w-10" />
                  <span className="px-3">
                    Java Programming language Fundamental workshop (Issued by
                    Gunadharma University 2016).
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <div className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        {/* <div>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div> */}
        <div>
          <p>@2023 M Ghiyats Shufy</p>
        </div>
      </footer>
    </>
  );
}

export default App;
