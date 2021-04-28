export default function ButtonDelete({ className, onDelete }) {

    return (
        <div className={className} onClick={() => onDelete()}></div>
    )

}