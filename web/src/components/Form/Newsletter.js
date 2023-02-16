// import React, { Component } from "react";
// import styled from "@emotion/styled";
// // import tw from "twin.macro";

// import ButtonSolid from "../Button/ButtonSolid";

// function encode(data) {
//   return Object.keys(data)
//     .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//     .join("&");
// }

// const StyledForm = styled.div``;

// export default class Form extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { isValidated: false };
//   }

//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     fetch("/", {
//       method: "POST",
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: encode({
//         "form-name": form.getAttribute("name"),
//         ...this.state,
//       }),
//     })
//       .then(
//         () =>
//           (document.getElementById("newsletter-form-ajax-response").innerHTML =
//             "Thank you for subscribing!"),
//         form.remove(),
//         (window.dataLayer = window.dataLayer || []),
//         window.dataLayer.push({
//           event: "newsletterFormSubmission",
//         })
//       )
//       .catch((error) => alert(error));
//   };

//   render() {
//     return (
//       <StyledForm>
//         <div id="newsletter-form-ajax-response" className="text-white"></div>
//         <form
//           name="Newsletter"
//           method="post"
//           action=""
//           data-netlify="true"
//           data-netlify-honeypot="bot-field"
//           onSubmit={this.handleSubmit}
//         >
//           {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
//           <input type="hidden" name="form-name" value="Newsletter" />
//           <div hidden>
//             <label>
//               Don’t fill this out:{" "}
//               <input name="bot-field" onBlur={this.handleChange} />
//             </label>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-4 gap-y-4 mb-6">
//             <div className="field">
//               <label className="label hidden" htmlFor="name">
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 onChange={this.handleChange}
//                 id="name"
//                 placeholder="Your Name"
//                 required={true}
//                 className="w-full p-3 h-[45px] rounded text-sm font-semibold"
//               />
//             </div>
//             <div className="field">
//               <label className="label hidden" htmlFor="email">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 onChange={this.handleChange}
//                 id="email"
//                 placeholder="Your Email"
//                 required={true}
//                 className="w-full p-3 h-[45px] rounded text-sm font-semibold"
//               />
//             </div>
//           </div>
//           <ButtonSolid
//             as="button"
//             type="submit"
//             darkmode={true}
//             text="Subscribe"
//           />
//         </form>
//       </StyledForm>
//     );
//   }
// }
