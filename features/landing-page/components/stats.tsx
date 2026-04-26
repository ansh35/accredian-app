export default function Stats() {
    return (
        <section
            id="stats"
            className="tools w-full overflow-hidden flex flex-col items-center mt-8 sm:mt-28 px-4 capitalize"
            >
            {/* Heading */}
            <div className="text-center mb-6 mx-2">
                <h2 className="text-2xl mx-1 sm:text-4xl font-bold text-gray-900 leading-tight">
                Our <span className="text-blue-600">Track Record</span>
                </h2>

                <p className="text-sm sm:text-lg text-gray-700 mt-3 mx-1">
                The Numbers Behind{" "}
                <span className="text-blue-600">Our Success</span>
                </p>
            </div>

            {/* Content */}
            <div className="w-full flex justify-center p-4 text-center">
                <div>
                {/* Desktop */}
                <div className="hidden sm:flex justify-start p-4 gap-10 rounded-xl">
                    {/* Item 1 */}
                    <div className="flex flex-col justify-start gap-4 items-center border-r-2 pr-4">
                    <div className="text-2xl text-blue-600 font-semibold w-24 bg-blue-100 p-2 rounded-full">
                        <h2>10K+</h2>
                    </div>

                    <p className="max-w-75">
                        Professionals trained for exceptional career success
                    </p>
                    </div>

                    {/* Item 2 */}
                    <div className="flex flex-col justify-start gap-4 items-center border-r-2 pr-4">
                    <div className="text-2xl text-blue-600 font-semibold w-24 bg-blue-100 p-2 rounded-full">
                        <h2>200+</h2>
                    </div>

                    <p className="max-w-75">
                        Sessions delivered with unmatched learning excellence
                    </p>
                    </div>

                    {/* Item 3 */}
                    <div className="flex flex-col justify-start gap-4 items-center pr-4">
                    <div className="text-2xl text-blue-600 font-semibold w-24 bg-blue-100 p-2 rounded-full">
                        <h2>5K+</h2>
                    </div>

                    <p className="max-w-75">
                        Active learners engaged in dynamic courses
                    </p>
                    </div>
                </div>

                {/* Mobile */}
                <div className="sm:hidden grid grid-cols-1 p-4 gap-10 rounded-xl">
                    {/* Item 1 */}
                    <div className="flex justify-start items-center text-left gap-4 border-b-2 pb-4">
                    <div className="flex justify-center items-center text-blue-600 font-semibold w-full max-w-17.5 bg-blue-100 p-2 rounded-full">
                        <h2 className="text-md md:text-2xl">10K+</h2>
                    </div>

                    <p className="text-md md:text-2xl">
                        Professionals trained for exceptional career success
                    </p>
                    </div>

                    {/* Item 2 */}
                    <div className="flex justify-start items-center text-left gap-4 border-b-2 pb-4">
                    <div className="flex justify-center items-center text-blue-600 font-semibold w-full max-w-17.5 bg-blue-100 p-2 rounded-full">
                        <h2 className="text-md md:text-2xl">200+</h2>
                    </div>

                    <p className="text-md md:text-2xl">
                        Sessions delivered with unmatched learning excellence
                    </p>
                    </div>

                    {/* Item 3 */}
                    <div className="flex justify-start items-center text-left gap-4 pr-4">
                    <div className="flex justify-center items-center text-blue-600 font-semibold w-full max-w-17.5 bg-blue-100 p-2 rounded-full">
                        <h2 className="text-md md:text-2xl">5K+</h2>
                    </div>

                    <p className="text-md md:text-2xl">
                        Active learners engaged in dynamic courses
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </section>
    )
}