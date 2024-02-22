import { useEffect, useState } from "react";
import Logo from "../assets/img/logoDW.png";

export default function Navbar() {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <div className="bg-black text-white fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between container mx-auto py-3">
        <div className="flex items-center gap-4">
          <img src={Logo} alt="" />
          <p className="font-bold text-xl	">PEMILU PRESIDEN DUMBWAYS.ID</p>
        </div>

        <ul className="flex gap-4 font-semibold">
          <li className="cursor-pointer">Partai</li>
          <li>|</li>
          <li className="cursor-pointer">Paslon</li>
          <li>|</li>
          <li className="cursor-pointer">Voting</li>
          <li>
            {isLogin ? (
              <>
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="bg-white text-black rounded-full px-2 py-1"
                >
                  D
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="bg-white text-black rounded px-4 ms-5 py-1"
                >
                  Login
                </button>
              </>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
