import React from "react";
import { RefreshCw } from "lucide-react";
import RajeshSirImage from "../assets/RajeshSir_image.jpg";

const Testimonials = () => {
  return (
    <div className="mt-5 p-3 w-[25%]  m-auto">
      <div className="flex gap-x-3">
        <div >
          <img
            src={RajeshSirImage}
            alt="RajeshSirImage"
            className="w-[90px] rounded-full"
          />
        </div>

        <div className=" mt-5 font-semibold opacity-50 font-serif">
            <div className="text-xl">
              Prof.Rajesh Biradar
            </div>
            <div>
              Master in Physics
            </div>
        </div>


      </div>
    </div>
  );
};

export default Testimonials;
