import React from "react";
import '../../Assets/Styles/HomeSearch/HomeSearch.scss'
import { Search } from "react-bootstrap-icons";

const HomeSearch = ({ setParams, params, search }) => {

  const sportOptions = [
      {
        label: "Sport",
        value: "",
      },
      {
        label: "Football",
        value: "football",
      },
      {
        label: "Basketball",
        value: "basketball",
      }
  ];

  const cityOptions = [
      {
        label: "City",
        value: "",
      },
      {
        label: "Nis",
        value: "Nis",
      },
      {
        label: "Beograd",
        value: "Beograd",
      },
      {
        label: "Kragujevac",
        value: "Kragujevac",
      },
  ];

  const stateOptions = [
      {
        label: "State",
        value: "",
      },
      {
        label: "Serbia",
        value: "Serbia",
      }
  ];

  const bookingTypeOptions = [
      {
        label: "Booking type",
        value: "",
      },
      {
        label: "Available",
        value: "available",
      },
      {
        label: "Group",
        value: "group",
      }
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
        <h1>Play, righ away</h1>
        <div className="home-search-items">
            <input 
              type="text" 
              placeholder="Dates"
              //value={params.hasOwnProperty('date') ? params['date'] : ''} 
              onFocus={(e)=>{_onFocusDate(e)}} 
              onBlur={(e)=>{_onBlurDate(e)}} 
              onChange={(e) => setParams({...params, ['date']: e.target.value})} className="home-search-item"/>

            <input 
              type="text" 
              placeholder="Time"
              //value={params.hasOwnProperty('time') ? params['time'] : ''}
              onFocus={(e)=>{_onFocusTime(e)}} 
              onBlur={(e)=>{_onBlurTime(e)}} 
              onChange={(e) => setParams({...params, ['time']: e.target.value})} className="home-search-item"/>
            
            <select className="home-search-item" onChange={(e) => setParams({...params, ['sport']: e.target.value})}>
                {sportOptions.map((option,index) => (
                  <>
                  {index === 0 ?
                    <option value={option.value} disabled selected hidden key={index}>{option.label}</option>
                    :
                    <option 
                      value={option.value} 
                      //selected={params.hasOwnProperty('sport') ? option.value == params['sport'] ? true : false : false} 
                      key={index}>{option.label}</option>
                  }
                  </>
                ))}
            </select>
            <select className="home-search-item" onChange={(e) => setParams({...params, ['city']: e.target.value})}>
                {cityOptions.map((option,index) => (
                  <>
                  {index === 0 ?
                    <option value={option.value} disabled selected hidden key={index}>{option.label}</option>
                    :
                    <option 
                      value={option.value} 
                      //selected={params.hasOwnProperty('city') ? option.value == params['city'] ? true : false : false}
                      key={index}>{option.label}</option>
                  }
                  </>
                ))}
            </select>
            <select className="home-search-item" onChange={(e) => setParams({...params, ['state']: e.target.value})}>
                {stateOptions.map((option,index) => (
                  <>
                  {index === 0 ?
                    <option value={option.value} disabled selected hidden key={index}>{option.label}</option>
                    :
                    <option 
                      value={option.value} 
                      //selected={params.hasOwnProperty('state') ? option.value == params['state'] ? true : false : false}
                      key={index}>{option.label}</option>
                  }
                  </>
                ))}
            </select>
            <select className="home-search-item" onChange={(e) => setParams({...params, ['bookingType']: e.target.value})}>
                {bookingTypeOptions.map((option,index) => (
                  <>
                  {index === 0 ?
                    <option value={option.value} disabled selected hidden key={index}>{option.label}</option>
                    :
                    <option 
                      value={option.value} 
                      //selected={params.hasOwnProperty('bookingType') ? option.value == params['bookingType'] ? true : false : false}
                      key={index}>{option.label}</option>
                  }
                  </>
                ))}
            </select>
            <button className="home-search-button" onClick={() => search(params)}>
                Search <Search className="home-search-button-icon"/>
            </button>
        </div>
      </div>
    );
}

export default HomeSearch