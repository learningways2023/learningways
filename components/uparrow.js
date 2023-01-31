import React from "react";
import Image from "next/image";
import up from "../public/up.png";
import { useRouter } from "next/router";
const Uparrow = (props) => {
  const router = useRouter();
  return (
    <div
      className="w-[50px] h-[50px] bg-[#085464] up fixed bottom-3 right-3 z-50 cursor-pointer"
      onClick={function handleUp() {
        router.push(`/${props.url}`);
      }}
    >
      <div className="p-2">
        <Image src={up} />
      </div>
    </div>
  );
};

export default Uparrow;
