import axios from 'axios';

const KEY = 'AIzaSyDcUB7jUZWQj7r6ayShfNZj-T_fu7ZARzM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResult: 5,
        key: KEY
    }
});