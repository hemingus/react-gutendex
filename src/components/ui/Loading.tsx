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
    const radius = 50;
    return (

        <div>
            <div className="relative h-[200px] mx-auto animate-spin-slow">
                {categories.map((item, index) => {
                    const angle = (index / categories.length) * 360;
                    return <li key={item} style={{ listStyle: "none", transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`, "--delay": `${index/10}s`} as React.CSSProperties}
                    className="bg-slate-600 w-5 h-5 absolute top-1/2 left-1/2 bg-cover bg-center rounded-full -translate-x-1/2 -translate-y-1/2 text-sm animate-blink-slow"></li>
                })}
            </div>
            <p className="text-lime-300 text-xl animate-blink-slow">Loading...</p>
        </div>
    );
}