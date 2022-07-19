function AreYouSure({ handleDirectBook }){
    return(
        <div className="padding-10px">
            <div className="heading-1 text-bold green-text">Are you sure?</div><br/>
            <button className="green-button" onClick={handleDirectBook}>Yes</button>
            <button className="white-button margin-left-30px">No</button>
        </div>
    );
}

export default AreYouSure