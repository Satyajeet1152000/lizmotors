import { FaUserCircle } from "react-icons/fa";
import { UserType } from "../utils/types";

const UserInfo = ({ data }: { data: UserType }) => {
    return (
        <div className="flex items-center justify-center gap-2 text-teal-500">
            <FaUserCircle className="w-10 h-10" />
            <div>
                <h2 className="text-3xl font-semibold">{data.name}</h2>
                <h3 className=" text-lg text-teal-700">{data.email}</h3>
            </div>
        </div>
    );
};

export default UserInfo;
