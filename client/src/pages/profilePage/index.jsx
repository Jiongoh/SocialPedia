import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "components/navbar";
import FriendListWidget from "components/widgets/FriendListWidget";
import MyPostWidget from "components/widgets/MyPostWidget";
import PostsWidget from "components/widgets/PostsWidget";
import UserWidget from "components/widgets/UserWidget";

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const { userId } = useParams();
    const token = useSelector((state) => state.token);
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

    const getUser = async () => {
        const response = await fetch(`http://localhost:3001/users/${userId}`,
            {
                method: "GET",
                headers: { Authorization: `Bearer ${token}` }
            }
        )
        const data = await response.json();
        setUser(data)
    }

    // eslint-disable-next-line
    useEffect(() => {
        getUser();
    }, []);

    if (!user) { return null };
    return <Box>
        <Navbar />
        <Box
            width="100%"
            padding="2rem 6%"
            display={isNonMobileScreens ? "flex" : "block"}
            gap="2rem"
            justifyContent="center"
        >
            {/* 个人页面 */}
            <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
                <UserWidget userId={userId} picturePath={user.picturePath} />
                <Box margin="2rem 0" />
                <FriendListWidget userId={userId} />
            </Box>
            {/* 帖子页面 */}
            <Box
                flexBasis={isNonMobileScreens ? "42%" : undefined}
                marginTop={isNonMobileScreens ? undefined : "2rem"}
            >
                <MyPostWidget picturePath={user.picturePath} />
                <Box margin="2rem 0" />
                <PostsWidget userId={userId} />
            </Box>
        </Box>
    </Box>
};

export default ProfilePage;