import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link } from 'react-router'
import ROUTES, { getRoutePath } from '../lib/config/routes.ts'

function HomePage() {
    return (
        <Box
            id="hero"
            sx={(theme) => ({
                width: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundImage:
                    'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
                ...theme.applyStyles('dark', {
                    backgroundImage:
                        'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
                }),
            })}
        >
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 14, sm: 20 },
                    pb: { xs: 8, sm: 12 },
                }}
            >
                <Stack
                    spacing={2}
                    useFlexGap
                    sx={{
                        alignItems: 'center',
                        width: { xs: '100%', sm: '70%' },
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            alignItems: 'center',
                            fontSize: 'clamp(3rem, 10vw, 3.5rem)',
                        }}
                    >
                        The Witcher 3&nbsp;
                        <Typography
                            component="span"
                            variant="h1"
                            sx={(theme) => ({
                                fontSize: 'inherit',
                                color: 'primary.main',
                                ...theme.applyStyles('dark', {
                                    color: 'primary.light',
                                }),
                            })}
                        >
                            Gwent
                        </Typography>
                    </Typography>

                    <Typography
                        variant="h5"
                        sx={{
                            textAlign: 'center',
                            color: 'text.primary',
                            fontWeight: 500,
                            mb: 2,
                        }}
                    >
                        Complete Your Gwent Collection
                    </Typography>

                    <Typography
                        sx={{
                            textAlign: 'center',
                            color: 'text.secondary',
                            width: { sm: '100%', md: '80%' },
                        }}
                    >
                        Track your progress as you collect all{' '}
                        <strong>252</strong> Gwent cards in The Witcher 3. Never
                        miss a card again with our comprehensive checklist
                        organized by location, merchant, and quest.
                    </Typography>
                    <Typography
                        sx={{
                            textAlign: 'center',
                            color: 'text.secondary',
                            width: { sm: '100%', md: '80%' },
                        }}
                    >
                        Feel free to use the tool and hopefully it will help you
                        complete your gwent deck as well!
                    </Typography>

                    <Button
                        variant="contained"
                        size="large"
                        to={getRoutePath(ROUTES.CHECKLIST)}
                        component={Link}
                        sx={{
                            mt: 3,
                            px: 4,
                            py: 1.5,
                            fontSize: '1.1rem',
                            fontWeight: 600,
                        }}
                    >
                        Start Collecting
                    </Button>
                </Stack>
            </Container>
        </Box>
    )
}

export default HomePage
