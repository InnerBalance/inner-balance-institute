import React, { Component } from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";

import ButtonSolid from "../Button/ButtonSolid";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const StyledForm = styled.div`
  .field {
    ${tw`mb-5`}
  }
  .label {
    ${tw`text-sm font-semibold text-white block mb-1`}
  }
  [multiple],
  [type="date"],
  [type="datetime-local"],
  [type="email"],
  [type="month"],
  [type="number"],
  [type="password"],
  [type="search"],
  [type="tel"],
  [type="text"],
  [type="time"],
  [type="url"],
  [type="week"],
  select,
  textarea {
    ${tw`text-sm w-full bg-gray-50 px-4 py-2.5 border border-solid border-gray-200 rounded-sm focus:border-transparent focus:outline-none focus:ring-3 focus:ring-primary-700`}
  }
  select {
    &:invalid {
      ${tw`text-opacity-60`}
    }
  }
`;

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("https://inner-balance-institute-server.vercel.app/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        from: "Appoinment",
        ...this.state,
      }),
    })
      .then(
        () =>
          (document.getElementById("contact-form-ajax-response").innerHTML =
            "Thank you for contacting us! We will get in touch with you shortly."),
        form.remove(),
        (window.dataLayer = window.dataLayer || []),
        window.dataLayer.push({
          event: "appointmentFormSubmission",
        })
      )
      .catch((error) => alert(error));
  };

  render() {
    return (
      <StyledForm>
        <div id="contact-form-ajax-response"></div>
        <form
          name="Contact"
          method="post"
          action=""
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="Contact" />
          <div hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </div>

          <div className="field">
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              id="name"
              required={true}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6 w-full">
            <div className="field">
              <label className="label" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                onChange={this.handleChange}
                id="phone"
                required={true}
              />
            </div>
            <div className="field">
              <label className="label" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                onChange={this.handleChange}
                id="email"
                required={true}
              />
            </div>
          </div>

          <div className="field">
            <fieldset>
              <legend className="label" htmlFor="preferredDays">
                What day(s) do you prefer?
              </legend>
              <div className="grid grid-cols-4 md:flex gap-2 md:gap-0 md:space-x-3 mt-1">
                <label className="relative cursor-pointer">
                  <input
                    type="radio"
                    name="preferredDays"
                    value="Any"
                    onChange={this.handleChange}
                    required={true}
                  />
                  <span className="radio-custom">Any</span>
                </label>

                <label className="relative cursor-pointer">
                  <input
                    type="radio"
                    name="preferredDays"
                    value="Monday"
                    onChange={this.handleChange}
                  />
                  <span className="radio-custom">Mon</span>
                </label>

                <label className="relative cursor-pointer">
                  <input
                    type="radio"
                    name="preferredDays"
                    value="Tuesday"
                    onChange={this.handleChange}
                  />
                  <span className="radio-custom">Tues</span>
                </label>

                <label className="relative cursor-pointer">
                  <input
                    type="radio"
                    name="preferredDays"
                    value="Wednesday"
                    onChange={this.handleChange}
                  />
                  <span className="radio-custom">Wed</span>
                </label>

                <label className="relative cursor-pointer">
                  <input
                    type="radio"
                    name="preferredDays"
                    value="Thursday"
                    onChange={this.handleChange}
                  />
                  <span className="radio-custom">Thurs</span>
                </label>

                <label className="relative cursor-pointer">
                  <input
                    type="radio"
                    name="preferredDays"
                    value="Friday"
                    onChange={this.handleChange}
                  />
                  <span className="radio-custom">Fri</span>
                </label>

                <label className="relative cursor-pointer">
                  <input
                    type="radio"
                    name="preferredDays"
                    value="Saturday"
                    onChange={this.handleChange}
                  />
                  <span className="radio-custom">Sat</span>
                </label>

                <label className="relative cursor-pointer">
                  <input
                    type="radio"
                    name="preferredDays"
                    value="Sunday"
                    onChange={this.handleChange}
                  />
                  <span className="radio-custom">Sun</span>
                </label>
              </div>
            </fieldset>
          </div>

          <div className="field">
            <fieldset>
              <legend className="label" htmlFor="preferredTime">
                What time(s) do you prefer?
              </legend>
              <div className="grid grid-cols-4 md:flex gap-2 md:gap-0 md:space-x-3 mt-1">
                <label className="relative cursor-pointer">
                  <input
                    type="radio"
                    name="preferredTime"
                    value="Any"
                    onChange={this.handleChange}
                    required={true}
                  />
                  <span className="radio-custom">Any</span>
                </label>

                <label className="relative cursor-pointer">
                  <input
                    type="radio"
                    name="preferredTime"
                    value="Morning"
                    onChange={this.handleChange}
                  />
                  <span className="radio-custom">Morning</span>
                </label>

                <label className="relative cursor-pointer">
                  <input
                    type="radio"
                    name="preferredTime"
                    value="Afternoon"
                    onChange={this.handleChange}
                  />
                  <span className="radio-custom">Afternoon</span>
                </label>

                <label className="relative cursor-pointer">
                  <input
                    type="radio"
                    name="preferredTime"
                    value="Evening"
                    onChange={this.handleChange}
                  />
                  <span className="radio-custom">Evening</span>
                </label>
              </div>
            </fieldset>
          </div>

          <div className="field">
            <label className="label" htmlFor="message">
              Tell us about what is bothering you.
            </label>
            <textarea
              className="textarea"
              name="message"
              onChange={this.handleChange}
              id="message"
              rows="4"
              required={false}
            />
          </div>

          <ButtonSolid
            as="button"
            type="submit"
            text="Send Message"
            className="w-full md:w-auto"
          />
        </form>
      </StyledForm>
    );
  }
}
