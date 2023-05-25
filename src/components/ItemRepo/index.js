import React from 'react'

import { ItemContainer, LineIndicator } from './styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DeleteIcon from '@material-ui/icons/Delete';
import GitHubIcon from '@material-ui/icons/GitHub';

function ItemRepo({repo, handleRemoveRepo}) {
 
  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <>
      <ItemContainer>
          <div>
            <img src={repo.avatar_url} alt={`image repository` + repo.name} />
          </div>
          <div>
            <h3>{repo.name}</h3>
            <p>{repo.company}</p> 
            <p>Bio: {repo.bio}</p>          
          </div>
          <div>
            <a href={repo.blog} rel="noreferrer" target="_blank"><LinkedInIcon style={{color: '#fff'}}/></a><br />
            <a href={repo.html_url} rel="noreferrer" target="_blank"><GitHubIcon style={{color: '#fff'}}/></a><br />
            <a onClick={handleRemove} href="#" rel="noreferrer" className="remover"><DeleteIcon/></a>
          </div>
      </ItemContainer>
      <LineIndicator/>
    </>
    
  )
}

export default ItemRepo;
