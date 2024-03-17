import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Record } from 'phosphor-react';


interface Project {
  id: number;
  title: string;
  description: string;
  src: string;
  url: string;
  live?: boolean;
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
        <div key={project.id} className="w-full hover:transition-all delay-150 hover:scale-110" onClick={() => handleClick(project.url)}>
          <Card sx={{ backgroundColor: '#262626' }}>
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
                <Typography style={{ color: '#ffff' }} lineHeight={1.8} fontFamily="Poppins" variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
            
                 {project.live && (
                   <div className='absolute bottom-0 mb-2 flex justify-start items-center gap-1' style={{ color: 'red' }}>
                   <Record size={24} color='red' className='animate-pulse' />Live Preview
                 </div>
                 )}
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      )
    })}
    </>
  );
}
