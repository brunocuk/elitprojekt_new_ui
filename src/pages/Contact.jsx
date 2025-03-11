import { InlineWidget } from "react-calendly";
import MainButton from "../components/MainButton"

const Contact = () => {
  return (
    <div className="dark:bg-darkBackground bg-textColorDark md:px-24 lg:px-32 xl:px-44 px-4 md:pt-16 pt-6 flex flex-col overflow-hidden">
      <h1 className="dark:text-textColorDark text-darkBackground font-bold md:text-[79px] text-[40px] leading-tight tracking-wide">
        Drop Us a Line and Let's Make Digital Magic!
      </h1>
      <p className="satoshi font-normal md:text-[27px] text-[17px] max-w-[1079px] dark:text-textColorDark text-darkBackground pt-4">
        Have questions or need assistance? Our team at Progmatiq, your partner
        in crime for digital innovation, is ready to support you. Whether you're
        interested in our services or have specific queries, feel free to reach
        out. We're committed to delivering exceptional customer service and
        solutions tailored to your needs.
      </p>

      <div className="flex md:flex-row flex-col items-start justify-between md:pt-24 pt-12 md:gap-44 gap-12">
        <div className="flex flex-col gap-6">
          <p className="satoshi font-normal md:text-[27px] text-[17px] dark:text-textColorDark text-darkBackground">
            Email:
          </p>
          <h2 className="dark:text-textColorDark text-darkBackground font-bold md:text-[36px] text-[24px] leading-tight tracking-wide -mt-3">
            hello@progmatiq.co
          </h2>
          <p className="satoshi font-normal md:text-[27px] text-[17px] dark:text-textColorDark text-darkBackground">
            Phone:
          </p>
          <h2 className="dark:text-textColorDark text-darkBackground font-bold md:text-[36px] text-[24px] leading-tight tracking-wide -mt-3">
            +385 91 3333 447
          </h2>
          <p className="satoshi font-normal md:text-[27px] text-[17px] dark:text-textColorDark text-darkBackground">
            Address:
          </p>
          <h2 className="dark:text-textColorDark text-darkBackground font-bold md:text-[36px] text-[24px] max-w-[300px] leading-tight tracking-wide -mt-3">
            Slavonska avenija 1c, 10000 Zagreb Croatia
          </h2>
          <p className="satoshi font-normal md:text-[27px] text-[17px] dark:text-textColorDark text-darkBackground">
            Business Hours:
          </p>
          <h2 className="dark:text-textColorDark text-darkBackground font-bold md:text-[36px] text-[24px] max-w-[350px] leading-tight tracking-wide -mt-3">
            Monday - Friday: 09:00 - 17:00
          </h2>
        </div>

        <div className="flex flex-col gap-6 w-full">
          <div className="flex items-center justify-between gap-6">
            <input className="w-full rounded-[12px] h-14 bg-textColorDark text-darkBackground font-bold pl-6 placeholder:text-darkBackground" placeholder="First Name" />
            <input className="w-full rounded-[12px] h-14 bg-textColorDark text-darkBackground font-bold pl-6 placeholder:text-darkBackground" placeholder="Last Name" />
          </div>
          <input className="w-full rounded-[12px] h-14 bg-textColorDark text-darkBackground font-bold pl-6 placeholder:text-darkBackground" placeholder="Email" />
          <input className="w-full rounded-[12px] h-14 bg-textColorDark text-darkBackground font-bold pl-6 placeholder:text-darkBackground" placeholder="Phone" />
          <textarea rows={15} className="w-full rounded-[12px] h-[270px] bg-textColorDark text-darkBackground font-bold pl-6 pt-6 placeholder:text-darkBackground" placeholder="Message" />
          <MainButton text={"Submit"} />
        </div>
      </div>
      <h1 className="dark:text-textColorDark text-darkBackground font-bold md:text-[79px] text-[40px] leading-tight tracking-wide pt-24">
       Or simply schedule a consultation!
      </h1>
      <InlineWidget
        url="https://calendly.com/bruno-cukic-progmatiq/progmatiq-consultation"
        styles={{ minWidth: "320px", height: "700px" }}
        pageSettings={{
          backgroundColor: "050505",
          textColor: "f5f5f5",
          primaryColor: "bffb00",
        }}
      />
    </div>
  );
};

export default Contact;
