import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSports, putSport } from "../../../../redux/actions/sportsActions";
import style from "./List.module.css";
import loading from '../../../../assets/images/giphy.gif'
import Image from "next/image";
import { filterSports } from "../../../../redux/features/sportsSlice";

export const List = ({setCurrent}) => {
  const colums = ["name", ""];
  const [filter, setFilter] = useState({
    search: "",
    isAct: "all"
  })
  const dispatch = useDispatch();
  const sports = useSelector((state) => state.sports.sportsCopy);
  const [get, setGet] = useState("pending")
  
  const getPag = async()=>{
    await dispatch(getSports())
    setGet("resolv")
  }

  useEffect(() => {
    getPag()
  }, []);

  useEffect(()=>{
    dispatch(filterSports(filter))
  },[filter])


  const handleChange =(e)=>{
    setFilter({
      ...filter,
      [e.target.name] : e.target.value
    })
  }

    const handleDesactiv= async (id)=>{
    const resp = await dispatch(putSport({id: id, isActive : false}))
    if (resp.meta.requestStatus == "rejected") {
      alert("Could not cancel the sport");
    } else {
      alert("Sport successfully discharged!")
      dispatch(getSports())
    }
  }

  const handleAcitv= async (id)=>{
    const resp = await dispatch(putSport({id: id, isActive : true}))
    if (resp.meta.requestStatus == "rejected") {
      alert("Could not activate the sport");
    } else {
      alert("Sport successfully activated!")
      dispatch(getSports())
    }
  }


  return (
    <div className={`container mx-auto px-4 sm:px-8 ${style.container}`}>
      <div className="py-8">
        <div className="my-2 flex sm:flex-row flex-col">
          <div className="flex flex-row mb-1 sm:mb-0">
            <div className="relative">
              <select onClick={(e)=>handleChange(e)} name="isAct" className="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
          <div className="block relative">
            <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-current text-gray-500"
              >
                <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
              </svg>
            </span>
            <input
            onChange={(e)=>handleChange(e)}
            value={filter.search}
            name="search"
              placeholder="Search"
              className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
            />
          </div>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div
            className={`inline-block shadow rounded-lg overflow-hidden ${style.table}`}
          >
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  {colums.map((col) => {
                    return (
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        {col}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
              { get == "pending"? <Image className={style.loading} src={loading} alt="gif" /> :
              sports?.length? 
                sports.map(({ name, id, isActive }) => {
                  return (
                    <tr key={id}>
                      <td className={`px-5 py-5 bg-white ${style.name}`}>
                        <p className="font-medium text-gray-800 dark:text-white">
                          {name}
                        </p>
                      </td>
                      <td className={`px-5 py-5 bg-white ${style.edit}`}>
                        <button onClick={()=>setCurrent(id)} className=" bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded-full">
                          edit
                        </button>
                        {isActive? 
                        <button onClick={()=>handleDesactiv(id)} className=" bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-4 rounded-full">
                          desactivar
                        </button>
                         :
                         <button onClick={()=>handleAcitv(id)} className=" bg-green-500 hover:bg-green-400 text-white font-semibold py-2 px-4 rounded-full">
                          activar
                        </button>
                         }
                        
                      </td>
                    </tr>
                  )
                }) : <h1 className={style.not}>No existen deportes</h1>} 
              </tbody>
            </table>
            <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
              <div className="inline-flex mt-2 xs:mt-0">
                <button onClick={()=> setCurrent("form")} className={style.addSport}>
                  Add Sport
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
