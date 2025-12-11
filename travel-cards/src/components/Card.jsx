import React, { useState } from "react";

const Card = ({ element, reduceCard }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="border w-[350px] h-[450px] rounded-2xl overflow-hidden flex flex-col justify-center items-center">
            {/* Image */}
            <div className="h-[300px] object-contain overflow-hidden flex justify-center items-center">
                <img
                    src={element.img}
                    alt="This was an image"
                    className="h-11/12 rounded-2xl w-11/12 "
                />
            </div>

            {/* price, title and desc */}
            <div className="px-4">
                {/* price */}
                <div>
                    <span className=" text-green-700 font-bold">₹ {element.price}</span>
                </div>

                {/* title */}
                <div>
                    <span className=" text-2xl font-bold">{element.title}</span>
                </div>

                {/* desc */}
                <div>
                    <span className="text-gray-600 text-sm font-normal">
                    {
                        element.desc.length > 200 ? (
                            expanded ? (
                                <p>
                                    {element.desc}
                                    <button
                                        className="text-red-500 font-medium cursor-pointer"
                                        onClick={() => {
                                            setExpanded(false)
                                        }}
                                    >
                                        Show Less
                                    </button>
                                </p>
                            ) : (
                                <p>
                                    {element.desc.substring(0, 200)}
                                    <button
                                        className="text-blue-500 font-medium cursor-pointer"
                                        onClick={() => {
                                            setExpanded(true)
                                        }}
                                    >
                                        .... Read More
                                    </button>
                                </p>
                            )
                        ) : (
                            <p>{element.desc}</p>
                        )
                    }
                    </span>
                </div>
            </div>

            {/* button */}
            <button className="border rounded-lg px-8 py-2 mt-10 mb-5 bg-red-200 border-red-600 font-semibold"
                onClick={() => {
                    reduceCard(element.id);
                }}
            >
                Not Interested
            </button>
        </div>
    );
};

export default Card;
