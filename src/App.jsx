import DataImage from "./data";
import { listTools, listProyek } from "./data";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 pt-10 items-center xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          {/* <div className="flex items-center gap-3 mb-6 bg-zinc-600 w-fit p-4 rounded-2xl">
            <img src={DataImage.Aby} alt="gambar" className="w-10 rounded-md" />
            <q>satu dua tiga empat lima</q>
          </div> */}
          <h1 className="text-5xl/tight font-bold mb-6">
            Hi, I'm Syafrillah Astro
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            I have an interest in Programming and Designer, especially in
            Website creation and Design such as Posters, Pamphlets and Banners.
          </p>
          <div className=" flex items-center sm:gap-4 gap-2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/drive/folders/1dx-5ZkhYvbMkBmYxMrQW3Vp3rT05HCW5?usp=drive_link"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-500"
            >
              Download CV <i className="ri-download-fill"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.Aby}
          alt="gambar"
          className="w-[400px] md:ml-auto rounded-4xl animate__animated animate__fadeInUp animate__delay-4s"
          loading="lazy"
        />
      </div>

      {/* tentang */}
      <div className="mt-32 py-10" id="tentang">
        <div
          className="xl:w-2/3 lg:w3/4 w-full mx-auto p-7 bg bg-zinc-800 rounded-lg"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <p className="text-base/loose mb-10">
            My name is Syafrillah Astro Heriadi, and I am an undergraduate
            student of Informatics Engineering with a great interest in web
            development. I am familiar with various technologies, such as HTML,
            Tailwind CSS, JavaScript, PHP, Laravel, and Laragon, and I use them
            to build interactive and functional websites. Additionally, I am
            interested in graphic design. I enjoy creating logos and posters, as
            well as attractive web interface designs.
          </p>
          {/* <div>
            <img src="" alt="" />
          </div> */}
        </div>
      </div>
      <div className="tools mt-32">
        <h1
          className="text-4xl/snug font-bold mb-4"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Tools
        </h1>
        <p
          className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Below are some of the tools I use to create websites and designs.
        </p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listTools.map((tool) => (
            <div
              className="group flex items-center gap-2  p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
              key={tool.id}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={tool.dad}
              data-aos-once="true"
            >
              <img
                src={tool.gambar}
                alt="tools image"
                className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                loading="lazy"
              />
              <div>
                <h4 className="font-bold">{tool.nama}</h4>
                <p className="opacity-50">{tool.ket}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* tentnag */}

      {/* proyek */}
      <div className="proyek mt-32 py-10" id="proyek">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Project
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Below are some of the projects I created.
        </p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="bg-zinc-800 rounded-md p-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad}
              data-aos-once="true"
            >
              <img src={proyek.gambar} alt="proyek image" loading="lazy" />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 border border-zinc-500 rounded-md font-semibold bg-zinc-600"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mt-8 text-center">
                {proyek.link ? (
                  <a
                    className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600"
                    href={proyek.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View code
                  </a>
                ) : (
                  <p className="bg-zinc-600 p-3 rounded-lg border border-zinc-500 text-white">
                    Development
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* proyek */}

      {/* kontak */}
      <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1
          className="text-4xl mb-2 font-bold text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Contact
        </h1>
        <p
          className="text-base/loose text-center mb-10 opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Let's connect!
        </p>
        <form
          action="https://formsubmit.co/syafrillahastro@gmail.com"
          method="POST"
          className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
          autoComplete="off"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once="true"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Name</label>
              <input
                type="text"
                name="nama"
                placeholder="name..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="email...."
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">
                Message
              </label>
              <textarea
                name="pesan"
                id="pesan"
                cols="45"
                rows="7"
                placeholder="message..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600"
              >
                send message
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* kontak */}
    </>
  );
}

export default App;
