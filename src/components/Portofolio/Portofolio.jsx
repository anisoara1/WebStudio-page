import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Container,
  MenuList,
  Typography,
} from '@mui/material';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material';
import css from '../Portofolio/Portofolio.module.css';

export const Portofolio = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  const [isHovered7, setIsHovered7] = useState(false);
  const [isHovered8, setIsHovered8] = useState(false);
  const [isHovered9, setIsHovered9] = useState(false);
  const theme = useTheme();
  const cardShadow =
    theme.palette.mode === 'light'
      ? '0px 3px 6px 3px rgba(33,33,33,0.3)'
      : '0px 3px 6px 3px rgba(255,255,255,0.3)';
  return (
    <Container maxWidth="100%" disableGutters>
      <Box
        padding="0"
        sx={{
          padding: '20vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          gap: '5vh',
        }}
      >
        <MenuList className={css.mediaList} sx={{ margin: '-2vh 0 3vh 0 ' }}>
          <Button
            size="small"
            className={css.mediaBtn}
            sx={{
              color: '#212121',
              bgcolor: '#F5F4FA',
              padding: '1vh 3vh 1vh 3vh',
              '&:hover': {
                bgcolor: '#2196F3',
                color: '#FFFFFF',
              },
            }}
          >
            <p className={css.mediaText}>All</p>
          </Button>
          <Button
            size="small"
            className={css.mediaBtn}
            sx={{
              color: '#212121',
              bgcolor: '#F5F4FA',
              padding: '1vh 3vh 1vh 3vh',
              '&:hover': {
                bgcolor: '#2196F3',
                color: '#FFFFFF',
              },
            }}
          >
            <p className={css.mediaText}> Web-sites</p>
          </Button>
          <Button
            size="small"
            className={css.mediaBtn}
            sx={{
              color: '#212121',
              bgcolor: '#F5F4FA',
              padding: '1vh 3vh 1vh 3vh',
              '&:hover': {
                bgcolor: '#2196F3',
                color: '#FFFFFF',
              },
            }}
          >
            <p className={css.mediaText}> Apps</p>
          </Button>
          <Button
            size="small"
            className={css.mediaBtn}
            sx={{
              color: '#212121',
              bgcolor: '#F5F4FA',
              padding: '1vh 3vh 1vh 3vh',
              '&:hover': {
                bgcolor: '#2196F3',
                color: '#FFFFFF',
              },
            }}
          >
            <p className={css.mediaText}> Design</p>
          </Button>
          <Button
            size="small"
            className={css.mediaBtn}
            sx={{
              color: '#212121',
              bgcolor: '#F5F4FA',
              padding: '1vh 3vh 1vh 3vh',
              '&:hover': {
                bgcolor: '#2196F3',
                color: '#FFFFFF',
              },
            }}
          >
            <p className={css.mediaText}> Marketing</p>
          </Button>
        </MenuList>
        <Box
          sx={{
            display: 'grid',
            gap: 6,
            gridTemplateColumns: 'repeat(3, 10fr)',
            /*  boxShadow: cardShadow, */
          }}
        >
          <Card
            variant="outlined"
            sx={{
              display: 'flex',
              gap: 2,
              flexDirection: 'column',
              cursor: 'pointer',
              '&:hover': { boxShadow: cardShadow },
            }}
            className={css.cardItem}
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() => setIsHovered1(false)}
          >
            <Box
              sx={{
                width: '52vh',
                height: '42vh',
                position: 'relative',
                overflow: 'hidden',
              }}
              className={css.firstImg}
            >
              <div
                className={css.hoverOverlay}
                style={{
                  transform: isHovered1 ? 'translateY(0)' : 'translateY(100%)',
                }}
              >
                <Typography
                  sx={{ padding: '6vh 10vh 12vh 4vh' }}
                  className={css.textOveraly}
                >
                  Technoduck is a state-of-the-art coronavirus distribution
                  platform. Companies use this platform for digital espionage
                  and attacks on competitors' secure servers.
                </Typography>
              </div>
            </Box>
            <CardContent>
              <h3 className={css.title}>Technoduck</h3>
              <p className={css.text}>Web-site</p>
            </CardContent>
          </Card>
          <Card
            variant="outlined"
            sx={{
              display: 'flex',
              gap: 2,
              flexDirection: 'column',
              cursor: 'pointer',
              '&:hover': { boxShadow: cardShadow },
            }}
            className={css.cardItem}
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
          >
            <Box
              sx={{
                width: '52vh',
                height: '42vh',
                position: 'relative',
                overflow: 'hidden',
              }}
              className={css.secondImg}
            >
              <Box
                className={css.hoverOverlay}
                style={{
                  transform: isHovered2 ? 'translateY(0)' : 'translateY(100%)',
                }}
              >
                <Typography
                  sx={{ padding: '6vh 10vh 12vh 4vh' }}
                  className={css.textOveraly}
                >
                  Technoduck is a state-of-the-art coronavirus distribution
                  platform. Companies use this platform for digital espionage
                  and attacks on competitors' secure servers.
                </Typography>
              </Box>
            </Box>
            <CardContent>
              <h3 className={css.title}>Poster New Orlean vs Golden Star</h3>
              <p className={css.text}>Design</p>
            </CardContent>
          </Card>
          <Card
            variant="outlined"
            sx={{
              display: 'flex',
              gap: 2,
              flexDirection: 'column',
              cursor: 'pointer',
              '&:hover': { boxShadow: cardShadow },
            }}
            className={css.cardItem}
            onMouseEnter={() => setIsHovered3(true)}
            onMouseLeave={() => setIsHovered3(false)}
          >
            <Box
              sx={{
                width: '52vh',
                height: '42vh',
                position: 'relative',
                overflow: 'hidden',
              }}
              className={css.thirdImg}
            >
              <div
                className={css.hoverOverlay}
                style={{
                  transform: isHovered3 ? 'translateY(0)' : 'translateY(100%)',
                }}
              >
                <Typography
                  sx={{ padding: '6vh 10vh 12vh 4vh' }}
                  className={css.textOveraly}
                >
                  Technoduck is a state-of-the-art coronavirus distribution
                  platform. Companies use this platform for digital espionage
                  and attacks on competitors' secure servers.
                </Typography>
              </div>
            </Box>
            <CardContent>
              <h3 className={css.title}>Seafood Restaurant </h3>
              <p className={css.text}>Apps</p>
            </CardContent>
          </Card>
          <Card
            variant="outlined"
            sx={{
              display: 'flex',
              gap: 2,
              flexDirection: 'column',
              cursor: 'pointer',
              '&:hover': { boxShadow: cardShadow },
            }}
            className={css.cardItem}
            onMouseEnter={() => setIsHovered4(true)}
            onMouseLeave={() => setIsHovered4(false)}
          >
            <Box
              sx={{
                width: '52vh',
                height: '42vh',
                position: 'relative',
                overflow: 'hidden',
              }}
              className={css.fourthImg}
            >
              <div
                className={css.hoverOverlay}
                style={{
                  transform: isHovered4 ? 'translateY(0)' : 'translateY(100%)',
                }}
              >
                <Typography
                  sx={{ padding: '6vh 10vh 12vh 4vh' }}
                  className={css.textOveraly}
                >
                  Technoduck is a state-of-the-art coronavirus distribution
                  platform. Companies use this platform for digital espionage
                  and attacks on competitors' secure servers.
                </Typography>
              </div>
            </Box>
            <CardContent>
              <h3 className={css.title}>Project Prime</h3>
              <p className={css.text}>Marketing</p>
            </CardContent>
          </Card>
          <Card
            variant="outlined"
            sx={{
              display: 'flex',
              gap: 2,
              flexDirection: 'column',
              cursor: 'pointer',
              '&:hover': { boxShadow: cardShadow },
            }}
            className={css.cardItem}
            onMouseEnter={() => setIsHovered5(true)}
            onMouseLeave={() => setIsHovered5(false)}
          >
            <Box
              sx={{
                width: '52vh',
                height: '42vh',
                position: 'relative',
                overflow: 'hidden',
              }}
              className={css.fivthImg}
            >
              <div
                className={css.hoverOverlay}
                style={{
                  transform: isHovered5 ? 'translateY(0)' : 'translateY(100%)',
                }}
              >
                <Typography
                  sx={{ padding: '6vh 10vh 12vh 4vh' }}
                  className={css.textOveraly}
                >
                  Technoduck is a state-of-the-art coronavirus distribution
                  platform. Companies use this platform for digital espionage
                  and attacks on competitors' secure servers.
                </Typography>
              </div>
            </Box>
            <CardContent>
              <h3 className={css.title}>Project Boxes</h3>
              <p className={css.text}>Apps</p>
            </CardContent>
          </Card>
          <Card
            variant="outlined"
            sx={{
              display: 'flex',
              gap: 2,
              flexDirection: 'column',
              cursor: 'pointer',
              '&:hover': { boxShadow: cardShadow },
            }}
            className={css.cardItem}
            onMouseEnter={() => setIsHovered6(true)}
            onMouseLeave={() => setIsHovered6(false)}
          >
            <Box
              sx={{
                width: '52vh',
                height: '42vh',
                position: 'relative',
                overflow: 'hidden',
              }}
              className={css.sixthImg}
            >
              <div
                className={css.hoverOverlay}
                style={{
                  transform: isHovered6 ? 'translateY(0)' : 'translateY(100%)',
                }}
              >
                <Typography
                  sx={{ padding: '6vh 10vh 12vh 4vh' }}
                  className={css.textOveraly}
                >
                  Technoduck is a state-of-the-art coronavirus distribution
                  platform. Companies use this platform for digital espionage
                  and attacks on competitors' secure servers.
                </Typography>
              </div>
            </Box>
            <CardContent>
              <h3 className={css.title}>Inspiration has no Borders</h3>
              <p className={css.text}>Web-site</p>
            </CardContent>
          </Card>
          <Card
            variant="outlined"
            sx={{
              display: 'flex',
              gap: 2,
              flexDirection: 'column',
              cursor: 'pointer',
              '&:hover': { boxShadow: cardShadow },
            }}
            className={css.cardItem}
            onMouseEnter={() => setIsHovered7(true)}
            onMouseLeave={() => setIsHovered7(false)}
          >
            <Box
              sx={{
                width: '52vh',
                height: '42vh',
                position: 'relative',
                overflow: 'hidden',
              }}
              className={css.seventhImg}
            >
              <div
                className={css.hoverOverlay}
                style={{
                  transform: isHovered7 ? 'translateY(0)' : 'translateY(100%)',
                }}
              >
                <Typography
                  sx={{ padding: '6vh 10vh 12vh 4vh' }}
                  className={css.textOveraly}
                >
                  Technoduck is a state-of-the-art coronavirus distribution
                  platform. Companies use this platform for digital espionage
                  and attacks on competitors' secure servers.
                </Typography>
              </div>
            </Box>
            <CardContent>
              <h3 className={css.title}>Limited Edition</h3>
              <p className={css.text}>Design</p>
            </CardContent>
          </Card>
          <Card
            variant="outlined"
            sx={{
              display: 'flex',
              gap: 2,
              flexDirection: 'column',
              cursor: 'pointer',
              '&:hover': { boxShadow: cardShadow },
            }}
            className={css.cardItem}
            onMouseEnter={() => setIsHovered8(true)}
            onMouseLeave={() => setIsHovered8(false)}
          >
            <Box
              sx={{
                width: '52vh',
                height: '42vh',
                position: 'relative',
                overflow: 'hidden',
              }}
              className={css.eigthImg}
            >
              <div
                className={css.hoverOverlay}
                style={{
                  transform: isHovered8 ? 'translateY(0)' : 'translateY(100%)',
                }}
              >
                <Typography
                  sx={{ padding: '6vh 10vh 12vh 4vh' }}
                  className={css.textOveraly}
                >
                  Technoduck is a state-of-the-art coronavirus distribution
                  platform. Companies use this platform for digital espionage
                  and attacks on competitors' secure servers.
                </Typography>
              </div>
            </Box>
            <CardContent>
              <h3 className={css.title}>Project LAB</h3>
              <p className={css.text}>Marketing</p>
            </CardContent>
          </Card>
          <Card
            variant="outlined"
            sx={{
              display: 'flex',
              gap: 2,
              flexDirection: 'column',
              cursor: 'pointer',
              '&:hover': { boxShadow: cardShadow },
            }}
            className={css.cardItem}
            onMouseEnter={() => setIsHovered9(true)}
            onMouseLeave={() => setIsHovered9(false)}
          >
            <Box
              sx={{
                width: '52vh',
                height: '42vh',
                position: 'relative',
                overflow: 'hidden',
              }}
              className={css.ninthImg}
            >
              <div
                className={css.hoverOverlay}
                style={{
                  transform: isHovered9 ? 'translateY(0)' : 'translateY(100%)',
                }}
              >
                <Typography
                  sx={{ padding: '6vh 10vh 12vh 4vh' }}
                  className={css.textOveraly}
                >
                  Technoduck is a state-of-the-art coronavirus distribution
                  platform. Companies use this platform for digital espionage
                  and attacks on competitors' secure servers.
                </Typography>
              </div>
            </Box>
            <CardContent>
              <h3 className={css.title}>Growing Business</h3>
              <p className={css.text}>Apps</p>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
};
