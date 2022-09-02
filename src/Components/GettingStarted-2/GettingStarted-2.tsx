import React, { useState } from "react";
import "./GettingStarted-2.css";
function GettingStartedTwo() {
  const [confirmation, setConfirmation] = useState<string>("");
  const [currency, setCurrency] = useState<string>("");

  const handleCheckChange = (e: any) => {
    if (confirmation === "") {
      setConfirmation(e.target.value);
    } else {
      setConfirmation("");
    }
  };

  const updateSelection = (event: any) => {
    const { value } = event.target;
    setCurrency(value);
  };

  return (
    <div className="overall-container">
      <div className="upper-part-content">
        <h3 className="getting-started-text">Getting started</h3>
        <div className="steps">
          <p className="steps-progress-text">Step 2 of 2</p>
          <svg
            width="18"
            height="5"
            viewBox="0 0 18 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16" cy="2.5" r="2" fill="#AAAAAA" />
            <circle cx="2" cy="2.5" r="2" fill="#333333" />
          </svg>
        </div>
      </div>
      <div className="content-container">
      <StripeConnectedPopUp />
        <div className="redirection">
          <div className="back-icon">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="24"
                height="24"
                rx="3.5"
                fill="white"
                stroke="#EDEDED"
              />
              <path
                d="M14.1567 9.15137L14.3979 9.39258C14.4487 9.44336 14.4868 9.5026 14.5122 9.57031C14.5376 9.62956 14.5503 9.69727 14.5503 9.77344C14.5503 9.84961 14.5376 9.92155 14.5122 9.98926C14.4868 10.057 14.4487 10.112 14.3979 10.1543L12.2397 12.3125L14.3979 14.4707C14.4487 14.513 14.4868 14.568 14.5122 14.6357C14.5376 14.7035 14.5503 14.7754 14.5503 14.8516C14.5503 14.9277 14.5376 14.9997 14.5122 15.0674C14.4868 15.1266 14.4487 15.1816 14.3979 15.2324L14.1567 15.4736C14.106 15.5244 14.0467 15.5667 13.979 15.6006C13.9113 15.626 13.8436 15.6387 13.7759 15.6387C13.6997 15.6387 13.6278 15.626 13.5601 15.6006C13.4924 15.5667 13.4331 15.5244 13.3823 15.4736L10.6021 12.6934C10.5597 12.6426 10.5216 12.5876 10.4878 12.5283C10.4624 12.4606 10.4497 12.3887 10.4497 12.3125C10.4497 12.2363 10.4624 12.1686 10.4878 12.1094C10.5216 12.0417 10.5597 11.9824 10.6021 11.9316L13.3823 9.15137C13.4331 9.10059 13.4924 9.0625 13.5601 9.03711C13.6278 9.00326 13.6997 8.98633 13.7759 8.98633C13.8436 8.98633 13.9113 9.00326 13.979 9.03711C14.0467 9.0625 14.106 9.10059 14.1567 9.15137Z"
                fill="black"
              />
            </svg>
          </div>
          <p className="back-text">Back</p>
        </div>
        <h3 className="page-header-text">Choose Billing Currency</h3>
        <p className="description-text">
          Select the currency you want to use to bill your clients.
        </p>

        <div className="currency-alert">
          <div className="alert-icon">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 13.8125C7.89714 13.8125 8.73926 13.6432 9.52637 13.3047C10.3219 12.9661 11.0117 12.5049 11.5957 11.9209C12.1882 11.3285 12.6536 10.6344 12.9922 9.83887C13.3307 9.05176 13.5 8.20964 13.5 7.3125C13.5 6.41536 13.3307 5.57324 12.9922 4.78613C12.6536 3.99056 12.1882 3.30078 11.5957 2.7168C11.0117 2.12435 10.3219 1.65885 9.52637 1.32031C8.73926 0.981771 7.89714 0.8125 7 0.8125C6.10286 0.8125 5.26074 0.981771 4.47363 1.32031C3.67806 1.65885 2.98405 2.12435 2.3916 2.7168C1.80762 3.30078 1.34635 3.99056 1.00781 4.78613C0.669271 5.57324 0.5 6.41536 0.5 7.3125C0.5 8.20964 0.669271 9.05176 1.00781 9.83887C1.34635 10.6344 1.80762 11.3285 2.3916 11.9209C2.98405 12.5049 3.67806 12.9661 4.47363 13.3047C5.26074 13.6432 6.10286 13.8125 7 13.8125ZM6.33984 3.69434C6.33984 3.63509 6.361 3.58431 6.40332 3.54199C6.44564 3.49967 6.49642 3.47852 6.55566 3.47852H7.41895C7.47819 3.47852 7.52897 3.49967 7.57129 3.54199C7.61361 3.58431 7.63477 3.63509 7.63477 3.69434V7.89648C7.63477 7.95573 7.61361 8.00651 7.57129 8.04883C7.52897 8.09115 7.47819 8.1123 7.41895 8.1123H6.56836C6.50911 8.1123 6.45833 8.09115 6.41602 8.04883C6.3737 8.00651 6.35254 7.95573 6.35254 7.89648L6.33984 3.69434ZM7 9.05176C7.22005 9.06022 7.40625 9.14062 7.55859 9.29297C7.71094 9.44531 7.78711 9.63151 7.78711 9.85156C7.78711 10.0716 7.70671 10.2578 7.5459 10.4102C7.39355 10.5625 7.20736 10.6387 6.9873 10.6387C6.77572 10.6387 6.58952 10.5625 6.42871 10.4102C6.27637 10.2578 6.2002 10.0716 6.2002 9.85156C6.2002 9.63151 6.27637 9.44531 6.42871 9.29297C6.58952 9.13216 6.77995 9.05176 7 9.05176Z"
                fill="#FFAC14"
              />
            </svg>
          </div>
          <p className="alert-text">
            Note: Billing currency cannot be changed in the future. Please make
            sure you select the correct currency.
          </p>
        </div>

        <div className="currency-dropdown">
          <select
            className="select-control"
            name="currency"
            onChange={updateSelection}
            value={currency}
          >
            <option value={"USD"} selected>
              USD - United States Dollars
            </option>
            <option>USD - United States Dollars</option>
            <option>USD - United States Dollars</option>
          </select>
        </div>

        <div className="currency-confirmation">
          <div className="form-check">
            <label className="form-check-label">
              <input
                type="checkbox"
                className="form-check-input"
                name="confirmed"
                onChange={handleCheckChange}
                value="confirmed"
                checked={confirmation === "" ? false : true}
              />
              I am aware that I cannot change currency later
            </label>
          </div>
        </div>

        <div className="finish-setup-btn-wrapper">
          <button
            className={
              confirmation === ""
                ? "finish-setup-btn-disabled"
                : "finish-setup-btn"
            }
          >
            Finish setup
          </button>
        </div>
      </div>
    </div>
  );
}

const StripeConnectedPopUp = () => {
  return (
    <div className="success-popup">
      <div className="checkMark-icon">
        <svg
          width="31"
          height="23"
          viewBox="0 0 31 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.5898 3.29102L28.5977 1.29883C28.4609 1.16211 28.3047 1.05469 28.1289 0.976562C27.9727 0.898438 27.7969 0.859375 27.6016 0.859375C27.4062 0.859375 27.2207 0.898438 27.0449 0.976562C26.8691 1.05469 26.7129 1.16211 26.5762 1.29883L11.8398 16.0938L5.33594 9.58984C5.21875 9.45313 5.07227 9.35547 4.89648 9.29688C4.7207 9.21875 4.53516 9.17969 4.33984 9.17969C4.14453 9.17969 3.95898 9.21875 3.7832 9.29688C3.62695 9.35547 3.48047 9.45313 3.34375 9.58984L1.35156 11.582C1.21484 11.7188 1.10742 11.875 1.0293 12.0508C0.951172 12.207 0.912109 12.3828 0.912109 12.5781C0.912109 12.7734 0.951172 12.959 1.0293 13.1348C1.10742 13.3105 1.21484 13.4668 1.35156 13.6035L9.87695 22.041C10.1309 22.2949 10.4238 22.5 10.7559 22.6562C11.0879 22.793 11.4492 22.8613 11.8398 22.8613C12.2305 22.8613 12.5918 22.793 12.9238 22.6562C13.2754 22.5 13.5781 22.2949 13.832 22.041L30.5898 5.2832C30.7266 5.14648 30.8242 4.99023 30.8828 4.81445C30.9609 4.63867 31 4.45312 31 4.25781C31 4.0625 30.9609 3.88672 30.8828 3.73047C30.8242 3.55469 30.7266 3.39844 30.5898 3.26172V3.29102Z"
            fill="#18BB4B"
          />
        </svg>
      </div>
      <div className="popup-text-content">
        <p className="popup-info">Stripe account connected successfully!</p>
        <p className="time-passed">A SECOND AGO</p>
      </div>
    </div>
  );
};

export default GettingStartedTwo;
