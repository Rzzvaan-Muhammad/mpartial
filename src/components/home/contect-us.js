import React, { useState } from "react";
import _ from "lodash";

import Image from "../image";

const ContectUS = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState({});
  const [state, setState] = React.useState({
    callback: "not fired",
    value: "",
    expired: false,
  });

  const _reCaptchaRef = React.createRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    // if (!validate()) return;

    // let body = new FormData(body);
    // body.append("name", name);
    // body.append("email", email);
    // body.append("message", message);

    // fetch("https://api.shopbizservices.com/index.php", {
    //   method: "POST",
    //   mode: "no-cors",
    //   "Access-Control-Allow-Origin": "*",
    //   body,
    // })
    //   .then(({}) => {
    //     setEmail("");
    //     setMessage("");
    //     setName("");
    //     Swal.fire({
    //       title: "Thank You",
    //       text: "We will contact you soon.",
    //       icon: "success",
    //       confirmButtonText: "Okay",
    //     });
    //   })
    //   .catch(({}) => {
    //     Swal.fire({
    //       title: "Error",
    //       text: "Something went wrong at our end. Please try again.",
    //       icon: "error",
    //       confirmButtonText: "Okay",
    //     });
    //   });
  };

  const validate = () => {
    const errors = {};
    if (_.isEmpty(name)) errors.name = "name can not be empty";
    if (!email.includes("@")) errors.email = "Please enter a valid email";
    if (_.isEmpty(email)) errors.email = "email can not be empty";
    if (_.isEmpty(message)) errors.message = "name can not be empty";
    if (_.isEmpty(state.value))
      errors.recaptcha = "please verify that you are not a robot";
    setError(errors);
    return _.isEmpty(errors);
  };

  const remvoeError = ({ target: { name } }) => {
    setError({ ...error, [name]: "" });
  };

  const handleChange = (value) => {
    setError({ ...error, recaptcha: "" });
    setState({ value });
    if (value === null) setState({ expired: true });
  };

  const asyncScriptOnLoad = () => {
    setState({ callback: "called!" });
  };

  return (
    <React.Fragment>
      <div className="contact-us-container">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center flex-column py-4 ">
            <div className="col d-flex justify-content-center ">
              <Image className="card-icon " src="get-in-touch.png" />
            </div>
            <div className="col d-flex justify-content-center">
              <p className="main-heading ">Get In Touch</p>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <form
              className=" col-xs-12 col-md-6 pt-4 form"
              onSubmit={handleSubmit}
            >
              <p className="contact-us-form-heading">Send us a Message</p>
              <p for="Name" className="label">
                Your name
              </p>
              <input
                className="input"
                type="text"
                name="name"
                onFocus={remvoeError}
                value={name}
                onChange={({ target: { value } }) => setName(value)}
              />
              {error.name && (
                <span className="text-danger">
                  <small>{error.name}</small>
                </span>
              )}
              <p for="mail" className="label">
                Your email
              </p>
              <input
                className="input"
                type="email"
                name="email"
                value={email}
                onFocus={remvoeError}
                onChange={({ target: { value } }) => setEmail(value)}
              />
              {error.email && (
                <span className="text-danger">
                  <small>{error.email}</small>
                </span>
              )}
              <p for="message" className="textarea-label">
                Message
              </p>
              <textarea
                className="textarea-field"
                name="message"
                rows="5"
                value={message}
                onFocus={remvoeError}
                onChange={({ target: { value } }) => setMessage(value)}
              />
              {error.message && (
                <span className="text-danger">
                  <small>{error.message}</small>
                </span>
              )}
              <div className="form-group" style={{ marginTop: "2%" }}>
                {/* <ReCAPTCHA
                  style={{ display: "inline-block" }}
                  theme="light"
                  ref={_reCaptchaRef}
                  sitekey="6LfhPG4aAAAAAHWNFnw6gtOLlkj_QhaS44h7bs3w"
                  onChange={handleChange}
                  asyncScriptOnLoad={asyncScriptOnLoad}
                /> */}
                <br />
                {error.recaptcha && (
                  <span className="text-danger">
                    <small>{error.recaptcha}</small>
                  </span>
                )}
              </div>
              <button type="submit" className="btn send-button">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContectUS;
