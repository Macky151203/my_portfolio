export default function Loading(){
    return (
        <>
            <div className="flex flex-col bg-gray-500 h-72  p-2 rounded-md animate-pulse">
                <div className="bg-gray-600 rounded-md m-2 h-3/4"></div>
                <div className="bg-gray-600 rounded-md m-2 h-1/4"></div>
            </div>
        </>
    )
}