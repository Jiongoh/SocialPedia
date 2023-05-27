import { Box, useMediaQuery } from "@mui/material";
import Navbar from "components/navbar";
import MyPostWidget from "components/widgets/MyPostWidget";
import UserWidget from "components/widgets/UserWidget";
import { useSelector } from "react-redux";
import PostsWidget from "components/widgets/PostsWidget";
import AdvertWidget from "components/widgets/AdvertWidget";
import FriendListWidget from "components/widgets/FriendListWidget";

const HomePage = () => {
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    const { _id, picturePath } = useSelector((state) => state.user);

    return <Box>
        {/* 导航栏 */}
        <Navbar />
        
        <Box
            width="100%"
            padding="2rem 6%"
            display={isNonMobileScreens ? "flex" : "block"}
            gap="0.5rem"
            justifyContent="space-between"
        >
            {/* 个人页面 */}
            <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
                <UserWidget userId={_id} picturePath={picturePath} />
            </Box>
            {/* 帖子页面 */}
            <Box
                flexBasis={isNonMobileScreens ? "42%" : undefined}
                marginTop={isNonMobileScreens ? undefined : "2rem"}
            >
                <MyPostWidget picturePath={picturePath} />
                <PostsWidget userId={_id} />
            </Box>
            {isNonMobileScreens && (
                // 广告与好友列表
                <Box flexBasis="26%">
                    {/* 广告 */}
                    <AdvertWidget />

                    <Box margin="2rem 0" />

                    {/* 好友列表*/}
                    <FriendListWidget userId={_id} />
                </Box>

            )}
        </Box>
    </Box>
};

export default HomePage;
