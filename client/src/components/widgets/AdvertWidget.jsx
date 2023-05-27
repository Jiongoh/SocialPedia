import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WigetWrapper from "./WigetWrapper";

const AdvertWidget = () => {
    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;

    return (
        <WigetWrapper>
            <FlexBetween>
                <Typography
                    color={dark}
                    variant="h5"
                    fontWeight="500"
                >
                    Sponsored
                </Typography>
                <Typography color={medium}>Create Ad</Typography>
            </FlexBetween>
            <img
                width="100%"
                height="auto"
                src="http://localhost:3001/assets/kfcad.jpeg"
                alt="advert"
                style={{
                    borderRadius: "0.75rem",
                    margin: "0.75rem 0"
                }}
            />
            <FlexBetween>
                <Typography color={main}>Kentucky Fried Chicken</Typography>
                <Typography color={medium}>kfc.com</Typography>
            </FlexBetween>
            <Typography color={medium} margin="0.5rem 0">
                KFC's NEW chicken nuggets are so game-changing, everybody will want to try them. You've never had nuggets like these.
                Order now on the KFC App or KFC.com.
            </Typography>
        </WigetWrapper>
    )
}

export default AdvertWidget;