export function MainSectionHeader({
    title
}:{
    title: string
}){
    return (
        <h1 className="mb-2 mt-4 px-5 font-semibold">
            {title.toUpperCase()}
        </h1>
    )
}