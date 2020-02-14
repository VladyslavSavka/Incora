export default class FakeService {

    _apiBase = 'https://jsonplaceholder.typicode.com';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`)
        }
        
        return await res.json();
    }

    getUsers = async () => {
        const res = await this.getResource(`/users`);
        return res;
    }

    getUserPosts = async (id) => {
        const posts = await this.getResource(`/posts?userId=${id}`);
        
        return posts;
    };

    getComments = async (id) => {
        const comments = await this.getResource(`/comments?postId=${id}`);

        return comments;
    };

    getPost = async (id) => {
        const post = await this.getResource(`/posts/${id}`);
        return post;
    }

    addPost = async (post) => {
        await fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            body: JSON.stringify(post),
            headers:{
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => console.log(json))
    };

    changePost = async (id, changedPost) => {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify(changedPost),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
          .then(response => response.json())
          .then(json => console.log(json))
    };

    deletePost = async (id) => {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE'
          });
    }

}