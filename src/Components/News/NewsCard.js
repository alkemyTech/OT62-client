import React from "react";
import { useNavigate } from "react-router-dom";

const NewsCard = ({element}) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="grid grid-cols-2 rounded-2xl bg-light-blue border-[1px] border-dark-blue max-w-[448px] min-w-[448px] max-h-[233px] min-h-[233px] text-xs items-center shadow-xl">
                <div className="flex max-w-full h-full justify-center items-center p-[16px]">
                    <img className="rounded-2xl h-full w-full object-cover" src={element.image} alt={element.name}/>
                </div>
                <div className="flex flex-col h-full justify-between p-[16px] pl-0">
                    <p></p>
                    <p className="text-left h-2/4 line-clamp-[6] font-medium">{element.content}</p>
                    <button className="bg-dark-blue rounded-lg text-white h-9 shadow-xl hover:bg-blue-800" onClick={() => navigate(`/news/${element.id}`)}>Ver novedad</button>
                </div>
            </div>
        </>
    )
}

export default NewsCard;