"use client"

import { BadgeIcon, BookOpen, GraduationCap, LayoutDashboard, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";

function SideNav() {

  const {user} = useUser();
  const menu = [
    { id: 4, name: "Dashboard", icon: LayoutDashboard, path:"/dashboard",auth:user},
    { id: 1, name: "All Courses", icon: BookOpen, path:"/courses",auth:true},
    { id: 2, name: "Membership", icon: BadgeIcon, path:"/membership",auth:true},
    { id: 3, name: "Be Instructor", icon: GraduationCap, path:"/instructor", auth:true},
    { id: 5, name: "Newsletter", icon: Mail, path:"/newsletter", auth:true},

  ];


  const path=usePathname();
  useEffect(() => {
    console.log("path",path);
  }
  , []);

  return (
    <div className="p-5 bg-orange-400 shadow-sm  border h-screen">
      <Image src="/logo.png" alt="logo" width={170} height={80} />
      <hr className="mt-7"></hr>

      {/* Menu List*/}
      <div className="mt-5">
        {menu.map((item, index) =>item.auth&&(
          <Link href={item.path}>
            <div
              key={item.id}
              className= {`group flex gap-3 mt-2 p-3 text-[18px] items-center text-white cursor-pointer hover:bg-orange-500 hover:text-white rounded-md transition-all ease-in-out duration-200 ${path.includes(item.path)&&'bg-orange-500 text-white'}`}
            >
              <item.icon className="group-hover:animate-bounce" />
              <h2>{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideNav;