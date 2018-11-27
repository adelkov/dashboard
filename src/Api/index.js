import axios from 'axios';

const url = "https://jsonplaceholder.typicode.com/posts";

export const fetchTableData = async () => {
    try {
        const {data} = await axios.get(url);
        return {
            data,
            error: null
        };
    } catch (e) {
        return {
            data: [],
            error: e.message
        }
    }
};
