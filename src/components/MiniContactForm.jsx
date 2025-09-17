import { useState } from "react";
import { useLocale } from "../config/localeContext";
import { useLocation } from "react-router-dom";
import axios from "axios";
import constantsExport from "../config/constants";
import LogoFooter from "../assets/logo/DiPlanLogo";

const API_PATH = constantsExport.API_PATH;

export default function MiniContactForm() {
  const { locale } = useLocale();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
    from: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(locale === "hr-HR" ? "Šalje se..." : "Sending...");

    const formDataWithUrl = {
      ...formData,
      from: window.location.href
    };

    try {
      const res = await axios.post(
        `${API_PATH}/api/contact-forms`,
        {
          data: formDataWithUrl,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer d2d6a6a225c72887352b2cf42aad09c0a90cfaae80e9cf5f3979766281dce45f3db23f7631af31339b0b472f9386a74de13da9568062e2221156692d77720186842c44803d46e5130660580ebd24fb326beb206d87808016fd9892e90873301e241081f57364ab0f8a556d95932c62c4e446f1acec0a1c7784190738131a523a",
          },
        }
      );

      if (res.status === 201) {
        setStatus(locale === "hr-HR" ? "✅ Poruka je uspješno poslana!" : "✅ Message sent successfully!");
        setFormData({
          name: "",
          surname: "",
          email: "",
          message: "",
          from: "",
        });
        setTimeout(() => {
          setStatus("");
        }, 3000);
      } else {
        setStatus(locale === "hr-HR" ? "❌ Slanje poruke neuspješno." : "❌ Failed to send message.");
        setTimeout(() => {
          setStatus("");
        }, 3000);
      }
    } catch (err) {
      console.error(err);
      setStatus(locale === "hr-HR" ? "⚠️ Nešto je pošlo po zlu." : "⚠️ Something went wrong.");
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <LogoFooter color={"black"} width={160} height={50} />
      <p className="font-normal uppercase text-xs text-dark-text">
        {locale === "hr-HR" ? "Ime" : "Name"}
      </p>
      <input
        type="text"
        name="name"
        placeholder={locale === "hr-HR" ? "Vaše ime" : "Your name"}
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full px-6 py-2 text-dark-text border-1 border-dark-text/10 bg-white h-[43px] rounded-[10px] mb-4 mt-2"
      />
      
      <p className="font-normal uppercase text-xs text-dark-text">
        {locale === "hr-HR" ? "Prezime" : "Surname"}
      </p>
      <input
        type="text"
        name="surname"
        placeholder={locale === "hr-HR" ? "Vaše prezime" : "Your surname"}
        value={formData.surname}
        onChange={handleChange}
        required
        className="w-full px-6 py-2 text-dark-text border-1 border-dark-text/10 bg-white h-[43px] rounded-[10px] mb-4 mt-2"
      />
      
      <p className="font-normal uppercase text-xs text-dark-text">Email</p>
      <input
        type="email"
        name="email"
        placeholder={locale === "hr-HR" ? "Vaš email" : "Your email"}
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full px-6 py-2 text-dark-text border-1 border-dark-text/10 bg-white h-[43px] rounded-[10px] mb-4 mt-2"
      />
      
      <p className="font-normal uppercase text-xs text-dark-text">
        {locale === "hr-HR" ? "Poruka" : "Message"}
      </p>
      <textarea
        name="message"
        placeholder={locale === "hr-HR" ? "Vaša poruka" : "Your message"}
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full px-6 py-2 text-dark-text border-1 border-dark-text/10 bg-white rounded-[10px] h-32 mb-8 mt-2"
      ></textarea>
      
      <button
        type="submit"
        className="bg-dark-text text-white px-4 py-2 w-full rounded-[10px] h-[43px]"
      >
        {locale === "hr-HR" ? "Pošalji" : "Send"}
      </button>
      <p className="text-center text-dark-text">{status}</p>
    </form>
  );
}