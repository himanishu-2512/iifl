export default function Cards(){
    return(
<div className="cards">
    <div className="card-outside-content">and also get these benefits</div>
    <div className="card-container">
        <div className="first-card card">
            <div className="card-inside">
                <div className="card-inside-content">
                    <div className="txt">Manage complete portfolio on the IIFL Markets App</div>
                    <div id="first-card-img"></div>
                </div>
            </div>
        </div>
        <div className="second-card card">
            <div className="card-inside">
                <div className="card-inside-content">
                    <div className="txt">One tap access to all types of investments</div>
                    <div id="second-card-img">
                        <div className="div"><p>Stocks</p><p>Futures and Options</p></div>
                        <div className="div"><p>IPOs</p><p>Mutual Fund</p></div>
                        <div className="div"><p>Global Investing</p><p>ETF</p><p>Bonds</p></div>
                        <div className="div"><p>Gold</p></div>
                    </div>
                </div>

            </div>
            <div className="arrow"></div>
        </div>
        <div className="third-card card">
            <div className="card-inside">
                <div className="card-inside-content card">
                    <div id="third-card-img"></div>
                </div>
            </div>
        </div>
    </div>
</div>)
}