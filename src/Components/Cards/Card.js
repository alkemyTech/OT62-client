import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({element, title}) => {
    const navigate = useNavigate();
        switch (title) {
            case 'new':
                return (
                    <div className="grid grid-rows-2 rounded-2xl bg-light-blue border-[1px] border-dark-blue max-w-[448px] max-h-[233px] min-h-[233px] text-xs items-center shadow-xl overflow-hidden xss:flex xss:flex-row">
                        <div className="flex max-w-full h-full justify-center items-center w-full xss:p-[16px] xss:shrink-0 xss:w-1/2">
                            <img className="h-full w-full object-cover xss:rounded-2xl" src={element.image} alt={element.name}/>
                        </div>
                        <div className="flex flex-col h-full justify-between px-[16px] pb-[16px] xss:p-[16px]">
                            <p></p>
                            <p className="text-left h-2/4 line-clamp-[6] font-medium">{element.content}</p>
                            <button className="bg-dark-blue rounded-lg text-white h-9 shadow-xl hover:bg-blue-800" onClick={() => navigate(`/news/${element.id}`)}>Ver novedad</button>
                        </div>
                    </div>
                )
            case 'testimonial':
                return (
                    <div className="rounded-2xl bg-[#FDFFA4] border-[1px] border-[#F9FE00] max-w-[212px] min-w-[212px] max-h-[254px] min-h-[254px] text-xs items-center shadow-xl p-4">
                        <img className="object-cover w-[75px] h-[75px] rounded-full" src={element.image} alt={element.name}/>
                        <p className="font-semibold text-base">{element.name}</p>
                        <p className="text-left h-2/4 line-clamp-[6] font-medium">{element.content}</p>
                    </div>
                )
            case 'member': 
                return (
                    <div className="rounded-2xl border-[1px] max-w-[212px] min-w-[212px] max-h-[234px] min-h-[234px] text-xs shadow-xl bg-cover flex flex-col justify-end pb-5 text-center" style={{backgroundImage: `url(${element.image})`}}>
                        <p className="font-bold text-white text-2xl">{element.name}</p>
                        <p className="text-white font-bold">{element.rol}</p>
                    </div>
                )
            case 'activity':
                return (
                    <div className="grid grid-cols-2 rounded-2xl bg-light-blue border-[1px] border-dark-blue max-w-[448px] min-w-[448px] max-h-[233px] min-h-[233px] text-xs items-center shadow-xl">
                        <div className="flex max-w-full h-full justify-center items-center p-[16px]">
                            <img className="rounded-2xl h-full w-full object-cover" src={element.image} alt={element.name}/>
                        </div>
                        <div className="flex flex-col h-full justify-between p-[16px] pl-0">
                            <p></p>
                            <p className="text-left h-2/4 line-clamp-[6] font-medium">{element.content}</p>
                            <button className="bg-dark-blue rounded-lg text-white h-9 shadow-xl hover:bg-blue-800" onClick={() => navigate(`/activities/${element.id}`)}>Ver actividad</button>
                        </div>
                    </div>
                )
            default:
                break;
        }
}

export default Card;