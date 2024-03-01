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
  const borderShadow =
    theme.palette.mode === 'light'
      ? 'rgba(33,33,33,0.3)'
      : 'rgba(255,255,255,0.3)';
  const cardShadow =
    theme.palette.mode === 'light'
      ? '0px 3px 6px 3px rgba(33,33,33,0.3)'
      : '0px 3px 6px 3px rgba(255,255,255,0.3)';
  return (
    <Container
      maxWidth="100%"
      disableGutters
      sx={{ borderBottom: `2px solid ${borderShadow}` }}
    >
      <Box
        padding="0"
        sx={{
          padding: '20vh 0 20vh 0',
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
              textTransform: 'none',
              color: '#212121',
              bgcolor: '#F5F4FA',
              padding: '1vh 3vh 1vh 3vh',
              '&:hover': {
                bgcolor: '#2196F3',
                color: '#FFFFFF',
              },
            }}
          >
            <Typography
              sx={{
                fontfamily: 'Roboto',
                fontSize: '16px',
                fontWeight: '500',
                lineHeight: '26px',
                letterSpacing: '0.03em',
                textAlign: 'center',
                whiteSpace: 'nowrap',
              }}
            >
              All
            </Typography>
          </Button>
          <Button
            className={css.mediaBtn}
            size="small"
            sx={{
              textTransform: 'none',
              color: '#212121',
              bgcolor: '#F5F4FA',
              padding: '1vh 3vh 1vh 3vh',
              '&:hover': {
                bgcolor: '#2196F3',
                color: '#FFFFFF',
              },
            }}
          >
            <Typography
              sx={{
                fontfamily: 'Roboto',
                fontSize: '16px',
                fontWeight: '500',
                lineHeight: '26px',
                letterSpacing: '0.03em',
                textAlign: 'center',
                whiteSpace: 'nowrap',
              }}
            >
              Web-sites
            </Typography>
          </Button>
          <Button
            size="small"
            className={css.mediaBtn}
            sx={{
              textTransform: 'none',
              color: '#212121',
              bgcolor: '#F5F4FA',
              padding: '1vh 3vh 1vh 3vh',
              '&:hover': {
                bgcolor: '#2196F3',
                color: '#FFFFFF',
              },
            }}
          >
            <Typography
              sx={{
                fontfamily: 'Roboto',
                fontSize: '16px',
                fontWeight: '500',
                lineHeight: '26px',
                letterSpacing: '0.03em',
                textAlign: 'center',
                whiteSpace: 'nowrap',
              }}
            >
              Apps
            </Typography>
          </Button>
          <Button
            size="small"
            className={css.mediaBtn}
            sx={{
              textTransform: 'none',
              color: '#212121',
              bgcolor: '#F5F4FA',
              padding: '1vh 3vh 1vh 3vh',
              '&:hover': {
                bgcolor: '#2196F3',
                color: '#FFFFFF',
              },
            }}
          >
            <Typography
              sx={{
                fontfamily: 'Roboto',
                fontSize: '16px',
                fontWeight: '500',
                lineHeight: '26px',
                letterSpacing: '0.03em',
                textAlign: 'center',
                whiteSpace: 'nowrap',
              }}
            >
              Design
            </Typography>
          </Button>
          <Button
            size="small"
            className={css.mediaBtn}
            sx={{
              textTransform: 'none',
              color: '#212121',
              bgcolor: '#F5F4FA',
              padding: '1vh 3vh 1vh 3vh',
              '&:hover': {
                bgcolor: '#2196F3',
                color: '#FFFFFF',
              },
            }}
          >
            <Typography
              sx={{
                fontfamily: 'Roboto',
                fontSize: '16px',
                fontWeight: '500',
                lineHeight: '26px',
                letterSpacing: '0.03em',
                textAlign: 'center',
                whiteSpace: 'nowrap',
              }}
            >
              Marketing
            </Typography>
          </Button>
        </MenuList>
        <Box
          sx={{
            display: 'grid',
            gap: '35px',
            gridTemplateColumns: 'repeat(3, 10fr)',
            '@media screen and (max-width: 1200px)': {
              gap: '20px',
            },
            '@media screen and (max-width: 768px)': {
              gridTemplateColumns: 'repeat(2, 10fr)',
            },

            '@media screen and (max-width: 480px)': {
              gridTemplateColumns: 'repeat(1, 10fr)',
            },
          }}
        >
          <Card
            variant="outlined"
            sx={{
              padding: '0',
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
                width: '370px',
                height: '294px',
                position: 'relative',
                overflow: 'hidden',
                '@media screen and (max-width: 768px)': {
                  width: '354px',
                },
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
                  sx={{
                    fontFamily: 'Roboto',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '28px',
                    letterSpacing: '0.03em',
                    textAlign: 'left',
                    color: '#ffffff',
                    padding: '6vh 10vh 12vh 4vh',
                    '@media screen and (max-width: 768px)': {
                      padding: '0vh 12vh 17vh 4vh',
                      justifyContent: 'center',
                    },
                  }}
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
              padding: '0',
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
                width: '370px',
                height: '294px',
                position: 'relative',
                overflow: 'hidden',
                '@media screen and (max-width: 768px)': {
                  width: '354px',
                },
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
                  sx={{
                    fontFamily: 'Roboto',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '28px',
                    letterSpacing: '0.03em',
                    textAlign: 'left',
                    color: '#ffffff',
                    padding: '6vh 10vh 12vh 4vh',
                    '@media screen and (max-width: 768px)': {
                      padding: '0vh 12vh 17vh 4vh',
                      justifyContent: 'center',
                    },
                  }}
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
              padding: '0',
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
                width: '370px',
                height: '294px',
                position: 'relative',
                overflow: 'hidden',
                '@media screen and (max-width: 768px)': {
                  width: '354px',
                },
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
                  sx={{
                    fontFamily: 'Roboto',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '28px',
                    letterSpacing: '0.03em',
                    textAlign: 'left',
                    color: '#ffffff',
                    padding: '6vh 10vh 12vh 4vh',
                    '@media screen and (max-width: 768px)': {
                      padding: '0vh 12vh 17vh 4vh',
                      justifyContent: 'center',
                    },
                  }}
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
              padding: '0',
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
                width: '370px',
                height: '294px',
                position: 'relative',
                overflow: 'hidden',
                '@media screen and (max-width: 768px)': {
                  width: '354px',
                },
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
                  sx={{
                    fontFamily: 'Roboto',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '28px',
                    letterSpacing: '0.03em',
                    textAlign: 'left',
                    color: '#ffffff',
                    padding: '6vh 10vh 12vh 4vh',
                    '@media screen and (max-width: 768px)': {
                      padding: '0vh 12vh 17vh 4vh',
                      justifyContent: 'center',
                    },
                  }}
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
              padding: '0',
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
                width: '370px',
                height: '294px',
                position: 'relative',
                overflow: 'hidden',
                '@media screen and (max-width: 768px)': {
                  width: '354px',
                },
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
                  sx={{
                    fontFamily: 'Roboto',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '28px',
                    letterSpacing: '0.03em',
                    textAlign: 'left',
                    color: '#ffffff',
                    padding: '6vh 10vh 12vh 4vh',
                    '@media screen and (max-width: 768px)': {
                      padding: '0vh 12vh 17vh 4vh',
                      justifyContent: 'center',
                    },
                  }}
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
              padding: '0',
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
                width: '370px',
                height: '294px',
                position: 'relative',
                overflow: 'hidden',
                '@media screen and (max-width: 768px)': {
                  width: '354px',
                },
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
                  sx={{
                    fontFamily: 'Roboto',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '28px',
                    letterSpacing: '0.03em',
                    textAlign: 'left',
                    color: '#ffffff',
                    '@media screen and (max-width: 768px)': {
                      padding: '0vh 12vh 17vh 4vh',
                      justifyContent: 'center',
                    },
                  }}
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
              padding: '0',
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
                width: '370px',
                height: '294px',
                position: 'relative',
                overflow: 'hidden',
                '@media screen and (max-width: 768px)': {
                  width: '354px',
                },
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
                  sx={{
                    fontFamily: 'Roboto',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '28px',
                    letterSpacing: '0.03em',
                    textAlign: 'left',
                    color: '#ffffff',
                    padding: '6vh 10vh 12vh 4vh',
                    '@media screen and (max-width: 768px)': {
                      padding: '0vh 12vh 17vh 4vh',
                      justifyContent: 'center',
                    },
                  }}
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
              padding: '0',
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
                width: '370px',
                height: '294px',
                position: 'relative',
                overflow: 'hidden',
                '@media screen and (max-width: 768px)': {
                  width: '354px',
                },
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
                  sx={{
                    fontFamily: 'Roboto',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '28px',
                    letterSpacing: '0.03em',
                    textAlign: 'left',
                    color: '#ffffff',
                    padding: '6vh 10vh 12vh 4vh',
                    '@media screen and (max-width: 768px)': {
                      padding: '0vh 12vh 17vh 4vh',
                      justifyContent: 'center',
                    },
                  }}
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
              padding: '0',
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
                width: '370px',
                height: '294px',
                position: 'relative',
                overflow: 'hidden',
                '@media screen and (max-width: 768px)': {
                  width: '354px',
                },
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
                  sx={{
                    fontFamily: 'Roboto',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '28px',
                    letterSpacing: '0.03em',
                    textAlign: 'left',
                    color: '#ffffff',
                    padding: '6vh 10vh 12vh 4vh',
                    '@media screen and (max-width: 768px)': {
                      padding: '0vh 12vh 17vh 4vh',
                      justifyContent: 'center',
                    },
                  }}
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
