import { useDispatch, useSelector } from "react-redux";
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

    return (
        <div className="field__block">
            <div className="field__block-inner">
                <div className={!props.children.done ? "field__block-text" : "field__block-text done"} >
                    {props.children.name}
                </div>
                <div className="field__block-buttons">
                    {/* <span></span> */}
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