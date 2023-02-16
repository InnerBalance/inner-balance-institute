import React from "react";
import MicroModal from "micromodal";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Contact from "../Form/Contact";
import Appointment from "../Form/Appointment";

const StyledModal = styled.div`
  .modal {
    &.is-open {
      ${tw`block`}
    }
    &[aria-hidden="false"] {
      .overlay {
        animation: mmfadeIn 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="false"] {
      .content-wrapper {
        animation: mmslideIn 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="true"] {
      .overlay {
        animation: mmfadeOut 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="true"] {
      .content-wrapper {
        animation: mmslideOut 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    .content-wrapper,
    .overlay {
      will-change: transform;
    }
  }
  @keyframes mmfadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes mmfadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes mmslideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes mmslideOut {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }
`;

const StyledTabs = styled.div`
  .react-tabs__tab-list {
    ${tw`grid grid-cols-2 gap-2 mb-6 md:mb-10 border-none`}
  }
  .react-tabs__tab {
    ${tw`text-black text-sm font-semibold py-2 px-3 md:px-4 bg-gray-50 rounded flex items-center justify-center w-full border-none transition-colors duration-300 ease-linear`}
  }
  .react-tabs__tab--selected {
    ${tw`text-white bg-primary-600`}
  }
`;

const Modal = () => {
  if (typeof window !== "undefined") {
    MicroModal.init({
      openTrigger: "data-modal-open",
      closeTrigger: "data-modal-close",
      disableFocus: true,
      disableScroll: true,
      awaitOpenAnimation: true,
      awaitCloseAnimation: true,
    });
  }

  return (
    <StyledModal>
      <div
        className="modal relative hidden z-50"
        id="modal-contact"
        aria-hidden="false"
      >
        <div
          className="overlay fixed flex items-center justify-center top-0 right-0 left-0 bottom-0 bg-black bg-opacity-40 outline-none"
          tabIndex="-1"
          data-modal-close
        >
          <div
            className="content-wrapper bg-primary-800 w-full h-screen overflow-auto max-w-[720px] ml-auto md:rounded-l-6xl"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex justify-between items-center border-b border-solid border-gray-50 border-opacity-20 pt-14 pb-4 md:py-4 px-4 md:px-6 md:pl-20 md:pr-6">
              <a href="tel:619-543-9999" className="text-white font-semibold">
                <i className="fas fa-phone-alt mr-2"></i> (619) 543-9999
              </a>
              <i
                className="close fal fa-times text-xl text-white hover:text-white cursor-pointer transition-all duration-300 ease-linear"
                data-modal-close
              ></i>
            </div>

            <div className="pt-7 px-4 md:px-6 md:px-20 pb-24">
              <header className="mb-8 text-center">
                <p className="heading-three text-white mb-0">Contact Us</p>
              </header>

              <StyledTabs>
                <Tabs>
                  <TabList>
                    <Tab>
                      <i className="fal fa-calendar text-lg mr-2"></i>
                      <span className="hidden md:inline">
                        Request Appointment
                      </span>
                    </Tab>
                    <Tab>
                      <i className="fal fa-envelope text-lg mr-2"></i>
                      General Inquiry
                    </Tab>
                  </TabList>

                  <TabPanel>
                    <Appointment />
                  </TabPanel>
                  <TabPanel>
                    <Contact />
                  </TabPanel>
                </Tabs>
              </StyledTabs>
            </div>
          </div>
        </div>
      </div>
    </StyledModal>
  );
};
export default Modal;
