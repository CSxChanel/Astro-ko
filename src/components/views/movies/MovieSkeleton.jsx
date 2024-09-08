const MovieSkeleton = () => {
    return (
        <div className="animate-pulse flex flex-col justify-center items-center">
            <div className="min-w-[150px] h-[220px] md:h-[250px] md:w-[400px] lg:h-[400px] bg-slate-400 rounded-2xl"></div>
            <div className="h-4 w-[140px] bg-slate-400 mt-2 rounded"></div>
            <div className="h-3 w-[80px] bg-slate-400 mt-2 rounded"></div>
            <div className="h-3 w-[50px] bg-slate-400 mt-2 rounded"></div>
        </div>
    );
};

export default MovieSkeleton;
