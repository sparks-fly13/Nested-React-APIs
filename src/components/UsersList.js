import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";
import useThunk from "../hooks/useThunk";
import UsersListItem from "./UsersListItem";

function UsersList() {
    const [handleFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);
    const [handleAddUser, isCreatingUser, creatingUserError] = useThunk(addUser);

    const {data} = useSelector((state) => {
        return state.users;
    });

    useEffect(() => {
        handleFetchUsers();
    },[handleFetchUsers]);

    const handleUserAdd = () => {
        handleAddUser();
    };

    let content;

    if (isLoadingUsers){
        content = <div><Skeleton times={5} className='h-10 w-full' /></div>
    }

    else if(loadingUsersError){
        content = <div>{loadingUsersError}</div>
    }

    else {
        content = data.map((user) => {
            return <UsersListItem key={user.id} user={user} />
        });
    }
    
    return (
        <div>
        <div className="flex flex-row justify-between items-center m-3">
            <h1 className="text-xl m-2">Users</h1>
            <Button loading={isCreatingUser} onClick={handleUserAdd}>Add User</Button>
            {creatingUserError && <div>'Error while creating user'</div>}
        </div>
            {content}
        </div>
    );
}

export default UsersList;