import { useDeletePhotoMutation } from "../store";
import { GoTrashcan } from "react-icons/go";

function PhotosListItem({photo}) {
    const [deletePhoto] = useDeletePhotoMutation();
    const handleClick = () => {
        deletePhoto(photo);
    };
    return (
        <div onClick={handleClick} className="relative m-2">
            <img src={photo.url} alt={photo.title} className="h-[10rem] w-[10rem]" />
            <div className="absolute inset-0 items-center flex justify-center hover:bg-gray-200 opacity-0 hover:opacity-80"><GoTrashcan /></div>
        </div>
    );
}

export default PhotosListItem;