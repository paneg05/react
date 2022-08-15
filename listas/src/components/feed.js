import React, {Component} from "react";

class Feed extends Component{
    constructor(props){
        super(props)
        this.state={
            feed:[
                {id:1, userName:'luan', curtidas:2, comentarios:3},
                {id:2,userName:'lucas', curtidas:120, comentarios:300},
                {id:3, userName: 'amanda', curtidas: 500, comentarios:1000},
                {id:4, userName: 'marcos', curtidas:1, comentarios:0}
              ]
        }

    }

    render(){
        return(
            <div>
                {
                    this.state.feed.map((el)=>{
                    return(
                        <div key={el.id}>

                        <h3>{el.userName}</h3>
                        <a href="#">{el.curtidas}{el.curtidas <=1? ' curtida':' curtidas'}  / {el.comentarios} {el.comentarios <= 1? ' comentário':' comentários'} </a>
                        
                        </div>
                    )
                    })
                }
            </div>
        )
    }
}

export default Feed