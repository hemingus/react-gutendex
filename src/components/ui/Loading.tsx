export default function Loading() {
    const count = 15;
    const radius = 60;
    return (

        <div>
            <div className="relative h-[200px] mx-auto animate-spin-slow">
                {Array.from({ length: count }).map((_, index) => {
                    const angle = (index / count) * 360;
                    return <li key={index} style={{ listStyle: "none", transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`, "--delay": `${index/10}s`} as React.CSSProperties}
                    className="bg-slate-600 w-5 h-5 absolute top-1/2 left-1/2 bg-cover bg-center rounded-full -translate-x-1/2 -translate-y-1/2 text-sm animate-blink-slow"></li>
                })}
            </div>
            <p className="text-lime-300 text-xl animate-blink-slow">Loading...</p>
        </div>
    );
}