import { assets } from "../assets/assets";
import Title from "../components/Title";
import NewsLatterBox from "../components/NewslatterBox";
const Contact = () => {
  const contactDetails = [
    { label: "Our Store", value: "123 Main Street, Anytown, USA" },
    { label: "Email Us", value: "support@example.com" },
    { label: "Call Us", value: "+1 (555) 123-4567" },
    { label: "Business Hours", value: "Mon-Fri: 9 AM - 6 PM" },
  ];

  return (
    <section className="pt-10 border-t">
      {/* Title Section */}
      <div className="text-center text-2xl">
        <Title text1="CONTACT" text2="US" />
      </div>

      {/* Content Section */}
      <div className="my-10 flex flex-col justify-center items-center md:flex-row gap-10 mb-28">
        {/* Contact Image */}
        <img
          className="w-full md:max-w-[480px] rounded-lg shadow-lg"
          src={assets.contact_img}
          alt="Contact Us"
        />

        {/* Contact Details */}
        <div className="flex flex-col justify-center items-start gap-y-6">
          {contactDetails.map((detail, index) => (
            <article key={index} className="text-left">
              <p className="font-semibold text-xl text-gray-600">
                {detail.label}
              </p>
              <p className="text-gray-800">{detail.value}</p>
            </article>
          ))}
        </div>
      </div>
      <NewsLatterBox />
    </section>
  );
};

export default Contact;
