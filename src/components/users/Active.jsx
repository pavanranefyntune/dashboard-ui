import { Menu } from "@headlessui/react";
import { MdEditSquare } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useState } from "react";
import EditUserModal from "./EditUserModal";

// eslint-disable-next-line react/prop-types
export default function Active({ row, data, setUsersData }) {
  const [show, setShow] = useState(false);

  const handleDelete = () => {
    // eslint-disable-next-line react/prop-types
    const deleteUser = data.filter((item) => item.id !== row.original.id);
    setUsersData(deleteUser);
  };

  return (
    <div className="relative">
      <Menu>
        <Menu.Button
        // eslint-disable-next-line react/prop-types
        >
          <HiOutlineDotsVertical />
        </Menu.Button>
        <Menu.Items>
          <div className="bg-[#ABA9BB] flex justify-center  items-center p-1 rounded-md cursor absolute top-0">
            <Menu.Item
              as="a"
              className="ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black cursor-pointer"
            >
              <MdEditSquare onClick={() => setShow(!show)} />
              <MdDelete onClick={handleDelete} />
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>
      {show && (
        <EditUserModal
          show={show}
          setShow={setShow}
          row={row}
          data={data}
          setUsersData={setUsersData}
        />
      )}
    </div>
  );
}
