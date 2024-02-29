import Onyet from "../assets/img/onyet.png";
import Panah from "../assets/img/panah.png";
import Panah2 from "../assets/img/panah2.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function VotePage(props: any) {
  return (
    <>
      <Navbar
        userSignIn={props.userSignIn}
        setUserSignIn={props.setUserSignIn}
      />
      <section>
        <div className="container mx-auto mt-20 bg-white">
          <h1 className="text-center text-2xl lg:text-5xl font-bold py-16">
            INFO PEMILU TERUPDATE
          </h1>
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-center lg:gap-32">
            <div className="bg-red-400 w-72 h-72 lg:w-96 lg:h-96 rounded-full"></div>

            <div className="flex flex-col gap-2 mb-10">
              <div className="bg-red-400 shadow-md rounded-xl flex justify-between gap-4 p-4 lg:px-8 items-center">
                <div className=" bg-orange-900 text-white  flex flex-col justify-center items-center p-1 py-2 lg:px-3 lg:py-4 leading-4 text-xs lg:text-xl lg:leading-6 border rounded-lg">
                  <span className="">No.</span>
                  <span className="">Paslon</span>
                  <span className="lg:text-2xl text-base font-bold">3</span>
                </div>
                <div>
                  <p className="text-xl text-stroke lg:text-5xl  text-orange-900 font-black">
                    CINTARA SURYA PALOH
                  </p>
                  <p className="text-stroke  text-orange-900 font-bold lg:text-4xl">
                    78%
                  </p>
                </div>
              </div>
              <div className="bg-red-400 shadow-md rounded-xl flex justify-between gap-4 p-4 lg:px-8 items-center">
                <div className=" bg-orange-900 text-white  flex flex-col justify-center items-center p-1 py-2 lg:px-3 lg:py-4 leading-4 text-xs lg:text-xl lg:leading-6 border rounded-lg">
                  <span className="">No.</span>
                  <span className="">Paslon</span>
                  <span className="lg:text-2xl text-base font-bold">3</span>
                </div>
                <div>
                  <p className="text-xl text-stroke lg:text-5xl  text-orange-900 font-black">
                    CINTARA SURYA PALOH
                  </p>
                  <p className="text-stroke  text-orange-900 font-bold lg:text-4xl">
                    78%
                  </p>
                </div>
              </div>
              <div className="bg-red-400 shadow-md rounded-xl flex justify-between gap-4 p-4 lg:px-8 items-center">
                <div className=" bg-orange-900 text-white  flex flex-col justify-center items-center p-1 py-2 lg:px-3 lg:py-4 leading-4 text-xs lg:text-xl lg:leading-6 border rounded-lg">
                  <span className="">No.</span>
                  <span className="">Paslon</span>
                  <span className="lg:text-2xl text-base font-bold">3</span>
                </div>
                <div>
                  <p className="text-xl text-stroke lg:text-5xl  text-orange-900 font-black">
                    CINTARA SURYA PALOH
                  </p>
                  <p className="text-stroke  text-orange-900 font-bold lg:text-4xl">
                    78%
                  </p>
                </div>
              </div>

              <p
                style={{ backgroundColor: "rgba(94, 90, 0, 1)" }}
                className="text-white text-center py-1 rounded-lg mt-10 lg:text-5xl lg:font-bold lg:py-4"
              >
                MASUKIN SUARAMU
              </p>
            </div>
          </div>
        </div>
        <div className="container relative mt-20 mx-auto flex flex-col items-center mb-20">
          <img
            className="absolute w-9  left-3 md:left-20 lg:left-32 top-[350px]"
            src={Panah}
            alt=""
          />
          <img
            className="absolute w-9  right-3 md:right-20 lg:right-32 top-[350px]"
            src={Panah2}
            alt=""
          />
          <h1 className="text-center text-2xl lg:text-5xl font-bold mb-10">
            INFO PASLON
          </h1>
          <div className="flex bg-white lg:w-[900px] w-[250px] flex-col items-center p-5 lg:p-12 rounded-2xl gap-5  shadow-lg lg:flex-row lg:justify-between">
            <img src={Onyet} className=" lg:w-80" alt="" />
            <div className="text-sm lg:text-xl flex flex-col gap-2 lg:gap-10">
              <div>
                <p className="font-bold lg:text-2xl">Nomer Urut : 1</p>
                <h1 className="text-orange-900 text-base font-bold lg:text-3xl">
                  CINTARA SURYA PALOH
                </h1>
              </div>
              <div>
                <p>Visi & Misi :</p>
                <ul className="list-disc ms-5">
                  <li>Memindahkan Indonesia ke Isekai</li>
                  <li>Nonton anime 3x sehari.</li>
                  <li>Melakukan peresapan pada budaya jepang</li>
                </ul>
              </div>
              <div>
                <p>Koalisi :</p>
                <ul className="list-disc ms-5">
                  <li>Partai persatuan Wibo.</li>
                  <li>Partai Redbull.</li>
                  <li>Partai Black Magic.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="container mx-auto">
            <p className="text-center text-red-600 md:text-3xl lg:text-5xl p-4 md:p-10 lg:p-16 font-bold ">
              PILIH BERDASARKAN GACHA TIDAK USAH SERIUS YANG PENTING TIDAK
              MELEGALKAN SLOT
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
