const baseURL = "https://jsonplaceholder.typicode.com/";

export const comments = {
    url: baseURL + "comments",
    columns: ["name", "email", "body"],
    title: "Comments data"
};


export const posts = {
    url: baseURL + "posts",
    columns: ["title", "body"],
    title: "Posts data"
};
