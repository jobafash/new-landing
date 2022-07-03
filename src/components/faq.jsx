export const Faqs = (props) => {
    const inputStyle = {
        width: "20%",
        paddingLeft: "8px",
        paddingTop: "6px",
        paddingBottom: "6px",
        marginRight: "10px",
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

    const ButtonStyle = {
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

    return (
        <div id='faqs' className='text-center'>
            <div className='container'>
                <div className='section-title'>
                    <h2>FAQs</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
                        dapibus leonec.
                    </p>
                    <input style={inputStyle} type="text" name="search" id="search-id" placeholder="Search for .." />
                    <input type="button" style={ButtonStyle} value="Go" />
                </div>
                <div>
                    {props.data
                        ? props.data.map((d, i) => (
                            <div key={`${d.name}-${i}`}>
                                {' '}
                                <div>
                                    <h3>{d.name}</h3>
                                    <p>{d.text}</p>
                                </div>
                            </div>
                        ))
                        : 'loading'}
                </div>
            </div>
        </div>
    )
}
