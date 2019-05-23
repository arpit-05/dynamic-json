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
                   <div>
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

    renderActions(action){
        if(action!=null){
            console.log("action",action)
            const act=action.map((a)=>{
                return(
                    

                    <div className="App">
                    
                        <input type={a.type} value={a.text}  className="button"></input>
                    </div>
                )
            })
            return act
        }
        
    }
    renderData(attachments){
        console.log("In render data")
       
       for(let i=0;i<1;i++)
       {
           const val2=this.props.dummy[0].attachments[3].actions
        const val1=this.props.dummy[0].attachments[0].fields
        const attchcomp=attachments.reduce(()=>{
                    console.log("attach",attachments[1].image_url)
                    console.log("actions",attachments[3])
                   
                return(<div>
                    <div >
                   <p>{attachments[i].author_name}</p> 
                   <p>{attachments[i].title}</p>
                   
                   <p>{attachments[i].text}</p> </div>
                   <div><p>{this.renderText(val1)}</p>
                    </div>
                    <div >
                    <p>{attachments[1].text}</p>
                    <img src={attachments[1].image_url}></img>
                    <p>{attachments[2].text}</p>
                    <img src={attachments[2].image_url}></img>
                    <div><p>{this.renderActions(val2)}</p></div>
                    <div><a href={attachments[3].footer_url}>{attachments[3].footer}</a></div>
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
        console.log("val",val[2].text)
        if(val==null){
            return <div></div>
        }
        // if(val1==null){
        //     return <div></div>
        // }
        const data=this.props.dummy.map((d)=>{
            return(
                <div>{d.text}
                
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