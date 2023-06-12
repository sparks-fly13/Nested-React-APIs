import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrashcan } from "react-icons/go";
import { useDeleteAlbumMutation } from "../store";
import PhotosList from "./PhotosList";

function AlbumsListItem({album}) {
    const [deleteAlbum, results] = useDeleteAlbumMutation();

    const handleRemoveAlbum = () => {
        deleteAlbum(album);
    };

    const header = <div className="flex flex-row items-center">
        <Button loading={results.isLoading} onClick={handleRemoveAlbum} className="mr-3"><GoTrashcan /></Button>
        {album.title}
    </div>
    return (
        <ExpandablePanel key={album.id} header={header}>
            <PhotosList album={album} />
        </ExpandablePanel>
    );
}

export default AlbumsListItem;