import {SELECT_USER} from '../constants/User'
// Không thể truyền đk data vào vs cách viết này
// export const seclectUserAction = {
//     type: "SELECT_USER",
// }


export const seclectUserAction = (user) => {
    return {
        type: SELECT_USER,
        value:user,
    }
}