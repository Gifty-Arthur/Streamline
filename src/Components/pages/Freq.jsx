import React from "react";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const Freq = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const questions = [
    {
      id: 1,
      question: "What is Netflix?",
      answer:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
    },
    {
      id: 2,
      question: "How much does Netflix cost?",
      answer:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from US$2.99 to US$9.99 a month. No extra costs, no contracts.",
    },
    {
      id: 3,
      question: "Where can i watch?",
      answer:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
      id: 4,
      question: "How do i cancel?",
      answer:
        "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },

    {
      id: 5,
      question: "What can i watch on Netflix?",
      answer:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },

    {
      id: 6,
      question: "Is Netflix good for Kids?",
      answer:
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    },
  ];
  return (
    <div className=" h-full bg-black p-10 ">
      <div className="">
        <h2 className="text-white mt-10 text-3xl font-bold">
          Frequently Asked Question
        </h2>
        {questions.map((q) => (
          <div key={q.id} className="mb-3 last:mb-0">
            <button
              className="w-[1174px] h-[84px] text-left text-[24px] focus:outline-none text-white  p-3 bg-[#2d2d2d] shadow-md flex justify-between item-center mt-2"
              onClick={() =>
                setActiveQuestion(activeQuestion === q.id ? null : q.id)
              }
            >
              {q.question}
              {activeQuestion === q.id ? (
                <FaMinus size={24} />
              ) : (
                <FaPlus size={24} className="" />
              )}
            </button>
            <AnimatePresence>
              {activeQuestion === q.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className=" text-white bg-[#2d2d2d] w-[1174px] font-Poppins text-[20px]  mt-0.5"
                >
                  <p>{q.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      <p className="mt-20 font-Poppins text-white text-center">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="flex gap-5 items-center justify-center mt-6">
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Email"
          className="block w-[490px] h-[56px] rounded-md border px-3 py-1.5 text-base text-white  placeholder:text-gray-400 focus:outline-1 focus:outline-white"
        />
        <button
          type="submit"
          className="w-[208px] h-[56px] bg-[#e50914] text-white font-semibold text-[24px] rounded-md hover:bg-red-700 transition"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Freq;
