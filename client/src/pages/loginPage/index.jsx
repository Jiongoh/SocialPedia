import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "components/Form";
const LoginPage = () => {
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

    const theme = useTheme();
    return <Box>
        {/* 标题 */}
        <Box
            width="100%"
            backgroundColor={theme.palette.background.alt}
            padding="1rem 6%"
            textAlign="center"
        >
            <Typography fontWeight="bold"
                fontSize="32px"
                color="primary"
            >
                SocialPedia
            </Typography>
        </Box>

        {/* 登陆表单 */}
        <Box
            width={isNonMobileScreens ? "50%" : "93%"}
            padding="2rem"
            margin="2rem auto"
            borderRadius="1.5rem"
            backgroundColor={theme.palette.background.alt}
        >
            <Typography
                fontWeight="500"
                variant="h5"
                sx={{
                    marginBottom: "1.5rem"
                }}
            >
                Welcome to SocialPedia, the Social Media for you!
            </Typography>
            <Form />
        </Box>
    </Box>
};

export default LoginPage;