import React from "react";
import { useNavigate } from "react-router-dom";

const LastDataLayout = ({ children, route, title }) => {
    const navigate = useNavigate();

    return (
        <div className="max-w-[1156px] flex flex-col m-6 md:min-w-[900px]">
          <div className="flex justify-between mb-4 gap-4">
            <h2 className="text-2xl font-bold">{title}</h2>
            <button onClick={() => navigate(route)} className="text-sm text-gray-500 my-2 font-bold">Ver todos &gt;</button>
          </div>
          { children }
        </div>
    )
}

export default LastDataLayout;