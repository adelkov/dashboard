import axios from 'axios';


export const fetchTableData = async (url) => {
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
