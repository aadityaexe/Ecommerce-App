import { assets } from "../assets/assets";
import NewsLatterBox from "../components/NewsLatterBox";
import Title from "../components/Title";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className=" my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full max-w-[450px]" src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at
            mollitia exercitationem explicabo amet dolore quibusdam, tempore
            accusantium delectus fugit minus saepe eveniet quia ipsa maxime hic,
            reprehenderit incidunt. Animi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            itaque accusamus reiciendis! Tenetur eligendi eaque, illo incidunt
            eveniet, assumenda fuga veritatis vitae id vero numquam commodi
            temporibus nemo, esse earum?
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab mollitia
            nostrum atque cupiditate et perspiciatis cumque, error fuga
            provident sapiente, accusamus deserunt consequuntur voluptatem quod.
            Dicta dolor quia debitis pariatur.
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm  mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            iusto quis obcaecati! Error corrupti porro rerum ducimus officiis ea
            fugit natus fugiat minima quae sapiente, nobis id numquam ratione
            impedit.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Conveience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            iusto quis obcaecati! Error corrupti porro rerum ducimus officiis ea
            fugit natus fugiat minima quae sapiente, nobis id numquam ratione
            impedit.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            iusto quis obcaecati! Error corrupti porro rerum ducimus officiis ea
            fugit natus fugiat minima quae sapiente, nobis id numquam ratione
            impedit.
          </p>
        </div>
      </div>
      <NewsLatterBox />
    </div>
  );
};

export default About;
