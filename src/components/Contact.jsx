import mail_icon from "../assets/mail_icon.svg";
import location_icon from "../assets/location_icon.svg";
import call_icon from "../assets/call_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "bd37e14c-acec-4548-bbc9-9dfe860a3413");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("Message Sent Successfully");
    }
  };

  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center gap-[80px] my-[80px] mx-[170px] contact"
    >
      <div className="relative">
        <h1 className="py-0 px-[30px] text-[50px] font-bold">Get in Touch</h1>
      </div>

      <div className="flex gap-[150px] contact-section">
        <div className="flex flex-col gap-[30px] contact-left">
          <h1 className="text-[60px] font-[600] gradient-text ">Let's Talk</h1>
          <p className="w-full text-[#D8D8D8] leading-[25px]">
            "Thanks for visiting! If you're looking for someone who codes with
            dedication and learns with enthusiasm, I'd be thrilled to connect."
          </p>
          <div className="flex flex-col gap-[20px] text-[#D8D8D8] text-[22px]">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>aasthayuli2000@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+91 9576357966</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Bihar</p>
            </div>
            <div className="contact-detail">
              <a href="https://github.com/Aasthayuli?tab=repositories">
                <i class="fa-brands fa-github"></i>
                <span> &nbsp; &nbsp; GitHub</span>
              </a>
            </div>
            <div className="contact-detail">
              <a href="https://www.linkedin.com/in/aasthayuli-b72662257/">
                <i class="fa-brands fa-linkedin"></i>
                <span> &nbsp; &nbsp; Linkedin</span>
              </a>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="flex flex-col  items-start gap-[20px]"
        >
          <label htmlFor="name" className="contact-label">
            Your Name
          </label>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            className="contact-input"
          />
          <label htmlFor="name" className="contact-label">
            Your Email
          </label>
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            className="contact-input"
          />
          <label htmlFor="name" className="contact-label">
            Write your message here{" "}
          </label>
          <textarea
            name="message"
            rows={6}
            placeholder="Enter your message"
            className="w-[450px] md:w-[700px] border-none rounded-sm bg-[#32323c] text-[#a0a0a0] font-outfit text-[20px] contact-textarea"
          ></textarea>

          <button
            type="submit"
            className="contact-btn border-none text-white rounded-2xl bg-[linear-gradient(267deg,_#df8908_-5.09%,_#B415FF_106.28%)] text-[22px] py-[10px] px-[40px] mb-[50px] cursor-pointer transition-all duration-[300ms] hover:transform hover:scale-110"
          >
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
