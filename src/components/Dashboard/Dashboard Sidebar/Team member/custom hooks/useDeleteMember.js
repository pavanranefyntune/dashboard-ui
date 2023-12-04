import axiosInstance from "../axiosInstance";

function useDeleteMember() {
  const deleteMember = async (id) => {
    try {
      const res = await axiosInstance.delete(`${id}`);

      return res;
    } catch (err) {
      console.log(err);
    }
  };

  return { deleteMember };
}

export default useDeleteMember;