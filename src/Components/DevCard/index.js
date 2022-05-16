import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { StyledDev } from './style'

const DevCard = ({ fig, name, links, role }) => {
    return (
        <StyledDev>
            <div className='container'>
                <img src={fig} alt="Foto do dev" />
            </div>
            <p>{name}</p>
            <span>{role}</span>
                <div className='links'>
                    <a href={links[0]} target="_blank" rel="noopener noreferrer"><BsLinkedin size={25} /></a>
                    <a href={links[1]} target="_blank" rel="noopener noreferrer"><BsGithub size={25} /></a>
                </div>
        </StyledDev>
    )
}

export default DevCard