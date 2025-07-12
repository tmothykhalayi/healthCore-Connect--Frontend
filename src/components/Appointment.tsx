import { Link } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";

const Appointment = () => {
  return (
    <section className="py-8 px-4 flex flex-col items-center gap-y-4 bg-purple-300 text-purple-950 text-center md:py-24 lg:gap-y-8 [&>*]:w-fit">
      <h4 className="text-4xl font-semibold">
        Request your{" "}
        <span className="font-playfair-display text-white italic">
          appointment
        </span>
        <br />
        today
      </h4>

      <p className="max-w-[60%]">
        Ready to prioritize your health? Schedule an appointment with one of our
        experienced healthcare professionals today.
      </p>

      <Link
        to="/contact"
        className="py-4 px-8 flex items-center gap-x-4 bg-teal-500 font-medium text-white rounded-2xl lg:hover:bg-teal-600 ease-in-out duration-200 active:scale-95"
      >
        Schedule an appointment <IoArrowForward className="text-2xl" />
      </Link>
    </section>
  );
};

export default Appointment;
