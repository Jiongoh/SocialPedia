import { ManageAccountsOutlined, EditOutlined, LocationOnOutlined, WorkOutlineOutlined } from "@mui/icons-material";
import { Box, Typography, Divider, useTheme } from "@mui/material";
import UserImage from "components/UserImage";
import FlexBetween from "components/FlexBetween";
import WigetWrapper from "./WigetWrapper";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserWidget = ({ userId, picturePath }) => {
    const [user, setUser] = useState(null);
    const { palette } = useTheme();
    const navigate = useNavigate();
    const token = useSelector((state) => state.token);
    const dark = palette.neutral.dark;
    const medium = palette.neutral.medium;
    const main = palette.neutral.main;

    const getUser = async () => {
        const response = await fetch(`http://localhost:3001/users/${userId}`,
            {
                method: "GET",
                headers: { Authorization: `Bearer ${token}` }
            }
        )
        const data = await response.json();
        setUser(data)
    };
    // 页面挂载和页面更新都会调用
    // 第二个参数是个数组，里面写你要监测的state（相当于componentDidUpdate）
    // 传递空数组表示不检测数据变化（相当于componentDidMount）
    // 若return了一个回调函数，则相当于componentWillUnmount
    // eslint-disable-next-line
    useEffect(() => {
        getUser();
    }, []);

    if (!user) { return null };

    const { firstName, lastName, location, occupation, viewedProfile, impressions, friends } = user;

    return (
        <WigetWrapper>

            <FlexBetween
                gap="0.5rem"
                paddingBottom="1.1rem"
                onClick={() => navigate(`/profile/${userId}`)}
            >
                {/* 第一行：头像+名字+朋友数量+账户管理 */}
                <FlexBetween gap="1rem">
                    {/* 头像 */}
                    <UserImage image={picturePath} />
                    <Box>
                        {/* 名字 */}
                        <Typography
                            variant="h4"
                            color={dark}
                            fontWeight="500"
                            sx={{
                                "&:hover": {
                                    color: palette.primary.light,
                                    cursor: "pointer"
                                }
                            }}
                        >
                            {firstName} {lastName}
                        </Typography>
                        <Typography color={medium}>{friends.length} friends</Typography>
                    </Box>
                </FlexBetween>
                <ManageAccountsOutlined />
            </FlexBetween>

            <Divider />

            {/* 第二行：地址+工作 */}
            <Box padding="1rem 0">
                {/* 地址 */}
                <Box display="flex" alignItems="center" gap="1rem" marginBottom="0.5rem">
                    <LocationOnOutlined fontSize="large" sx={{ color: main }} />
                    <Typography color={medium}>{location}</Typography>
                </Box>

                {/* 工作 */}
                <Box display="flex" alignItems="center" gap="1rem">
                    <WorkOutlineOutlined fontSize="large" sx={{ color: main }} />
                    <Typography color={medium}>{occupation}</Typography>
                </Box>
            </Box>

            <Divider />

            {/* 第三行： 主页浏览量+帖子热度*/}
            <Box padding="1rem 0">
                {/* 主页浏览量 */}
                <FlexBetween marginBottom="0.5rem">
                    <Typography color={medium}>Who's viewed your profile</Typography>
                    <Typography color={medium} fontWeight="500">{viewedProfile}</Typography>
                </FlexBetween>
                {/* 帖子热度 */}
                <FlexBetween marginBottom="0.5rem">
                    <Typography color={medium}>Impressions of your post</Typography>
                    <Typography color={main} fontWeight="500">{impressions}</Typography>
                </FlexBetween>
            </Box>

            <Divider />

            {/* 第四行： github链接和社交账户链接*/}
            <Box padding="1rem 0">
                <Typography fontSize="1rem" color={main} fontWeight="500" marginBottom="1rem">
                    Social Profiles
                </Typography>
                {/* github链接 */}
                <FlexBetween gap="1rem" marginBottom="0.5rem">
                    <FlexBetween gap="1rem">
                        <img src="../assets/github.png" alt="GitHub" />
                        <Box>
                            <Typography color={main} fontWeight="500">
                                GitHub
                            </Typography>
                            <Typography color={medium}>Network Platform</Typography>
                        </Box>
                    </FlexBetween>
                    <EditOutlined sx={{ color: main }} />
                </FlexBetween>

                {/* 社交账户链接 */}
                <FlexBetween gap="1rem">
                    <FlexBetween gap="1rem">
                        <img src="../assets/wechat.png" alt="WeChat" />
                        <Box>
                            <Typography color={main} fontWeight="500">
                                WeChat
                            </Typography>
                            <Typography color={medium}>Social NetWork</Typography>
                        </Box>
                    </FlexBetween>
                    <EditOutlined sx={{ color: main }} />
                </FlexBetween>
            </Box>

        </WigetWrapper>
    )
}

export default UserWidget;