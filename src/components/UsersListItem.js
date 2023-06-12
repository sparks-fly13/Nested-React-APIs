import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { deleteUser } from "../store";
import useThunk from "../hooks/useThunk";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

function UsersListItem ({user}) {
    const [handleDeleteUser, isDeletingUser, deletingUserError] = useThunk(deleteUser);

    const header = <>
        <Button className="mr-3" loading={isDeletingUser} onClick={() => handleDeleteUser(user.id)}><GoTrashcan /></Button>
        {deletingUserError && <div>'Error while deleting user'</div>}
        {user.name}
    </>

    return (
        <ExpandablePanel header={header}>
            <AlbumsList user={user} />
        </ExpandablePanel> 
    )
}

export default UsersListItem;