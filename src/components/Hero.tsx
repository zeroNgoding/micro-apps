import DW from "../assets/img/DW.png";
import Kotak from "../assets/img/kotak.png";

export default function Hero() {
  return (
    <div className="container relative mx-auto mt-32 text-white rounded-3xl">
      <div
        className="rounded-lg"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(117, 6, 6, 0.75) ,rgba(92, 30, 3, 1)",
        }}
      >
        <img src={DW} className="w-80 opacity-25 p-0 m-0" alt="" />
        <img
          src={Kotak}
          className="w-64  p-0 m-0 absolute top-0 end-20"
          alt=""
        />
        <div className="flex p-0 m-0 flex-col font-bold pb-8 mt-20 p-5">
          <p className="text-6xl">SELAMAT DATANG</p>
          <p className="text-xl leading-none">
            PEMILU PRESIDEN DUMBWAYS.ID YANG JUJUR
          </p>
          <p className="text-xl leading-6">DIPILIH MELALUI SEBUAH ARTI NAMA</p>
        </div>
      </div>
    </div>
  );
}
