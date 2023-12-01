import axiosInstance from "../axiosInstance";

function useGetMembers() {
  const getMembers = async () => {
    try {
      const res = await axiosInstance.get("?page=1&per_page=4");

      const result = await res.data;
      console.log(result)
      return result;
    } catch (err) {
      console.log(err);
    }
  };

  return {getMembers}
}
export default useGetMembers;