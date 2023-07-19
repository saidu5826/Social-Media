import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import React from 'react'
import "./Posts.css"
import { ChatBubbleOutline, FavoriteBorderOutlined } from "@mui/icons-material";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function Posts() {
    return (
        <div className='post'>
            <div className="post__header">
                <div className="post__headerAuthor">
                    <Avatar>S</Avatar>
                    Said • <span>12</span>
                </div>
                <MoreHorizIcon />
            </div>
            <div className="post__image">
                <img src="https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" alt="" />
            </div>
            <div className="post__footer">
                <div className="post__footerIcons">
                    <div className="post__iconsMain">
                        <FavoriteBorderOutlined className="postIcon" />
                        <ChatBubbleOutline className="postIcon" />
                        <TelegramIcon className="postIcon" />
                    </div>
                    <div className="post__iconSave">
                        <BookmarkBorderIcon className="postIcon" />
                    </div>
                </div>
                Liked by 21 peoples
            </div>
        </div>
    )
}
