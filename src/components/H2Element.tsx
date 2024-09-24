interface Props {
    text: string;
    id: string;
}

function H2Element ({ text, id }: Props ) {
    return (
        <h2 id={id} className="mdx-heading text-3xl font-display leading-10 text-primary dark:text-primary-dark font-bold my-6">
            {text}
        </h2>
    )
}

export default H2Element;
