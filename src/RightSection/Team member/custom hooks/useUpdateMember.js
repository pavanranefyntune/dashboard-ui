import axiosInstance from "../axiosInstance";

function useUpdateMember() {
  const updateMember = async (value) => {
    const { id, ...data } = value;
    try {
      const res = await axiosInstance.put(`${id}`, data);

      const result = await res.data;
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  return { updateMember };
}

export default useUpdateMember;