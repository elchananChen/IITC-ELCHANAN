const ulEl = document.querySelector("ul");

const getAllPosts = async () => {
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
  </div>ֿ
</li>`;
    });
  } catch (error) {
    console.error(
      "Error fetching posts:",
      error.response?.data || error.message
    );
  }
};

getAllPosts();

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
