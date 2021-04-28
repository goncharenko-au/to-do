export default function ButtonDone({ className, onDone }) {

    return (
        <div className={className} onClick={() => onDone()}></div>
    )

}