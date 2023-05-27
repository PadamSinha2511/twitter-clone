import Image from "next/image";
import React from "react";
import { AiOutlineHeart, AiOutlineRetweet, AiOutlineUpload } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";

const FeedCard : React.FC =()=>{
    return <div>
        <div className="border gap-3 border-gray-600 border-l-0 border-r-0 border-b-0 hover:bg-gray-800 p-4 grid grid-cols-12 transition-all cursor-pointer">
            <div className="col-span-1">
                <Image src={"https://avatars.githubusercontent.com/u/73663871?v=4"} alt="user-avatar" height={50} width={50} className="rounded-full"/>
            </div>
            <div className="col-span-11 ">
                <h5>
                    Padam Sinha
                </h5>
                <p>
                Product Update ✨
                Added a capability to add more instructors to a course so that multiple instructors can contribute to a single course 💪🏻

                </p>
                <div className="flex justify-between mt-5 text-xl items-centers p-2 w-[90%]">
                    <div>
                    <BiMessageRounded/>
                    </div>
                    <div>
                        <AiOutlineRetweet/>
                    </div>
                    <div>
                        <AiOutlineHeart/>
                    </div>
                    <div>
                        <AiOutlineUpload/>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default FeedCard;