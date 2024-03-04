import React from 'react'

const Paragraph = (props: ParagraphProps) => {
    return (
        <section className={`max-w-[1000px] mx-auto py-24 px-10 ${props.class}`}>
            <h1 className="mb-10 font-semibold text-4xl">Paragraph # {props.title}</h1>
            <p>{props.content}</p>
        </section>
    )
}

export default Paragraph

interface ParagraphProps {
    title: string;
    content: string;
    class?: string;
}