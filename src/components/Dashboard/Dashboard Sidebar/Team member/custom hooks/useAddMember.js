import axiosInstance from "../axiosInstance";

function useAddMember() {
  const createMembers = async (value) => {
    try{
    const response = await axiosInstance.post("", value);

    const result = await response.data;
    console.log("result", result);
    } catch (err) {
        console.log(err)
    }
  }

  return { createMembers };
}

export default useAddMember;