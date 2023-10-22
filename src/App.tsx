import { Star } from "@mui/icons-material";
import { useState } from "react";
import illthank from "./asset/illthank.svg";
import { Slide } from "@mui/material";

export default function App5() {
  const [step, setStep] = useState<"step1" | "step2">("step1");
  const [rating, setRating] = useState<number>(0);
  return (
    <div className=" min-h-screen justify-center flex align-middle items-center bg-black">
      <div className="bg-gradient-to-b flex flex-col from-gray-700 p-8 justify-center h-96 overflow-hidden to-gray-900 aspect-square rounded-3xl m-auto ">
        {step === "step1" && (
          <>
            <span className="mb-3 w-fit flex justify-center text-center items-center p-3 bg-gray-600 rounded-full">
              <Star className="text-orange-400 text-9xl " />
            </span>
            <h2 className="text-3xl mb-3 text-white font-bold">How did we do?</h2>
            <p className=" text-gray-400 text-xs pr-3 mb-5">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
            <div className="flex flex-row py-3
          
        justify-around w-auto">
              <RatingButton number={1} rating={rating} setRating={setRating} />
              <RatingButton number={2} rating={rating} setRating={setRating} />
              <RatingButton number={3} rating={rating} setRating={setRating} />
              <RatingButton number={4} rating={rating} setRating={setRating} />
              <RatingButton number={5} rating={rating} setRating={setRating} />
            </div>
            <button
              onClick={() => setStep("step2")}
              className="bg-orange-400 mt-6 text-white w-full py-3 rounded-3xl  hover:bg-white hover:text-orange-400"
            >
              Submit
            </button>
          </>
        )}
        {step === "step2" && <Result rating={rating} />}
      </div>
    </div>
  );
}

function RatingButton({
  number,
  setRating,
  rating,
}: {
  number: number;
  setRating: (number: number) => void;
  rating: number;
}) {
  return (
    <>
      <button
        onClick={() => setRating(number)}
        className={`${
          rating === number
            ? "text-white bg-slate-400"
            : "text-gray-300 flex bg-slate-600"
        } text-center hover:bg-orange-400 hover:text-white justify-center p-3 rounded-full`}
      >
        <span className="flex aspect-square w-6 text-center justify-center align-middle">
          {number}
        </span>
      </button>
    </>
  );
}

function Result({ rating }: { rating: number }) {
  return (
    <Slide direction="left" in={true} mountOnEnter>
      <div className="flex flex-col justify-center items-center">
        <img src={illthank} alt="thank you" className="" />
        <span
          className="my-6 text-center
      text-orange-400 text-sm bg-slate-600 justify-center py-1 px-3 rounded-full"
        >
          <span>you selected {rating} out of 5</span>
        </span>
        <h2 className="text-3xl mb-3 text-white font-bold">Thank you</h2>
        <p className=" text-gray-400 text-xs w-10/12 text-center ">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </Slide>
  );
}
