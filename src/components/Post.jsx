import { useDispatch, useSelector } from "react-redux";
import { updateDone } from "../action";
import ButtonDone from "./ButtonDone";
import ButtonDelete from "./ButtonDelete";
import { deletePost } from './../action/index';


export default function Post(props) {
    const dispatch = useDispatch();
    const done = useSelector(state => state.postReducer.posts);
    // const posts = useSelector(state => state.postReducer.posts);


    const changeDone = () => {
        dispatch(updateDone(props));
        console.log("D")
    }


    const deleteMyPost = () => {
        dispatch(deletePost(props.id));
        console.log("delete")
    };

    return (
        <div className="field__block">
            <div className="field__block-inner">
                <div className={!props.children.done ? "field__block-text" : "field__block-text done"} >
                    {props.children.name}
                </div>
                <div className="field__block-buttons">
                    <ButtonDone className="field__block-btn btn-done"
                        onDone={changeDone}
                    />
                    <ButtonDelete className="field__block-btn btn-delete"
                        onDelete={deleteMyPost}
                    />
                </div>


            </div>
        </div >
    )
}