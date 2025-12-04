const categories = [
"Fiction",
"Mystery",
"Thriller",
"Romance",
"Fantasy",
"Morality",
"Society",
"Power",
"Justice",
"Adventure",
"Tragedy",
"War",
"Philosophy"
]

export default function Loading() {
    const radius = 150;
    return (

        <div>
            <div className="relative w-[200px] h-[400px] mx-auto animate-spin-slow">
                {categories.map((item, index) => {
                    const angle = (index / categories.length) * 360;
                    return <li style={{ listStyle: "none", transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`, "--delay": `${index/10}s`} as React.CSSProperties}
                    className="bg-white w-[50px] h-[50px] absolute top-1/2 left-1/2 bg-cover bg-center rounded-full -translate-x-1/2 -translate-y-1/2 text-sm animate-blink-slow"></li>
                })}
            </div>
            <p className="animate-blink-slow">Loading...</p>
        </div>
    );
}