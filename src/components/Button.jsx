export default function Buttons({ className, onC, onDel }) {
    return (
        <div className={className} onClick={onDel}></div>
    )

}