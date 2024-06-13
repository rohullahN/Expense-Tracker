import { MdLogout } from "react-icons/md";
import toast from "react-hot-toast";
import { useMutation } from "@apollo/client";
import { LOGOUT } from "../../graphql/mutations/user.mutation";

const Header = ({ userName }) => {
  const [logout] = useMutation(LOGOUT, {
    refetchQueries: ["GetAuthenticatedUser"],
  });

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log("Error logging out: ", error);
      toast.error(error.message);
    }
  };
  return (
    <div className="flex justify-between items-center h-16 bg-slate-900 px-4">
      <h1 className="px-2 font-bold text-white text-3xl">Expense Tracker</h1>
      <div className="flex items-center">
        <h2 className="text-white text-xl mr-5">Hello {userName}!</h2>
        <MdLogout
          className=" w-7 h-7 cursor-pointer text-white"
          onClick={handleLogout}
          data-testid="logoutIcon"
        />
      </div>
    </div>
  );
};
export default Header;
