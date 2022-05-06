import React from "react"
function Top10(){
    return (
        <div>
            <div>
                <Card sx={{ borderRadius: "40px", minWidth: 500, maxWidth: 50, minHeight: 500, maxHeight: 600, border: "4px solid #e2b714" }}>
                    <CardContent style={{ backgroundColor: "white" }}>
                        <div className='div3' id='top neg'>

                            <h1> Top ten negative Comments </h1>
                            {top_negc.map(name => (
                                <li>
                                    {name}
                                </li>
                            ))}

                        </div> </CardContent>
                </Card>


            </div>
            <div>


                <Card sx={{ borderRadius: "40px", minWidth: 500, maxWidth: 50, minHeight: 500, maxHeight: 600, border: "4px solid #e2b714" }}>
                    <CardContent style={{ backgroundColor: "white" }}>
                        <div className='div4' id='top pos'>

                            <h1> Top ten Postive Comments </h1>
                            {top_posc.map(name => (
                                <li>
                                    {name}
                                </li>
                            ))}
                        </div></CardContent></Card>


            </div>
            <div className='div5'>
                <h1> Comment sentiment analysis on your video  </h1>
            </div>




        </div>

)


}

export default Top10;
