import Header from "./_components/Header";
import SideNav from "./_components/SideNav";

function layout({ children }) {
  return (
    <div>
      <div className="sm:w-64 sm:block fixed">
        <SideNav/>
      </div>
      <div className="ml-64">
      <Header />
        {children}
      </div>
    </div>
  );
}

export default layout;
