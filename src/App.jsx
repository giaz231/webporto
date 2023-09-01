import "./App.css";
import foto from "../src/assets/fotoGiyas.png";
import fotoHero from "../src/assets/bgHero2.jpg";
import ikuzsport from "../src/assets/ikuzsport.png";
import airbnbClone from "../src/assets/airbnbClone.png";
import dashboard from "../src/assets/dashboard.png";

function App() {
  return (
    <>
      <div className="m-28 font-plus-jak">
        <section>
          <div
            className="hero rounded-3xl min-h-screen bg-zinc-300"
            style={{
              backgroundImage: `url(${fotoHero})`,
            }}
          >
            <div className="hero-content flex-col lg:flex-row">
              <img src={foto} className="max-w-sm rounded-lg shadow-2xl" />
              <div>
                <h1 className="text-5xl font-bold text-black">
                  Muhammad Ghiyats Shufy
                </h1>
                <p className="py-6 text-black  ">
                  Enthusiast Developer with Product Operational Specialist
                  experience at a software company in the Jakarta City Hall. I
                  was responsible for the system implementation and maintenance
                  web apps, leading a team of 5 Product Operational Specialist
                  (POS). I developed several project such as KSBB, SmartChange
                  and partial fiture CRM V1. Working closely with some
                  developers, I gained interest in programming area so I decided
                  to join Alterra Academy Frontend Bootcamp. I built several
                  project as FE engineer using ReactJS, NextJS and several UI
                  such as Tailwind CSS, Bootstrap, Daisy UI, Chakra UI. Strive
                  for perfection. Familiar with tight deadline and flexible
                  working hour, I'm excited to join company which could
                  challenge my skills.
                </p>
                <button className="btn btn-primary">Get To Know Me</button>
              </div>
            </div>
          </div>
        </section>
        <div className="m-10 p-14 bg-lightBlue shadow-2xl rounded-2xl text-hardBlue font-bold text-6xl text-center">
          Projects
        </div>
        <section className="flex flex-wrap gap-20 justify-center">
          <div className="card w-96 bg-base-100 shadow-xl ">
            <figure className="">
              <img src={ikuzsport} alt="logo" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Airbnb Clone Project</h2>
              <p>
                Airbnb Clone Project is a website that provides hotels or
                homestays for rent when people are on vacation. The feature that
                I cloned was creating boards, lists, and cards. The technologies
                at the frontend side we use was NextJS, Tailwind css, and
                DaisyUI.
              </p>
              <div className="card-actions justify-end">
                <a href="https://github.com/Capstone-Project-Group3-Ikuzports/FE-Ikuzports-CapstoneProject">
                  <button className="btn btn-primary">
                    Check the source codee
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl ">
            <figure className="">
              <img src={airbnbClone} alt="Screenshot" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Airbnb Clone Project</h2>
              <p>
                Airbnb Clone Project is a website that provides hotels or
                homestays for rent when people are on vacation. The feature that
                I cloned was creating boards, lists, and cards. The technologies
                at the frontend side we use was NextJS, Tailwind css, and
                DaisyUI.
              </p>
              <div className="card-actions justify-end">
                <a href="https://github.com/Property-Marketplace-Air-BnB-Clone-App/AirBnB-Clone-App">
                  <button className="btn btn-primary">
                    Check the source codee
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={dashboard} alt="logo" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Alterra Dashboard</h2>
              <p>
                Alterra dashboard is a project for cloning the Altera dashboard
                website. The feature that I create is a list feature, and cards.
                The technologies at the frontend side we use was ReactJS,
                Tailwindcss, and DaisyUI
              </p>
              <div className="card-actions justify-end">
                <a href="https://github.com/ImmersiveDashboard/FE-Project-2">
                  <button className="btn btn-primary">
                    Check the source codee
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure>{/*    */}</figure>
            <div className="card-body">
              <h2 className="card-title">Kodiklatal Persuratan</h2>
              <p>
                Dashboard about mailing sytem at Kodiklatal TNI , in the era of
                digitization 3.0, physical correspondence has begun to be
                abandoned. then a system of internal correspondence was formed
                in the TNI Kodiklat The technologies we use was Laravel , Mysql.
              </p>
              <div className="card-actions justify-end">
                <a href="https://github.com/giaz231/Kodiklatal-TNI">
                  <button className="btn btn-primary">
                    Check the source codee
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure>
              {/* <img
                src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              /> */}
            </figure>
            <div className="card-body">
              <h2 className="card-title">Koperasipbs</h2>
              <p>
                Koperasipbs website is a cooperative website for prospective
                ship captains who are concerned about retirement. The
                technologies we use was PHP Native, Mysql.
              </p>
              <div className="card-actions justify-end">
                <a href="https://github.com/giaz231/koperasipbs">
                  <button className="btn btn-primary">
                    Check the source codee
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="m-10 p-10"></div>
        <section className="flex flex-wrap justify-center">
          <div className="flex flex-row w-full">
            <div className="grid p-8 basis-2/5 w-96 card bg-lightBlue rounded-box place-items-center">
              <ul>
                <li className="font-bold">
                  PRODUCT OPERATIONAL SPECIALIST (TEAM LEADER)
                </li>
                <li className="mb-2">
                  Jakarta Smart City (Diskominfotik DKI JAKARTA)
                </li>
                <li>
                  • Making plans, curriculum, and/or scenarios for technical
                  guidance/training
                </li>
                <li>
                  • Supporting instruments for technical
                  guidance/socialization/training
                </li>
                <li>
                  • Engage and play an active role in System Integration Testing
                  (SIT), Functional Testing, and User Acceptance Testing (UAT)
                  for Mobile and/or Dashboard applications
                </li>
                <li>
                  • Create a scenario, test case, and perform manual testing for
                  application or website developed by Jakarta Smart City at
                  System Integration Testing (SIT), Functional Testing, and User
                  Acceptance Testing (UAT) environment and also document
                  (inventory) findings (bugs/issues/requests) during the testing
                  process
                </li>
              </ul>
            </div>
            <div className="divider divider-horizontal basis-1/5">
              February 2022 - Present
            </div>
            <div className="grid h-20 basis-2/5 card  rounded-box place-items-center "></div>
          </div>
          <div className="flex flex-row w-full">
            <div className="grid h-20 basis-2/5 card  rounded-box place-items-center "></div>
            <div className="divider divider-horizontal basis-1/5">
              February 2020 - January 2022
            </div>
            <div className="grid w-96 p-8 basis-2/5 card bg-lightBlue rounded-box place-items-center">
              <ul>
                <li className="font-bold">TECHNICAL SUPPORT(TEAM LEADER)</li>
                <li className="mb-2">
                  Jakarta Smart City (Diskominfotik DKI JAKARTA)
                </li>
                <li>
                  • Collect and document (inventory): complaints or bugs related
                  to applications to be coordinated with the Technical Team
                  (Developer/Programmer); as well as requests submitted by the
                  applications' users to be coordinated with the Project/Product
                  Manager and System Analyst
                </li>
                <li>
                  • Perform routine checking of application, such as checking
                  API integration using Postman, and ensuring the application is
                  operating properly
                </li>
                <li>
                  • Arrange socialization/technical guidance/training to users
                  about application utilization, including preparing
                  plans/curriculum and compiling supporting instruments
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row w-full">
            <div className="grid w-96 p-5 basis-2/5 card bg-lightBlue rounded-box place-items-center">
              <ul>
                <li className="font-bold">ENGINEER ON SITE</li>
                <li className="mb-2">PT. Innovez Singapore </li>
                <li>• Maintaning hardware and software system on site</li>
                <li>
                  • Transfer knowledge about how to use webapp to non IT
                  users(ship captain)
                </li>
                <li>• Report bugs to developers</li>
                <li>• Daily report log</li>
                <li>• Implement new digitalization shipping system</li>
              </ul>
            </div>
            <div className="divider divider-horizontal basis-1/5">
              2018 - 2019
            </div>
            <div className="grid h-20 basis-2/5 card  rounded-box place-items-center "></div>
          </div>
          <div className="flex flex-row w-full">
            <div className="grid h-20 basis-2/5 card  rounded-box place-items-center "></div>
            <div className="divider divider-horizontal basis-1/5">
              2017 - 2018
            </div>
            <div className="grid p-5 w-96 basis-2/5 card bg-lightBlue rounded-box place-items-center">
              <ul>
                <li className="font-bold">PLB/KM</li>
                <li className="mb-2">PT. Transjakarta BUMD </li>
                <li>• Operating traffic software bus</li>
                <li>• Maintenance time arriving and deploy at bus stop</li>
                <li>
                  • High discipline with time sensitive shifting working hour
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className="m-10 mt-20 mb-20 p-14 bg-lightBlue shadow-2xl rounded-2xl text-hardBlue font-bold text-5xl text-center">
          Certifications
        </div>
        <section className="flex flex-row w-full">
          <div className="basis-1/4 flex justify-center items-center flex-col h-96">
            <img className="mask mask-diamond w-48" src={fotoHero} />
            <div className="m-8"></div>
            <ul>
              <li className="font-bold">
                Oracle : SQL and Extended SQL with Programming Feature (Issued
                by Gunadharma University 2016).
              </li>
            </ul>
          </div>

          <div className="basis-1/4 flex justify-center items-center flex-col">
            <img className="mask mask-diamond w-48" src={fotoHero} />
            <div className="m-6"></div>
            <ul>
              <li className="font-bold">
                Penelitian Ilmiah : Game Berbasis Android Menggunakan Unity
                dengan Bahasa pemrograman C# (Issued by Gunadharma University
                Jan 2016).
              </li>
            </ul>
          </div>

          <div className="basis-1/4 flex justify-center items-center flex-col">
            <img className="mask mask-diamond w-48" src={fotoHero} />
            <div className="m-8"></div>
            <ul>
              <li className="font-bold">
                Java Programming language Fundamental workshop (Issued by
                Gunadharma University 2016).
              </li>
            </ul>
          </div>

          <div className="basis-1/4 flex justify-center items-center flex-col">
            <img className="mask mask-diamond w-48" src={fotoHero} />
            <div className="m-8"></div>
            <ul>
              <li className="font-bold">
                Alterra Immersive Program Frontend Engineering (Issued by
                Alterra Bootcamp 2022)
              </li>
            </ul>
          </div>
        </section>
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
