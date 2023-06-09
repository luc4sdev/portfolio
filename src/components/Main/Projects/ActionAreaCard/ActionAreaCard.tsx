import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import avatar from '../../../../assets/avatar.jpg'

interface Project {
  id: number;
  title: string;
  description: string;
  src: string;
  url: string;
}
interface ActionAreaCardProps {
  projects: Project[];
}


export function ActionAreaCard({ projects }: ActionAreaCardProps) {

  function handleClick(url: string) {
    window.open(url, '_blank')
  }

  return (
    <>
    {projects.map(project => {
      return (
        <div className="w-full" onClick={() => handleClick(project.url)}>
          <Card key={project.id} sx={{ backgroundColor: '#262626' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                style={{ height: '250px' }}
                image={project.src}
                alt={project.title}
              />
              <CardContent style={{ minHeight: '300px' }}>
                <Typography style={{ color: '#ffff' }} fontFamily="Poppins" gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography style={{ color: '#ffff' }} lineHeight={2} fontFamily="Poppins" variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      )
    })}
    </>
  );
}
