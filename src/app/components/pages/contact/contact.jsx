// @flow strict
"use client";
import { isValidEmail } from "@/app/data/email";
import axios from "axios";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

function ContactForm() {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    }

    try {
      setIsLoading(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/contact`,
        userInput
      );

      toast.success("Message sent successfully!");
      setUserInput({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative p-10 bg-gradient-to-r from-[#2a3c54] to-[#1a2b3e] text-white rounded-lg shadow-lg mt-20">
      <form onSubmit={handleSendMail} className="space-y-6">
        {/* Introductory text above the form */}
        <p className="text-sm font-normal text-left text-white mb-4">
           If you have any questions or suggestions, please feel free to reach out. I am open to any work opportunities that align with my skills and interests.
        </p>


        <div className="flex flex-col gap-2">
          <label className="text-base font-medium">Your Name:</label>
          <input
            type="text"
            value={userInput.name}
            onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
            onBlur={checkRequired}
            className="bg-[#10172d] w-full border rounded-lg border-[#353a52] focus:border-[#16f2b3] px-3 py-2 transition duration-300"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-base font-medium">Your Email:</label>
          <input
            type="email"
            value={userInput.email}
            onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
            onBlur={() => {
              checkRequired();
              setError({ ...error, email: !isValidEmail(userInput.email) });
            }}
            className="bg-[#10172d] w-full border rounded-lg border-[#353a52] focus:border-[#16f2b3] px-3 py-2 transition duration-300"
            required
          />
          {error.email && <p className="text-sm text-red-400">Please provide a valid email!</p>}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-base font-medium">Your Message:</label>
          <textarea
            value={userInput.message}
            onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
            onBlur={checkRequired}
            rows="4"
            className="bg-[#10172d] w-full border rounded-lg border-[#353a52] focus:border-[#16f2b3] px-3 py-2 transition duration-300"
            required
          />
        </div>

        {error.required && <p className="text-sm text-red-400">All fields are required!</p>}

        <button
          type="submit"
          className="w-[300px] mx-auto bg-gradient-to-r from-teal-400 to-indigo-500 text-white uppercase font-semibold tracking-wider p-3 rounded-full hover:bg-teal-400 transition-all duration-300 flex items-center gap-3 justify-center"
          disabled={isLoading}
        >
          {isLoading ? (
            <span>Sending Message...</span>
          ) : (
            <span className="flex items-center gap-2">
              Send Message
              <TbMailForward size={20} />
            </span>
          )}
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
