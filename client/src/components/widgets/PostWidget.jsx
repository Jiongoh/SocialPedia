import { ChatBubbleOutlineOutlined, FavoriteBorderOutlined, FavoriteOutlined, ShareOutlined } from "@mui/icons-material";
import SendIcon from '@mui/icons-material/Send';
import { Box, Divider, IconButton, Typography, useTheme, InputBase, Button, } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Friend from "components/Friend";
import WigetWrapper from "./WigetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "state";

const PostWidget = ({
    postId,
    postUserId,
    name,
    description,
    location,
    picturePath,
    userPicturePath,
    likes,
    comments }) => {
    const [isComments, setIsComments] = useState(false);
    const [comment, setComment] = useState("");
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    const loggedInUserId = useSelector((state) => state.user._id)
    const isLiked = Boolean(likes[loggedInUserId]);
    const likeCount = Object.keys(likes).length;

    const { palette } = useTheme();
    const main = palette.neutral.main;
    const primary = palette.primary.main;

    const patchLike = async () => {
        const response = await fetch(`http://localhost:3001/posts/${postId}/like`,
            {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userId: loggedInUserId })
            }
        )
        const updatePost = await response.json();
        dispatch(setPost({ post: updatePost }))
    }

    const handleComment = async () => {
        const response = await fetch(`http://localhost:3001/posts/${postId}/comment`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ comment: comment }),
            }
        )
        console.log(comment);
        const updateComment = await response.json();
        dispatch(setPost({ post: updateComment }))
        setComment("");
    }

    return (
        <WigetWrapper margin="2rem 0">
            <Friend
                friendId={postUserId}
                name={name}
                subtitle={location}
                userPicturePath={userPicturePath}
            />
            <Typography color={main} sx={{ marginTop: "1rem" }}>
                {description}
            </Typography>
            {picturePath && (
                <img
                    width="100%"
                    height="auto"
                    alt="post"
                    style={{
                        borderRadius: "0.75rem",
                        marginTop: "0.75rem"
                    }}
                    src={`http://localhost:3001/assets/${picturePath}`}
                />
            )}
            <FlexBetween marginTop="0.25rem">
                <FlexBetween gap="1rem">

                    {/* 点赞部分 */}
                    <FlexBetween gap="0.3rem">
                        <IconButton onClick={patchLike}>
                            {isLiked ? (
                                <FavoriteOutlined sx={{ color: primary }} />
                            ) : (
                                <FavoriteBorderOutlined />
                            )}
                        </IconButton>
                        <Typography>{likeCount}</Typography>
                    </FlexBetween>

                    {/* 评论部分图标 */}
                    <FlexBetween gap="0.3rem">
                        <IconButton onClick={() => setIsComments(!isComments)}>
                            <ChatBubbleOutlineOutlined />
                        </IconButton>
                        <Typography>{comments.length}</Typography>
                    </FlexBetween>

                </FlexBetween>

                {/* 分享部分 */}
                <IconButton>
                    <ShareOutlined />
                </IconButton>

            </FlexBetween>

            {/* 评论区 */}
            {isComments && (
                <Box marginTop="0.5rem">
                    {comments.map((comment, index) => (
                        <Box key={`${name}-${index}`}>
                            <Divider />
                            <Typography
                                sx={{
                                    color: main,
                                    margin: "0.5rem 0",
                                    paddingLeft: "1rem"
                                }}
                            >
                                {comment}
                            </Typography>
                        </Box>
                    ))}
                    <Divider />
                    <Box margin="1.5rem 0" />

                    {/* 写评论 */}
                    <Box display="flex">
                        <InputBase
                            placeholder="Leave a comment..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            sx={{
                                width: "100%",
                                backgroundColor: palette.neutral.light,
                                padding: "1rem 2rem",
                                borderRadius: "0.15rem"
                            }}
                            required
                        />
                        <Button
                            variant="contained"
                            endIcon={<SendIcon />}
                            onClick={handleComment}
                            disabled={!comment}
                            sx={{ marginLeft: "0.01rem" }}
                        >
                            Send
                        </Button>
                    </Box>
                </Box>

            )}
        </WigetWrapper>
    )
}
export default PostWidget;