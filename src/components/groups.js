import React from 'react'

const Groups = ({ name, data, description }) =>(
    <div className="tile is-ancestor is-vertical">
                    <div className="tile is-parent">
                        <div className="tile is-child box">
                            <div className="tile is-ancestor is-vertical">
                                <div className="tile is-parent is-vertical">
                                    <p className="title">{name}</p>
                                    {description}
                                </div>
        <div className="columns is-multiline">
    {data.edges.map(({node})=>(
        <div className="column is-4" key={node.id}>
            <div className="tile is-child box">
                <p className="subtitle">{node.name}</p>
                {node.website?<a href={node.website}>Website </a> :null}
                {node.telegram?<a href={node.telegram}>Telegram </a> :null}
                {node.twitter?<a href={node.twitter}>Twitter </a> :null}
                {node.GitHub?<a href={node.GitHub}>GitHub </a> :null}
                {node.instagram?<a href={node.instagram}>Instagram </a> :null}
                {node.facebook?<a href={node.facebook}>Facebook </a> :null}
                {node.meetup?<a href={node.meetup}>Meetup </a> :null}
            </div>
        </div>
    ))}
    </div>
    </div>
    </div>
    </div>
    </div>
)

export default Groups