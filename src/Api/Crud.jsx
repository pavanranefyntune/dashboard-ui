export const fetchMembers = async () => {
    const response = await fetch("https://gorest.co.in/public/v2/users?page=1&per_page=4 ", {
     method: "GET",
     headers: {
       'Content-Type': 'application/json',
       'Authorization': 'Bearer dfc6f5ba1634462bf2ee5934798c1223bdeb45318cfe254fe838509506a983eb',
     }
    });
 
    if (!response.ok) {
     throw new Error("Failed to fetch members");
    }
    const data = await response.json();
    return data
 }
 
export const fetchMemberDetails = async (id) => {
    const response = await fetch(`https://gorest.co.in/public/v2/users/${id}`, {
     method: "GET",
     headers: {
       'Content-Type': 'application/json',
       'Authorization': 'Bearer dfc6f5ba1634462bf2ee5934798c1223bdeb45318cfe254fe838509506a983eb',
     }
    });
 
    if (!response.ok) {
     throw new Error("Failed to fetch member details");
    }
    const data = await response.json();
    return data
 }
 