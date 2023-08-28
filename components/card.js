import Image from "next/image"
export default function Card({ src, content,hr }) {
    return (
        <>
            <div className="flex flex-col m-6 md:w-80 dark:shadow-md p-1 rounded-md">
                <Image className="rounded-xl hover:cursor-pointer hover:blur-sm" src={src} />
                <div className="text-center mt-6 text-cyan-600 dark:text-cyan-800 text-xl">{content} {hr?<a className="font-bold text-yellow-400 dark:text-red-500" href={hr} target="_main">Click here</a> :''}</div>
            </div>
        </>
    )
}