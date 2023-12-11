import { Menu } from "@headlessui/react";
import { MdEditSquare } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";

// eslint-disable-next-line react/prop-types
export default function Active({ row, data, setUsersData }) {
  const handleDelete = () => {
    // eslint-disable-next-line react/prop-types
    const deleteUser = data.filter((item) => item.id !== row.original.id);
    setUsersData(deleteUser);
  };

  return (
    <div>
      <Menu>
        <Menu.Button
        // eslint-disable-next-line react/prop-types
        >
          <HiOutlineDotsVertical />
        </Menu.Button>
        <Menu.Items>
          <div className="bg-[#ABA9BB] flex justify-center p-1 rounded-md cursor">
            <Menu.Item
              as="a"
              className="ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black cursor-pointer"
            >
              <MdEditSquare />
              <MdDelete onClick={handleDelete} />
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
}
