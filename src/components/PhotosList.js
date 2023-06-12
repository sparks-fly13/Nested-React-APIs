import { useFetchPhotosQuery, useAddPhotoMutation } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";
import PhotosListItem from "./PhotosListItem";

function PhotosList({album}) {
    const {data, isLoading, error} = useFetchPhotosQuery(album);
    const [addPhoto, results] = useAddPhotoMutation();
    const handleClick = () => {
        addPhoto(album);
    }
    let content;
    if (isLoading) {
        content = <Skeleton times={4} className='h-8 w-8' />
    }
    else if(error) {
        content = <div>{error}</div>
    }
    else {
        content = data.map((photo) => {
            return <PhotosListItem key={photo.id} photo={photo} />
        });
    }
    return (
        <div>
            <div className="m-2 flex flex-row items-center justify-between">
                <h3 className="text-lg font-bold">Photos for {album.title}</h3>
                <Button loading={results.isLoading} onClick={handleClick}>Add Photo</Button>
            </div>
            <div className="flex flex-row flex-wrap justify-center">
                {content}
            </div>
        </div>
    );
}

export default PhotosList;