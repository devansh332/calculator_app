import React from "react";

function ContactUs() {
  return (
    <section className="flex text-center w-full justify-center align-middle items-center">
      <section className=" sm:h-32 w-1/2  flex justify-center space-x-3 items-center align-middle">
        <a
          href="Tel: +917790922277"
          className="bg-white  p-2 rounded-md hover:bg-blue-400"
        >
          Call Us
        </a>
        <a
          href="mailto:support@calcu.com"
          className="bg-white  p-2 rounded-md hover:bg-red-400"
        >
          Mail Us
        </a>
      </section>
    </section>
  );
}

export default ContactUs;
