import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box } from '@mui/material';
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
    window.open(url, '_blank');
  }

  return (
    <>
      {projects.map((project) => (
        <Card
          key={project.id}
          sx={{
            backgroundColor: '#262626',
            borderRadius: '8px',
            overflow: 'hidden',
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
            },
            cursor: 'pointer',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
          onClick={() => handleClick(project.url)}
        >
          <CardActionArea sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              sx={{ height: '200px', objectFit: 'cover' }}
              image={project.src}
              alt={project.title}
            />
            <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Box>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ color: '#fff', fontFamily: 'Poppins', fontWeight: 'bold', mb: 1 }}
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: '#d1d5db', fontFamily: 'Poppins', lineHeight: 1.6 }}
                >
                  {project.description}
                </Typography>
              </Box>
              {project.live && (
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    mt: 2,
                    color: 'red',
                  }}
                >
                  <Record size={20} color="red" className="animate-pulse" />
                  <Typography variant="body2" sx={{ color: 'red', fontFamily: 'Poppins' }}>
                    Live Preview
                  </Typography>
                </Box>
              )}
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </>
  );
}