import { useEffect, useState } from "react"

export default function Home() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/home`)
        .then(res => res.json())
        .then(data => setUser(data.user))
    }, [])


    return (
        <>
        <div className="p-6 text-lg">
            <h1>Hii {user}!, Welcome to Accommate Homepage</h1>
        </div>
        </>
    )
}