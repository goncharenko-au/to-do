import { useDispatch } from "react-redux";
import { updateDone } from "../action";
import ButtonDone from "./ButtonDone";
import ButtonDelete from "./ButtonDelete";
import { deletePost } from './../action/index';


export default function Post(props) {
    const dispatch = useDispatch();

    const changeDone = () => {
        dispatch(updateDone(props));
    }

    const deleteMyPost = () => {
        dispatch(deletePost(props.id));
    };
    const { name, done } = props.children;


    const timeOfPost = new Date().toLocaleTimeString();

    return (
        <div className="field__block">
            <div className="field__block-inner">
                <div className={!done ? "field__block-text" : "field__block-text done"} >
                    {name}
                </div>
                <span>{timeOfPost}</span>
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