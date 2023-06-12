import { useCallback, useState } from 'react';
import {useDispatch} from 'react-redux';

function useThunk (thunk) {
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState(null);

    const dispatch = useDispatch();

    const handleThunk = useCallback((arg) => {
        setIsLoading(true);
        dispatch(thunk(arg))
            .unwrap()
            .catch((error) => setErr(error.message))
            .finally(() => setIsLoading(false));
    }, [dispatch, thunk]);

    return [handleThunk, isLoading, err];
}

export default useThunk;