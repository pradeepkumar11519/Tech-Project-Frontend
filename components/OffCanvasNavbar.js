import React from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";
import Dropdown from "./Dropdown";
import { useContext } from "react";
import Context from "../context/Context";
import { ToastContainer, toast } from "react-toastify";
export default function OffCanvasNavbar() {
    const router = useRouter();
    const { openoffcanvas, authtoken, Logout, user } = useContext(Context);
    return (
        <div className="transition-all fade-in-out md:hidden  z-[10]">
            <div
                id="offcanvas"
                className="bg-black absolute overflow-scroll  w-[200px] left-[-200px] z-[10] h-screen transition-all fade-in-out"
            >
                <div className="">
                    <div className="m-3 justify-end flex ">
                        <div
                            iFillCloseSquare
                            onClick={openoffcanvas}
                            className="invert bg-opacity-50 cursor-pointer w-6 h-6"
                        />
                    </div>
                    <div>
                        <ul>
                            <hr />
                            <hr />
                            <hr />

                            <li className="   my-5">
                                <Link href="/">
                                    <div
                                        className={`${router.pathname === "/" ? "text-rose-500" : ""
                                            } flex justify-center text-xl transition-all fade-in-out  w-full h-full p-1 text-white`}
                                    >
                                        HOME
                                    </div>
                                </Link>
                            </li>

                            <hr />
                            <hr />
                            <hr />

                            {authtoken && user ? (
                                <>
                                    <li className="my-5" onClick={Logout}>
                                        <Link href="#">
                                            <div className="text-xl flex justify-center transition-all fade-in-out  w-full h-full p-1 text-white">
                                                LOGOUT
                                            </div>
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="   my-5">
                                        <Link href="/JoinUs">
                                            <div
                                                className={`${router.pathname === "/JoinUs" ? "text-rose-500" : ""
                                                    } flex justify-center text-xl  transition-all fade-in-out  w-full h-full p-1 text-white`}
                                            >
                                                JOIN US
                                            </div>
                                        </Link>
                                    </li>
                                </>
                            )}

                            <hr />
                            <hr />
                            <hr />
                            <li className="my-5 text-xl ">
                                <Link href="/Videos">
                                    <div
                                        className={`text-white ${router.pathname === "/Videos" ? "text-rose-500" : ""
                                            } flex justify-center`}
                                    >
                                        VIDEOS
                                    </div>
                                </Link>
                            </li>
                            <hr />
                            <hr />
                            <hr />
                            <li className="my-5 text-xl ">
                                <Link href="/Shop">
                                    <div
                                        className={`text-white ${router.pathname === "/Shop" ? "text-rose-500" : ""
                                            } flex justify-center`}
                                    >
                                        SHOP
                                    </div>
                                </Link>
                            </li>
                            <hr />
                            <hr />
                            <hr />
                            <button disbaled={!user} className="my-5 text-xl ">
                                <Link
                                    href={`/Shop/YourOrders/${user?.username}/${user?.email}`}
                                >
                                    <div
                                        className={`text-white ${router.pathname ===
                                                "/Shop/YourOrders/" + user?.username + "/" + user?.email
                                                ? "text-rose-500"
                                                : ""
                                            } flex justify-center`}
                                    >
                                        YOUR ORDERS
                                    </div>
                                </Link>
                            </button>
                            <hr />
                            <hr />
                            <hr />
                            <button disbaled={!user} className="my-5 text-xl ">
                                <Link href={`/Shop/Kart/User/${user?.username}`}>
                                    <div
                                        className={`text-white ${router.pathname === "/Shop/Kart/User/" + user?.username
                                                ? "text-rose-500"
                                                : ""
                                            } flex justify-center`}
                                    >
                                        YOUR CART
                                    </div>
                                </Link>
                            </button>
                            <hr />
                            <hr />
                            <hr />
                            <li className="my-5 text-xl ">
                                <Link href="/ChatRoom">
                                    <div
                                        className={`text-white ${router.pathname === "/ChatRoom" ? "text-rose-500" : ""
                                            } flex justify-center`}
                                    >
                                        CHATROOM
                                    </div>
                                </Link>
                            </li>
                            <hr />
                            <hr />
                            <hr />
                        </ul>
                    </div>
                </div>
            </div>
            <style jsx>{``}</style>
        </div>
    );
}
