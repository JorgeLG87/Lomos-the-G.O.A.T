import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';

const data = [
  {
    src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
    title: 'Night view',
    description: '4.21M views',
  },
  {
    src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
    title: 'Lake view',
    description: '4.74M views',
  },
  {
    src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
    title: 'Mountain view',
    description: '3.98M views',
  },
];

const aboutUsSlides = [
    { url: "/team1.jpg", title:"Team hands"},
    { url: "/team2.jpg", title: "Team posing for photo"},
    { url: "/team3.webp", title: "Team in the kitchen"}
  ]

export default function AboutUsMUICarousel() {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        // py: 1,
        overflow: 'auto',
        width: "100%",
        height: "115%",
        justifyContent: 'center',
        padding: 0,
        scrollSnapType: 'x mandatory',
        '& > *': {
          scrollSnapAlign: 'center',
        },
        '::-webkit-scrollbar': { display: 'none' },
      }}
    >
      {aboutUsSlides.map((item) => (
        <Card orientation="horizontal" size="lg" key={item.title} variant="none" sx={{boder: "none", outline: "none", backgroundColor: "white", padding: 0}}>
          <AspectRatio ratio="1" sx={{ minWidth: 300, padding: 2 }}>
            <img
              srcSet={`${item.url}?h=120&fit=crop&auto=format&dpr=2 2x`} 
              src={`${item.url}?h=120&fit=crop&auto=format`}
              alt={item.title}
            //   style={{width: "100px"}}
            />
          </AspectRatio>
          {/* <Box sx={{ whiteSpace: 'nowrap', mx: 1 }}>
            <Typography level="title-md">{item.title}</Typography>
            <Typography level="body-sm">{item.description}</Typography>
          </Box> */}
        </Card>
      ))}
    </Box>
  );
}
