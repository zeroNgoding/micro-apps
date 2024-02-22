import Image from "../assets/img/image.png";

export default function Content() {
  return (
    <>
      <div className="container mx-auto grid grid-cols-3 gap-4 my-24">
        <div
          className="col-span-2 relative h-full bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${Image})` }}
        >
          <div>
            <span className="font-semibold text-white text-lg bg-red-600 p-2 rounded-lg absolute bottom-20 left-8">
              SENIN, 03 JAN 2023
            </span>
            <span className="text-3xl font-bold text-white absolute bottom-10 left-8">
              <a href="">KPU TETAPKAN 3 MENTOR TERBAIK</a>
            </span>
            <span className="absolute bottom-4 text-white left-8 text-lg text-slate-200 font-medium">
              Super Admin
            </span>
          </div>
        </div>
        <div className="bg-white text-black">
          <div>
            <img src={Image} className="w-full" alt="" />
          </div>
          <div className="p-3  pt-5">
            <p className="font-semibold text-white text-lg bg-red-600 p-2 rounded-lg inline">
              SENIN, 03 JAN 2023
            </p>
            <p className="text-3xl font-bold my-4">
              <a href="#">KPU TETAPKAN 3 MENTOR TERBAIK</a>
            </p>
            <p className="text-lg font-medium">Super Admin</p>
          </div>
        </div>
        <div className="bg-white text-black">
          <div>
            <img src={Image} className="w-full" alt="" />
          </div>
          <div className="p-3  pt-5">
            <p className="font-semibold text-white text-lg bg-red-600 p-2 rounded-lg inline">
              SENIN, 03 JAN 2023
            </p>
            <p className="text-3xl font-bold my-4">
              <a href="#">KPU TETAPKAN 3 MENTOR TERBAIK</a>
            </p>
            <p className="text-lg font-medium">Super Admin</p>
          </div>
        </div>
        <div className="bg-white text-black">
          <div>
            <img src={Image} className="w-full" alt="" />
          </div>
          <div className="p-3  pt-5">
            <p className="font-semibold text-white text-lg bg-red-600 p-2 rounded-lg inline">
              SENIN, 03 JAN 2023
            </p>
            <p className="text-3xl font-bold my-4">
              <a href="#">KPU TETAPKAN 3 MENTOR TERBAIK</a>
            </p>
            <p className="text-lg font-medium">Super Admin</p>
          </div>
        </div>
        <div className="bg-white text-black">
          <div>
            <img src={Image} className="w-full" alt="" />
          </div>
          <div className="p-3  pt-5">
            <p className="font-semibold text-white text-lg bg-red-600 p-2 rounded-lg inline">
              SENIN, 03 JAN 2023
            </p>
            <p className="text-3xl font-bold my-4">
              <a href="#">KPU TETAPKAN 3 MENTOR TERBAIK</a>
            </p>
            <p className="text-lg font-medium">Super Admin</p>
          </div>
        </div>
      </div>
    </>
  );
}
