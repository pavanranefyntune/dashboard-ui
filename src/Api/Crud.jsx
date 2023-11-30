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
 
 export const createMembers = async (value) => {
    const response = await fetch("https://gorest.co.in/public/v2/users" , {
      method: "POST",
      headers : {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer dfc6f5ba1634462bf2ee5934798c1223bdeb45318cfe254fe838509506a983eb',
      },
      body: JSON.stringify(value)
    })

    const result = await response.json();
    console.log("result",result)
  }
  
  export const deleteMember = async (id) => {
    const response = await fetch(`https://gorest.co.in/public/v2/users/${id}`, {
     method: "DELETE",
     headers: {
       'Content-Type': 'application/json',
       'Authorization': 'Bearer dfc6f5ba1634462bf2ee5934798c1223bdeb45318cfe254fe838509506a983eb',
     }
    });
 
    if (!response.ok) {
     throw new Error("Failed to delete members");
    }
    return response
 } 

 export const updateMembers = async (value) => {
  const {id, ... data} = value
    const response = await fetch(`https://gorest.co.in/public/v2/users/${id}` , {
      method: "PUT",
      headers : {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer dfc6f5ba1634462bf2ee5934798c1223bdeb45318cfe254fe838509506a983eb',
      },
      body: JSON.stringify(data)
    })

    const result = await response.json();
    return result
  }