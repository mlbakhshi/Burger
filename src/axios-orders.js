import axios from 'axios';
const instance=axios.create({
baseURL:"https://react-my-burger-7b5c9-default-rtdb.firebaseio.com/"
});
export default instance;