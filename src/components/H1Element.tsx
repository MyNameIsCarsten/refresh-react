interface Props {
    text: string;
    id: string
}

function H1Element({ text, id }: Props) {
    return (
        <h1 id={id} className="inline-block relative pb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl dark:text-white text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-600">
            {text}
            <span className="absolute left-0 bottom-0 h-2 w-full bg-gradient-to-r from-sky-400 to-emerald-600"></span>
        </h1>
    );
}

export default H1Element;
