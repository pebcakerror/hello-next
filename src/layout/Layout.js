import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div className="bg-blue-900 text-gray-100 p-8 h-screen">
      <div className="mx-auto mb-4">
        <div className="h-12 flex items-center mb-4 border-b-2">
          <Link to="/">
            <h1 className="font-bold text-2xl">
              Rock &amp; Roll <span className="font-normal">React</span>
            </h1>
          </Link>
        </div>
        <div className="flex flex-wrap -mx-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
