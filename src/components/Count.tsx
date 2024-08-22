import { useState } from "react"

function Count() {
    const [count, setCount] = useState<number>(0);

    const reset = () => {
        window.location.reload();
    }

    return (
        <>
            <section className="top-section">
                <button onClick={() => setCount(count => count - 1)}>
                    -
                </button>
                <h2>{count}</h2>
                <button onClick={() => setCount(count => count + 1)}>
                    +
                </button>
            </section>
            <button onClick={reset}>
                Reset
            </button>
        </>
    )
}

export default Count