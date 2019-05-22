import React from "react"

class Item extends React.Component
{
    constructor(props)
    {
        super(props);
        console.log('dum',this.props.dummy);
    }
    renderText(text)
    {
       if(text!=null){
           const txt=text.map((t)=>{
               
               return(
                   <div className="App">
                       <p>{t.title}</p>
                       <p>{t.value}</p>
                   </div>
               )
           })
           return(<div>{txt}</div>)
       }
       else {
        return <div ></div>;
      }
    }
    renderData(attachments){
        console.log("In render data")
        // if(attachments!=null){ 
        //     const attchcomp=attachments.find(attach=>{
        //         console.log("attach",attachments[0].text)
        //         return(<div> {attach.author_name}</div>)
               
            // return(
            //     <div className="App">
            //    <p>{attachments[0].author_name}</p> 
            //    <p>{attachments[0].title}</p>
               
            //    <p>{attachments[0].text}</p> 
            //     </div>
            // )
        // })
        // return <div>{attchcomp}</div>}
        // else {
        //     return <div ></div>;
        //   }
       for(let i=0;i<1;i++)
       {
        const val1=this.props.dummy[0].attachments[0].fields
        const attchcomp=attachments.reduce(()=>{
                    console.log("attach",attachments[1].image_url)
                    
                   
                return(<div className="App">
                    <div >
                   <p>{attachments[i].author_name}</p> 
                   <p>{attachments[i].title}</p>
                   
                   <p>{attachments[i].text}</p> </div>
                   <div><p>{this.renderText(val1)}</p>
                    </div>
                    <div >
                    <p>{attachments[1].text}</p>
                    <img src={attachments[1].image_url}></img>
                    
                    </div>
                    
                    </div>

                )
            })
            return <div>{attchcomp}</div>}
        }
    
    
    render(){
        const val=this.props.dummy[0].attachments
        //const val1=this.props.dummy[0].attachments[0].fields
       //console.log("val1",val1)
        console.log("val",val)
        if(val==null){
            return <div></div>
        }
        // if(val1==null){
        //     return <div></div>
        // }
        const data=this.props.dummy.map((d)=>{
            return(
                <div className="App">{d.text}
                
                </div>

            )
        }) 
        
        
        return(<div>
            {data}
            {this.renderData(val)}
            {/* {this.renderText(val1)}  */}
            </div>)
    }
}
export default Item