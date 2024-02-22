import LogoBig from "../assets/img/LogoBig.png";


export default function Footer() {
  return (
    <>
      <div className="container mx-auto">
        <p className="text-center	text-5xl px-32 py-36 font-bold bg-white">
          PILIHLAH CALON PRESIDEN MENTOR DARI REKAM JEJAK YANG JELAS PASTIKAN
          MEREKA TIDAK MEMILIKI VISI MISI UNTUK MELEGALKAN SLOT
        </p>
        <div className="bg-black text-white">
          <div className="w-3/6 flex ps-40 items-center gap-10 py-10">
            <img src={LogoBig} alt="" />
            <div>
              <p className="text-lg font-bold">DUMBWAYS.ID</p>
              <p>
                Jl. Elang IV, Sawah Lama, Kec. Ciputat, Kota Tangerang Selatan,
                Banten 15413
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="bg-black text-white py-5">
          <p className="text-center">
            Komisi Pemilihan Umum DumbWays.ID | abdullatiff 2024
          </p>
        </div>
      </div>
    </>
  );
}
