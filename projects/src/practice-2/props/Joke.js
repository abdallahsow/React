export default function Joke({ setup, punchline, upvotes, downvotes, isPun }) {
    return (
        <div>
            <h3>{setup}</h3>
            <p>{punchline}</p>
            <p>Upvotes: {upvotes}</p>
            <p>Downvotes: {downvotes}</p>
            <p>Is pun: {isPun ? "Yes" : "No"}</p>
            <hr />
        </div>
    )
}


