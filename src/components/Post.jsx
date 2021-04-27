import { useDispatch, useSelector } from "react-redux";
import { updateDone } from "../action";
import Button from "./Button";
import { deletePost } from './../action/index';

export default function Post(props) {
    const dispatch = useDispatch();
    const done = useSelector(state => state.postReducer.post.done);
    const posts = useSelector(state => state.postReducer.posts);


    // const changeDone = () => {
    //     dispatch(updateDone(!done));
    // }



    const deleteMyPost = () => {
        dispatch(deletePost(1));
    }

    return (
        <div className="field__block">
            <div className="field__block-inner">
                <div className={!done ? "field__block-text" : "field__block-text done"}>
                    {/* <div className="field__block-text"> */}
                    {props.children.name}
                </div>
                {/* {posts.findIndex(item => item.id === props.item)} */}


                {/* {posts.map((item, index) => } */}

                <div className="field__block-buttons">
                    <Button className="field__block-btn btn-done"
                    // onC={() => changeDone()} 
                    />
                    <Button className="field__block-btn btn-delete"
                        onDel={deleteMyPost}
                    />

                    {/* <div className="field__block-btn btn-done"
                        onClick={(e) => changeDone(e)}
                    // onClick={(e) => console.log(e)}
                    ></div>
                    <div className="field__block-btn btn-delete"
                        onClick={() => { }}
                    ></div> */}
                </div>



            </div>
        </div>
    )
}