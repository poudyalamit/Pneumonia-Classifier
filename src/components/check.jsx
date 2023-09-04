import { Link } from "react-router-dom"

const Check = () => {
    return (
        <div className="py-20 sm:py-28">
            <div className="custom-screen text-center">
                <div className="max-w-xl mx-auto">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Let’s get started now
                    </h2>
                    <p className="mt-3 text-gray-600">
                    Determine if the individual has experienced Pneumonia or not.
                    </p>
                </div>
                <div className="space-y-3 gap-3 justify-center items-center mt-4 sm:flex sm:space-y-0">
                    <Link to='/classifier' className="inline-block w-full font-medium text-sm text-white bg-sky-500 hover:bg-sky-600 active:bg-sky-700 shadow rounded-lg sm:w-auto py-2.5 px-4 text-center rounded-lg duration-150">
                        Check Now
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Check