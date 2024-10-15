const ulEl = document.querySelector("ul");

const randerAllPosts = async () => {
  try {
    const response = await axios.get(
      "https://api-playground-ten.vercel.app/posts"
    );
    console.log("All posts:", response.data);
    const data = response.data;
    data.forEach((currentPost) => {
      ulEl.innerHTML += `<li>
         <div>
         <h2>${currentPost.title}</h2>
         <p>${currentPost.content}</p>
         </div>
         </li>`;
    });
  } catch (error) {
    console.error(
      "Error fetching posts:",
      error.response?.data || error.message
    );
  }
};
// getAllPosts();

async function randerpost(ID) {
  try {
    const response = await axios.get(
      `https://api-playground-ten.vercel.app/posts/${ID}`
    );
    console.log("All posts:", response.data);
    const data = response.data;
    ulEl.innerHTML += `<li>
        <div>
        <h2>${data.title}</h2>
        <p>${data.content}</p>
        </div>
     </li>`;
  } catch (error) {
    console.error(
      "Error fetching posts:",
      error.response?.data || error.message
    );
  }
}

async function creatPost(tytle, content) {
  try {
    const response = await axios.post(
      `https://api-playground-ten.vercel.app/posts`,
      {
        title: tytle,
        content: content,
      }
    );
    console.log("Post created:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error creating post:",
      error.response?.data || error.message
    );
  }
}
// creatPost("yay", "yampampus and me");

async function createAndRander(title, content) {
  const data = await creatPost(title, content);
  randerpost(data._id);
}
// createAndRander("binary", "nambers 0 1");

// const baba = {
// name: "baba",
// contect: {
//     // banana: "yami",
//     phone: "03023",
// },
// };

// const {
// contect: { phone },
// } = baba;

// console.log(phone);
