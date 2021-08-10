import { useState } from "react";
import emailjs from "emailjs-com";

import "./Contact.css";
import telephone from "../../assets/telephone.svg";

console.log(process.env.REACT_APP_USER_ID, "USER ID");
console.log(process.env.REACT_APP_SERVICE_ID, "SERVICE");
console.log(process.env.REACT_APP_ACCESS_TOKEN, "ACCESS TOKEN");
console.log(process.env.REACT_APP_TEMPLATE_ID, "TEMPLATE ID");

const Contact = () => {

    const [snackClass, setSnackClass] = useState("");
    const [snackMessage, setSnackMessage] = useState("");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [heading, setHeading] = useState("");
    const [message, setMessage] = useState("");

    const [isSending, setIsSending] = useState(false);
    const [buttonText, setButtonText] = useState("SEND");

    const nameHandler = (event) => {
        let tempString = event.target.value;
        setName(tempString);
    }

    const emailHandler = (event) => {
        let tempString = event.target.value;
        setEmail(tempString);
    }

    const headingHandler = (event) => {
        let tempString = event.target.value;
        setHeading(tempString);
    }

    const messageHandler = (event) => {
        let tempString = event.target.value;
        setMessage(tempString);
    }

    const isInputValid = (value) => {
        let isValid = false;

        isValid = value !== "";

        return isValid;
    }

    /// This function is responsible for validating the validity of the user's entered email address
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+$/;
        return emailRegex.test(email);
    }


    /// This function clears the form input fields and is called when a message has been successfully sent
    const clearInputFields = () => {
        setName("");
        setEmail("");
        setHeading("");
        setMessage("");
    }

    /// This function is responsible for showing a snackbar to the user
    const snackbarWithMessage = (message) => {

        setSnackMessage(message);

        setSnackClass("show");

        // After 3 seconds, remove the show class from DIV
        setTimeout(function () {
            setSnackClass("");
            setSnackMessage("");
        }, 3000);
    }

    const resetButtonProperties = () => {
        setButtonText("SEND");
        setIsSending(false);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();

        setButtonText("Sending...");
        setIsSending(true);

        if (!isInputValid(name) && !isInputValid(email) && !isInputValid(heading) && !isInputValid(message)) {
            snackbarWithMessage("Field cannot be empty");
            resetButtonProperties();
            return;
        }

        if (!isInputValid(name)) {
            snackbarWithMessage("Please enter your name");
            resetButtonProperties();
            return;
        }

        if (!isInputValid(email)) {
            snackbarWithMessage("Please enter your email");
            resetButtonProperties();
            return;
        }

        if (!isInputValid(heading)) {
            snackbarWithMessage("Please give your message a heading");
            resetButtonProperties();
            return;
        }

        if (!isInputValid(message)) {
            snackbarWithMessage("Please include a message");
            resetButtonProperties();
            return;
        }

        if (!validateEmail(email)) {
            snackbarWithMessage("Please enter a valid email");
            resetButtonProperties();
            return;
        }

        let emailjsTemplate = {
            name: name.trim(),
            email: email.trim(),
            heading: heading.trim(),
            message: message.trim()
        }


        emailjs.send(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, emailjsTemplate, `${process.env.REACT_APP_USER_ID}`)
            .then(result => {
                snackbarWithMessage("Message sent!");
                clearInputFields();
                resetButtonProperties();
                console.log(result);
            })
            .catch(err => {
                snackbarWithMessage("Try again! An error occurred");
                resetButtonProperties();
                console.log(err);
            });
    }

    return (
        <section className="contact-me scrollspy-example" data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" tabindex="0">
            <h1 id="contact-me">Contact Me</h1>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4 reach-padding">
                        <p className="reach-out"><span>Reach</span><span>Out!</span></p>
                        <img src={telephone} alt="An old telephone" height="80" width="80" />
                    </div>
                    <div className="col-md-8 col-sm-12">
                        <form className="form" onSubmit={formSubmitHandler} >
                            <div className="form-group">
                                <div className="row">
                                    <label className="col-sm-2 col-form-label">Name:</label>
                                    <div className="col-sm-10"><input id="sender-name" className="form-control" type="text" name="name" value={name} onChange={nameHandler} /></div>
                                </div>
                                <div className="row">
                                    <label className="col-sm-2 col-form-label">Email:</label>
                                    <div className="col-sm-10"><input id="sender-email" className="form-control" type="email" name="email" value={email} onChange={emailHandler} /></div>
                                </div>
                                <div className="row"> <label className="col-sm-2 col-form-label">Heading:</label>
                                    <div className="col-sm-10"><input id="sender-heading" className="form-control" type="text" name="heading" value={heading} onChange={headingHandler} /></div>
                                </div>
                                <label>Message:</label>
                                <textarea id="sender-message" className="form-control" name="message" cols="20" rows="5" style={{ "resize": "none" }} value={message} onChange={messageHandler}></textarea>
                            </div>
                            <button className="btn" type="submit" disabled={isSending}>{buttonText}</button>
                        </form>
                    </div>
                </div>
            </div>
            <div id="snackbar" className={snackClass}>{snackMessage}</div>
        </section>
    );
}

export default Contact;