export default function Background(){
    return(
        <div className="fixed inset-0 z-[-1]">
            <img src="/images/background.png" alt="guy coding in the dark with cozy background"
                className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
        </div>
    )
}