"use client"
import React from "react";

const AboutIEEE: React.FC = () => {
  return (
    <div className="bg-sky-700 px-4 rounded-md pb-8" id="membership">
      <div style={{ margin: "0 1%" }}>
        <div>
          <div className="flex text-2xl font-semibold text-slate-50 py-4 justify-center aboutHead">
            About IEEE
          </div>
          <p className="text-lg text-justify font-normal text-slate-50 px-1 pb-4 text-justify aboutText">
            IEEE is the world's largest professional association dedicated to
            advancing technological innovation and excellence for the benefit of
            humanity. When you join IEEE, you join a community of over 425,000
            technology and engineering professionals united by a common desire
            to continuously learn, interact, collaborate, and innovate.
          </p>
        </div>
        <div className="sm:flex mt-8">
          <div className="bg-sky-900 m-3" style={{ borderRadius: "2%" }}>
            <div className="text-3xl font-semibold text-slate-50 p-4 memHead">
              IEEE Membership
            </div>
            <p className="text-lg font-normal text-slate-50 px-4 text-justify memText">
              To join this community of over 425,000 technology and engineering
              professionals united by a common desire to continuously learn,
              interact, collaborate, and innovate, visit ieee/membership and
              obtain your membership at the earliest.
            </p>
            <a
              href="https://www.ieee.org/membership/join/index.html?utm_source=button_text&utm_medium=lp-membership&utm_campaign=join"
              style={{ textDecoration: "none" }}
            >
              <div className="flex justify-end button-cont">
                <button className="py-0.5 px-4 bg-[#E87722] hover:bg-red-500 text-slate-100 text-xl font-medium rounded-2xl mr-4 mt-4 mb-3 cursor-pointer">
                  Join us
                </button>
              </div>
            </a>
          </div>
          <div
            className="bg-sky-900 sm:ml-6 m-3"
            style={{ borderRadius: "2%" }}
          >
            <div className="text-3xl font-semibold text-slate-50 p-4 memHead">
              IEEE Societies
            </div>
            <p className="text-lg font-normal text-slate-50 px-4 pb-4 text-justify memText">
              IEEE Society members stay technically current, network with
              colleagues locally and abroad, and collaborate on research and
              projects with leading experts - all while taking advantage of
              specialized opportunities. To know about the various IEEE
              societies visit ieee/societies.
            </p>
            <a
              href="https://www.ieee.org/communities/societies/index.html"
              style={{ textDecoration: "none" }}
            >
              <div className="flex justify-end button-cont">
                <button className="py-0.5 px-4 bg-[#E87722] hover:bg-red-500 text-slate-100 text-xl font-medium rounded-2xl mr-4 mb-3 cursor-pointer">
                  Explore
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media screen and (max-width: 500px) {
          .aboutHead {
            font-size: 20px;
          }
          .aboutText {
            font-size: 14px;
            margin: 0px;
          }
          .memText {
            font-size: 14px;
            margin: 0px;
          }
          .memHead {
            font-size: 20px;
          }
        }
        @media screen and (max-width: 736px) {
          button {
            font-size: 14px;
          }
          .button-cont {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutIEEE;
