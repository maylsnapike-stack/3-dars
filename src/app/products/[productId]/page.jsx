import React from 'react'

export async function generateMetadata({ params,}) {
    const {productId} = await params;

    // fetch post information
    const post = await fetch(`https://api.escuelajs.co/api/v1/products/${productId}`).then((res) =>
        res.json()
    )

    return {
        title: post.title,
        description: post.description,
    }
}


async function SinglePage({ params }) {
    const { productId } = await params;

    const res = await fetch(`https://api.escuelajs.co/api/v1/products/${productId}`);
    const data = await res.json();

    console.log(data);

    return (
        <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center p-5">
            <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-3xl p-6 shadow-2xl hover:border-gray-700 transition duration-300">

                <div className="w-full h-64 bg-gray-800 rounded-2xl flex items-center justify-center mb-6">
                    <img
                        src={data?.images?.[0]}
                        alt={data?.title}
                        className="w-full h-full object-contain p-4"
                    />
                </div>

                <p className="text-sm text-gray-400 mb-2">
                    Product #{productId}
                </p>

                <h1 className="text-2xl font-bold mb-3">
                    {data?.title}
                </h1>

                <p className="text-gray-400 text-sm leading-6 mb-6">
                    {data?.description}
                </p>

                <div className="flex items-center justify-between gap-4">
                    <span className="text-3xl font-bold text-emerald-400">
                        ${data?.price}
                    </span>

                    <button className="bg-white text-black font-semibold px-6 py-3 rounded-xl hover:bg-emerald-400 transition duration-300">
                        Buy now
                    </button>
                </div>

            </div>
        </div>
    )
}

export default SinglePage