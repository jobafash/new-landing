import { useState, useEffect } from 'react'
import { Faqs } from './components/faq'
import { DashLookUp } from './components/lookup'
import JsonData from './data/data.json'

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  const navStyle = {
    display: 'flex',
    justifyContent: 'center'
  };

  const divStyle = {
    marginTop: '70px',
    marginLeft: '70px',
    marginRight: '70px',
    marginBottom: '70px',
    height: '400px'
  };

  const pStyle = {
    position: 'relative',
    margin: '0 0 20px 0',
    fontWeight: '300',
    fontSize: '20px',
    color: '#333'
  };

  const ButtonStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '3vw',
    padding: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 5,
    color: 'green',
    // ":hover": {
    //   backgroundColor: "blue"
    // },
  }

  const inputStyle = {
    width: "100%",
    paddingLeft: "8px",
    paddingTop: "6px",
    paddingBottom: "6px",
    marginTop: "10px",
    // border: this.state.error
    //   ? "2px solid red"
    //   : this.state.value
    //   ? "2px solid #2684ff"
    //   : "2px solid hsl(0, 0%, 80%)",
    outline: "0px",

    "&:hover": {
      border: "2px solid green"
    }
  }

  const colourStyles = {
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    display: 'block',
    width: '100%',
    maxWidth: '320px',
    height: '30px',
    float: 'right',
    margin: '5px 0px',
    padding: '0px 24px',
    fontSize: '15px',
    lineHeight: '1.75',
    color: '#333',
    backgroundColor: '#ffffff',
    backgroundImage: 'none',
    border: '1px solid #cccccc',
    msWordBreak: 'normal',
    wordBreak: 'normal',
  }

  const [boVal, setBoVal] = useState('')

  return (
    <div>
      <h3 className='text-center'>What are you loking to do today?</h3>
      <nav style={navStyle}>
        <div style={divStyle}>
          <p style={pStyle}>BO View</p>
          <input type="text" style={inputStyle} value={boVal} onChange={e => setBoVal(e.target.value)} placeholder="Search BO" />
          <br />
          <br />
          <input type="button" style={ButtonStyle} value="Go" disabled={!boVal} />
        </div>
        <div style={divStyle}>
          <p style={pStyle}>TL Summary</p>
          <input type="button" style={ButtonStyle} value="Go" />
        </div>
        <div style={divStyle}>
          <p style={pStyle}>What if</p>
          <select style={colourStyles} name="what-if" id="what-if">
            <option value="Joba">Joba</option>
            <option value="Fash" selected="selected">Fash</option>
          </select>
          <br />
          <br />
          <input type="text" style={inputStyle} name="what-if" id="what-if-view" placeholder="Search What-if" />
          <br />
          <br />
          <input type="button" style={ButtonStyle} value="Go" disabled="disabled" />
        </div>
      </nav>
      <Faqs data={landingPageData.Faqs} />
      <DashLookUp data={landingPageData.Lookup} />
    </div>
  );
}

export default App
