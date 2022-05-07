import React, { useRef, useState } from 'react';
import Router from 'next/router';
import emailjs from '@emailjs/browser';
import HCaptcha from '@hcaptcha/react-hcaptcha';

export default function ContactForm() {
  const form = useRef();

  //hCaptcha
  const [email, setEmail] = useState('');
  const captchaRef = useRef(null);

  const handleChange = ({ target: { value } }) => {
    setEmail(value);
  };

  // const handleSubmit = (event) => {
  //   // https://docs.hcaptcha.com/configuration#jsapi
  //   event.preventDefault();
  //   captchaRef.current.execute();
  // };

  const onHCaptchaChange = async (captchaCode) => {
    // If the hCaptcha code is null or undefined indicating that
    // the hCaptcha was expired then return early
    if (!captchaCode) {
      return;
    }
    try {
      const response = await fetch("/api/verifyHCaptcha", {
        method: "POST",
        body: JSON.stringify({ email, captcha: captchaCode }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        // If the response is ok than show the success alert
        alert("Email sent successfully");
      } else {
        // Else throw an error with the message returned
        // from the API
        const error = await response.json();
        throw new Error(error.message)
      }
    } catch (error) {
      alert(error?.message || "Something went wrong");
    } finally {
      // Reset the hCaptcha when the request has failed or succeeeded
      // so that it can be executed again if user submits another email.
      setEmail("");
    }
  };

  const onExpire = () => {
    console.log('hCaptcha Token Expired');
  };

  const onError = err => {
    console.log(`hCaptcha Error: ${err}`);
  };

  //emailjs
  const sendEmail = e => {
    e.preventDefault();
    captchaRef.current.execute();
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
        .then(
          result => {
            console.log(result.text);
            Router.reload();
          },
          error => {
            console.log(error.text);
          }
        );
  };


  return (
    <form method="post" action="/api/verifyHCaptcha" onSubmit={sendEmail} ref={form}>
      <div className="field half first">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" autoComplete="name" required />
      </div>
      <div className="field half">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}"
          onChange={handleChange}
        />
      </div>
      <div className="field half first">
        <label htmlFor="tel">Phone Number</label>
        <input type="tel" name="tel" id="phone" required />
      </div>
      <div className="field half desktop-layout" style={{ padding: 25 }}>
        <span className="">&nbsp;&nbsp;</span>
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          rows="4"
          minLength="40"
          required
        ></textarea>
      </div>
      <HCaptcha
        sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY}
        onVerify={onHCaptchaChange}
        onError={onError}
        onExpire={onExpire}
        ref={captchaRef}
        theme="dark"
      />
      <ul className="actions">
        <li>
          <input type="submit" value="Send Message" className="special"/>
        </li>
        <li>
          <input type="reset" value="Reset" />
        </li>
      </ul>
    </form>
  );
};
