
interface ErrorScreenProps {
    message: string
}

export default function ErrorScreen({ message }:ErrorScreenProps) {
    return (
        <main className="bg-slate-900 flex flex-col items-center min-h-screen pb-8">
            <header className="w-full text-red-500 font-semibold text-center text-4xl p-8">
                <h1>{message}</h1>
            </header>
            <img className="w-[200px]" src="/assets/error_image.png" alt="Passed out computer"/>
        </main>
    );
}