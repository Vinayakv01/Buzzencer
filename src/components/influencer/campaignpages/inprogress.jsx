import React from 'react'
import linkedin from "../../../assets/logo/linkedin.svg";
import twitter from "../../../assets/logo/twitter.svg";
import facebook from "../../../assets/logo/facebook.svg";

const Inprogress = () => {

    const platformLogos = {
        "Facebook": facebook,
        "Instagram": twitter,
        "Twitter": linkedin
    };


    const campaignData = [
        {
            "id": 1,
            "campaign": "Nike Sport + Casual shoes promoting",
            "earning": "Rs. 400000/-",
            "pending": "1",
            "complete": "2",
            "details": {
                "description": "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
                "platforms": ["Facebook", "Instagram", "Twitter"],
                "start_date": "3rd March 2021",
                "end_date": "15th April 2021"
            }
        },
        {
            "id": 2,
            "campaign": "Another Campaign",
            "earning": "Rs. 300000/-",
            "details": {
                "description": "Another dummy text",
                "platforms": ["Facebook", "Instagram", "Twitter"],
                "start_date": "1st January 2022",
                "end_date": "31st December 2022"
            }
        },
        {
            "id": 3,
            "campaign": "Nike Sport + Casual shoes promoting",
            "earning": "Rs. 400000/-",
            "details": {
                "description": "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
                "platforms": ["Facebook", "Instagram", "Twitter"],
                "start_date": "3rd March 2021",
                "end_date": "15th April 2021"
            }
        },
        {
            "id": 4,
            "campaign": "Another Campaign",
            "earning": "Rs. 300000/-",
            "details": {
                "description": "Another dummy text",
                "platforms": ["Facebook", "Instagram", "Twitter"],
                "start_date": "1st January 2022",
                "end_date": "31st December 2022"
            }
        },
        {
            "id": 5,
            "campaign": "Nike Sport + Casual shoes promoting",
            "earning": "Rs. 400000/-",
            "details": {
                "description": "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
                "platforms": ["Facebook", "Instagram", "Twitter"],
                "start_date": "3rd March 2021",
                "end_date": "15th April 2021"
            }
        },
        {
            "id": 6,
            "campaign": "Another Campaign",
            "earning": "Rs. 300000/-",
            "details": {
                "description": "Another dummy text",
                "platforms": ["Facebook", "Instagram", "Twitter"],
                "start_date": "1st January 2022",
                "end_date": "31st December 2022"
            }
        },
        {
            "id": 7,
            "campaign": "Nike Sport + Casual shoes promoting",
            "earning": "Rs. 400000/-",
            "details": {
                "description": "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
                "platforms": ["Facebook", "Instagram", "Twitter"],
                "start_date": "3rd March 2021",
                "end_date": "15th April 2021"
            }
        },
        {
            "id": 8,
            "campaign": "Another Campaign",
            "earning": "Rs. 300000/-",
            "details": {
                "description": "Another dummy text",
                "platforms": ["Facebook", "Instagram", "Twitter"],
                "start_date": "1st January 2022",
                "end_date": "31st December 2022"
            }
        }

    ];

    return (
        <div>
            <div>
                {campaignData.map((data) => (
                    <div key={data.id} className="p-4 mx-4 mt-4 bg-white rounded-2xl shadow-md font-Montserrat">
                        <h2 className=" font-semibold ">{data.campaign}</h2>

                        <span className="flex justify-between">
                            <p className="text-black mt-3 text-sm font-semibold mb-2"><span className="font-normal">Campaign Earning:</span> {data.earning}</p>
                            <div className="flex flex-col">
                                <div className="mb-2 flex flex-row items-center">
                                    <div className="w-2.5 h-2.5 bg-red-500 rounded-full mr-2 "></div> {/* Small circle */}
                                    <span className="text-xs">{data.pending} Task Pending</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full mr-2"></div> {/* Small circle */}
                                    <span className="text-xs">{data.complete} Task Completed</span>
                                </div>

                            </div>
                        </span>

                        <div className="mb-4 text-sm">
                            <h3 className="">Campaign Description:</h3>
                            <p className="text-gray-600 mt-2">{data.details.description}</p>
                        </div>
                        <div className="mb-4 flex flex-row">
                            <div className="mr-4 flex flex-row ">
                                <h3 className="text-sm">Platforms:</h3>
                                <ul className="list-inside space-x-2 flex flex-row">
                                    {data.details.platforms ? (
                                        data.details.platforms.map((platform, index) => (
                                            <li key={index} className="mr-2 ml-2">
                                                <img src={platformLogos[platform]} alt={platform} className="w-5" />
                                            </li>
                                        ))
                                    ) : (
                                        <li>No platforms available</li>
                                    )}
                                </ul>

                            </div>
                            <div className="flex flex-row space-x-3">
                                <p className="md:ml-3 text-sm ">Start Date: {data.details.start_date}</p>
                                <hr className="border-r border-black h-full ml-4" />

                                <p className="text-sm">End Date: {data.details.end_date}</p>
                            </div>
                        </div>

                    </div>
                ))}
            </div>    </div>
    )
}

export default Inprogress
