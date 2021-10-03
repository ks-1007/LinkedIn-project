import { useSelector } from "react-redux";
import FeedPage from "./FeedPage";
import Loader from "../Components/loader/Loader"

export default function FeedPage2() {
    
    const isLoading = useSelector(state => state.isLoading);
    console.log(isLoading)
    return (
        <>
            {isLoading ? <Loader/> : <FeedPage/>}
        </>
    )
}