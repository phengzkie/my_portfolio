import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

function Contact() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [subject, setSubject] = useState("");
  // const [message, setMessage] = useState("");
  // const [loading, setLoading] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    //setLoading(true);

    emailjs.sendForm('gmail', 'email_template', e.target, 'user_zEAHIYIwoGYaXo4isa6oY')
      .then((result) => {
        alert('Message has been submitted');
      }, (error) => {
      console.log(error.text);
      });
      e.target.reset();
  };
  

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1><span>Get In Touch.</span></h1>
        </div>

        <div className="ten columns">
          <p className="lead">If my skills and credentials are fit on your working needs, feel free to contact me.</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <form action="" method="POST" id="contactForm" name="contactForm" onSubmit={handleSubmit}>
            <fieldset>
              <div>
                <label htmlFor="name">Name <span className="required">*</span></label>
                <input type="text" size="35" id="name" name="name" />
              </div>

              <div>
                <label htmlFor="email">Email <span className="required">*</span></label>
                <input type="email" defaultValue="" size="35" id="email" name="email" />
              </div>

              <div>
                <label htmlFor="subject">Subject</label>
                <input type="text" defaultValue="" size="35" id="subject" name="subject" />
              </div>

              <div>
                <label htmlFor="message">Message <span className="required">*</span></label>
                <textarea cols="50" rows="15" id="message" name="message"></textarea>
              </div>

              <div>
                <button className="submit">Submit</button>
                <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span>
              </div>
            </fieldset>
          </form>

          {/* <div id="message-warning"> Error boy</div>
          <div id="message-success">
            <i className="fa fa-check"></i>Your message was sent, thank you!<br />
          </div> */}
        </div>


        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Address and Phone</h4>
            <p className="address">
              Alfie Osayan<br />
              Muntinlupa City, Metro Manila 1770<br />
              <span>+639455870014</span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Contact
