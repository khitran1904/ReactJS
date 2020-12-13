import {SELECT_USER} from '../constants/User'
// quản lí các state của userManagement

// Gồm 2 tp chính
// 1 : object chứa state
// 2: hàm dùng để thay đổi state

const initialState ={
    userList : [
        {
          "id" :1,
          "userName":"jack",
          "fullName":"jack sparow",
          "email":"123@gmail.com",
          "position":"dev",
          "birth":"19-04"
        },
        
        {
            "id" :2,
            "userName":"jonh",
            "fullName":"jonh nalhan",
            "email":"456@gmail.com",
            "position":"PM",
            "birth":"9-2"
        },
        {
            "id" :3,
            "userName":"may",
            "fullName":"may conor",
            "email":"789@gmail.com",
            "position":"dev2",
            "birth":"1-5"
        },
        {
            "id" :4,
            "userName":"jmin",
            "fullName":"sunHo ",
            "email":"001@gmail.com",
            "position":"dev1",
            "birth":"1-12"
        }
      
    ],
    search:"",
    selectedUser:"",
};

// Hàm này nhận vào 2 tham số 
// state nhận vào tham số state và action dùng để thay đổi state
// Action : là hàm return về 1 Object sẽ có 1 key  là type
// reducer sẽ dựa vào type để quyết định sẽ thay đổi state nào
const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case "SEARCH-USER":
            // khi action có type là 'SEARCH-USER' thì sẽ thay đổi state userList
            console.log(action);
            // Redux yêu cầu khi thay đổi state phải return về 1 state mới
            // => state cũ và mới phải có địa chỉ vùng nhớ khác nhau
            // Khi state thay đổi thì component nào kết nối vs state này => props của component đó thay đổi => render lại
            
            return {...state,search: action.value};
        case "DELETE_USER":
            console.log(action); 
            const userList = state.userList.filter((user) => {
                return user.id !== action.value;
            });
            return {...state,userList}
        case "SUBMIT_USER": 
            console.log(action);
            // debugger;  đặt debug code
            
            //user đã tồn tại => update
            if(action.value.id){
                // Cách 1
                const userListNew = [...state.userList];
                const index = userListNew.findIndex(
                    (item) => item.id === action.value.id
                );
                userListNew[index] = action.value;
                return {...state,userList: userListNew }
            }
            else{
                const id = Math.floor(Math.random()*100);
            //Cách 1
            // const userListNew = [...state.userList];
            // userListNew.push({...action.value,id})
            // return {...state,userList:userListNew};

            //Cách 2
            return {
                ...state,
                userList:[...state.userList,{...action.value,id}]
            }
            }

        case SELECT_USER:
            console.log(action);
            return {...state,
                selectedUser:action.value}
        default:
            return state;
    }
};

export default userReducer;