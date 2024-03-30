import { BadgeIcon, BookOpen, GraduationCap } from "lucide-react";
import Image from "next/image";
function SideNav() {
  const menu = [
    { id: 1, name: "All Courses", icon: BookOpen },
    { id: 2, name: "Membership", icon: BadgeIcon },
    { id: 3, name: "Be Instructor", icon: GraduationCap },
  ];

  return (
    <div className="p-5 bg-orange-400 shadow-sm  border h-screen">
      <Image src="/logo.png" alt="logo" width={170} height={80} />
      <hr className="mt-7"></hr>

      {/* Menu List*/}
      <div className="mt-5">
        {menu.map((item, index) => (
          <div
            key={item.id}
            className="group flex gap-3 mt-2 p-3 text-[18px] items-center text-white cursor-pointer hover:bg-orange-500 hover:text-white rounded-md transition-all ease-in-out duration-200 "
          >
            <item.icon className="group-hover:animate-bounce" />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
