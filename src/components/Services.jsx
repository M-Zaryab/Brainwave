import { check, service1, service2, service3 } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import Generating from "./Generating";
import Heading from "./Heading";
import Section from "./Section";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Generative AI made for creators"
          text="Brainwave unloack the potential of AI-powered applications"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center justify-center h-[39rem] mb-5 p-8 border  border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute h-full w-full top-0 left-0  pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="h-full w-full object-cover mb:object-right"
                width={800}
                height={730}
                src={service1}
                alt="Smartest AI"
              />
            </div>

            <div className=" relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Smartest AI</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Brainwave unloack the potential of AI-powered applications
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, i) => (
                  <li
                    className="flex items-start py-4 border-t border-n-6"
                    key={i}
                  >
                    <img
                      width={24}
                      height={24}
                      className=""
                      src={check}
                      alt=""
                    />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className="absolute bottom-4 left-4 right-4 translate-x-10 border border-n-1/10 lg:w-[60%] lg:m-auto" />
          </div>

          <div className="relative grid gap-5 z-1 lg:grid-cols-2">
            {/* Grid-1 */}
            <div className="relative border border-n-1/10 min-h-[39rem] rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  width={630}
                  height={750}
                  className="h-full w-full object-cover "
                  src={service2}
                  alt="service-2"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-10 bg-gradient-to-b from-n-8/0 to-n-8/90">
                <h4 className="h4 mb-4">Photo Editing</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Automatically enhance your photos using our AI app&apos;s
                  photo editing feature. Try it now!
                </p>
              </div>

              <PhotoChatMessage />
            </div>
            {/* Grid-2 */}
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Video Generation</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  The world&apos;s most powerful AI photo and video art
                  generation engine. What will you create?
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((icon) => (
                    <li
                      key={icon.index}
                      className={` flex items-center justify-center ${
                        icon.index === 2
                          ? "h-[3rem] w-[3rem] bg-conic-gradient p-0.25 rounded-2xl md:h-[4.5rem] md:w-[4.5rem]"
                          : "bg-n-6 h-10 w-10 md:h-15 md:w-15 rounded-2xl"
                      }`}
                    >
                      <div
                        className={` ${
                          icon.index === 2
                            ? "bg-n-7 w-full h-full flex justify-center items-center rounded-[1rem]"
                            : ""
                        }`}
                      >
                        <img src={icon.src} alt="" height={24} width={24} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  className="h-full w-full object-cover"
                  width={520}
                  height={400}
                  src={service3}
                  alt="service-3"
                />
                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
