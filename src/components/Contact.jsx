import React from "react";
// import { name } from "./../../node_modules/tar/dist/esm/types";
import { toast } from "react-toastify";

const Contact = () => {
   const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b660d8d1-bede-4bfd-ad17-669f9fabd7a1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      // alert("Form Submitted Successfully")
      toast.success("Form subbmitted successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      // alert(data.message)
      toast.error(data.message)
      setResult("");
    }
  };

  return (
    <div
      className=" py-20 p-6 lg:px-32 my-20 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact
        <span className="underline underline-offset-4  decoration-1 under font-light ">
          With us
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Ready to move ? Lets Build Something Together
      </p>
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-600 pt-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
              type="text"
              name="Name"
              placeholder="Your Good Name"
              required
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
            />
          </div>
        </div>
        <div className="my-6 text-left">
          Message
          <textarea
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
            name="Message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button className="bg-blue-600 text-white py-2 px-12 mb-10 rounded cursor-pointer"> {result?result:"Send Message"}</button>
      </form>
    </div>
  );
};

export default Contact;
