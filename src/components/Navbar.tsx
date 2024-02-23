import { MouseEvent, useState } from "react";
import Logo from "../assets/img/logoDW.png";
import HL from "../assets/img/hl.png";

export default function Navbar() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="bg-black fixed top-0 left-0 w-full flex items-center z-10 ">
      <div className="container mx-auto">
        <div className="flex items-center justify-between relative px-4 py-2">
          <div className="flex items-center gap-4">
            <a href="#">
              <img src={Logo} alt="" />
            </a>
            <p className="font-bold text-sm lg:text-lg text-white">
              PEMILU PRESIDEN DUMBWAYS.ID
            </p>
          </div>
          <div className="flex items-center ">
            <ul className="hidden lg:flex text-white gap-4 font-semibold">
              <li>
                <a href="">Partai</a>
              </li>
              <li>|</li>
              <li>
                <a href="">Paslon</a>
              </li>
              <li>|</li>
              <li>
                <a href="">Voting</a>
              </li>
              <li>
                {isLogin ? (
                  <>
                    <button
                      onClick={(): void => setIsLogin(!isLogin)}
                      className="bg-white text-black rounded-full px-2 py-1"
                    >
                      D
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={(): void => setIsLogin(!isLogin)}
                      className="bg-white text-black rounded px-4 ms-5 py-1"
                    >
                      Login
                    </button>
                  </>
                )}
              </li>
            </ul>
            <button className="flex items-center absolute right-4 lg:hidden">
              {isLogin ? (
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="bg-white text-black rounded-full px-2 py-1"
                >
                  D
                </button>
              ) : (
                <img
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-[30px] hover:opacity-80"
                  src={HL}
                  alt=""
                />
              )}
            </button>
            {isOpen && (
              <nav className="bg-white absolute p-5 rounded-lg shadow-lg max-w-[180px] w-full right-4 top-12">
                <ul className="block">
                  <li className="group">
                    <a
                      className="text-base font-semibold text-dark py-2 justify-center flex hover:text-red-600"
                      href="#"
                    >
                      Partai
                    </a>
                  </li>
                  <hr className="border-t-1 border-black" />
                  <li className="group">
                    <a
                      className="text-base font-semibold text-dark py-2 justify-center flex hover:text-red-600"
                      href="#"
                    >
                      Paslon
                    </a>
                  </li>
                  <hr className="border-t-1 border-black" />
                  <li className="group">
                    <a
                      className="text-base font-semibold text-dark py-2 justify-center flex hover:text-red-600"
                      href="#"
                    >
                      Voting
                    </a>
                  </li>
                  <hr className="border-t-1 border-black" />
                  <li className="group">
                    {isLogin ? (
                      <a
                        onClick={(): void => setIsLogin(!isLogin)}
                        className="text-base font-semibold text-white bg-black hover:bg-red-600 py-2 rounded-lg justify-center flex  mt-2"
                        href="#"
                      >
                        Logout
                      </a>
                    ) : (
                      <a
                        onClick={(): void => setIsLogin(!isLogin)}
                        className="text-base font-semibold text-white bg-black hover:bg-red-600 py-2 rounded-lg justify-center flex  mt-2"
                        href="#"
                      >
                        Login
                      </a>
                    )}
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
