import React, { useState } from "react";
import Home from "../../Containers/Home/Home";
import '../../Assets/Styles/Home/Search.scss'
import { Search } from "react-bootstrap-icons";

function HomeSearch(){

  const [time, setTime] = useState('')

    const sportOptions = [
        {
          label: "Sport",
          value: "",
        },
        {
          label: "Sport1",
          value: "sport1",
        },
        {
          label: "Sport2",
          value: "sport2",
        },
        {
          label: "All sports",
          value: "all",
        },
    ];

    const cityOptions = [
        {
          label: "City",
          value: "",
        },
        {
          label: "City1",
          value: "city1",
        },
        {
          label: "City2",
          value: "city2",
        },
        {
          label: "All cities",
          value: "all",
        },
    ];

    const stateOptions = [
        {
          label: "State",
          value: "",
        },
        {
          label: "State1",
          value: "state1",
        },
        {
          label: "State2",
          value: "state2",
        },
        {
          label: "All states",
          value: "all",
        },
    ];

    const bookingTypeOptions = [
        {
          label: "Booking type",
          value: "",
        },
        {
          label: "BookingType1",
          value: "bookingType1",
        },
        {
          label: "BookingType2",
          value: "bookingType2",
        },
        {
          label: "All booking types",
          value: "all",
        },
    ];
    const _onFocusDate = (e) => {
      e.currentTarget.type = "date";
    }
    const _onBlurDate = (e) =>{
        e.currentTarget.type = "text";
    }
    const _onFocusTime = (e) => {
        e.currentTarget.type = "time";
    }
    const _onBlurTime = (e) =>{
        e.currentTarget.type = "text";
    }

    return(
        <div className="home-search-container">
            <div className="home-search-title">Play, righ away</div>
            <div className="home-search-items">
                <input type="text" placeholder="Dates" onFocus={(e)=>{_onFocusDate(e)}} onBlur={(e)=>{_onBlurDate(e)}} className="home-search-item"/>
                <input type="text" placeholder="Time" onFocus={(e)=>{_onFocusTime(e)}} onBlur={(e)=>{_onBlurTime(e)}} className="home-search-item"/>
                <select className="home-search-item">
                    {sportOptions.map((option,index) => (
                      <>
                      {index === 0 ?
                        <option value={option.value} disabled selected hidden>{option.label}</option>
                        :
                        <option value={option.value}>{option.label}</option>
                      }
                      </>
                    ))}
                </select>
                <select className="home-search-item">
                    {cityOptions.map((option,index) => (
                      <>
                      {index === 0 ?
                        <option value={option.value} disabled selected hidden>{option.label}</option>
                        :
                        <option value={option.value}>{option.label}</option>
                      }
                      </>
                    ))}
                </select>
                <select className="home-search-item">
                    {stateOptions.map((option,index) => (
                      <>
                      {index === 0 ?
                        <option value={option.value} disabled selected hidden>{option.label}</option>
                        :
                        <option value={option.value}>{option.label}</option>
                      }
                      </>
                    ))}
                </select>
                <select className="home-search-item">
                    {bookingTypeOptions.map((option,index) => (
                      <>
                      {index === 0 ?
                        <option value={option.value} disabled selected hidden>{option.label}</option>
                        :
                        <option value={option.value}>{option.label}</option>
                      }
                      </>
                    ))}
                </select>
                <button className="home-search-button">
                    Search <Search className="home-search-button-icon"/>
                </button>
            </div>
        </div>
    );
}

export default HomeSearch