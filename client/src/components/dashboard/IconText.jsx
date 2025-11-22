import {
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar,
    Typography
} from "@mui/material";
import MessageIcon from '@mui/icons-material/Message';
import VerifiedIcon from '@mui/icons-material/Verified';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ForumIcon from '@mui/icons-material/Forum';
import SyncIcon from '@mui/icons-material/Sync';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import FeedbackIcon from '@mui/icons-material/Feedback';

export default function IconText({ benifitList, alignDir }) {
    const iconMap = {
        FeedbackIcon,
        FormatListBulletedIcon,
        VerifiedUserIcon,
        VerifiedIcon,
        MessageIcon,
        WorkspacePremiumIcon,
        ForumIcon,
        SyncIcon,
        QueryStatsIcon,
        ImageSearchIcon
    };

    const alignStyles = alignDir === "right"
        ? {
            listItem: { flexDirection: "row-reverse" },
            avatar: { minWidth: 0, ml: 2 },
            text: { textAlign: "right" }
        }
        : {
            listItem: {},
            avatar: {},
            text: {}
        };

    return (
        <List>
            {Object.entries(benifitList).map(([iconKey, text]) => {
                const IconComponent = iconMap[iconKey];

                return (
                    <ListItem sx={alignStyles.listItem}>
                        <ListItemAvatar sx={alignStyles.avatar}>
                            <Avatar><IconComponent /></Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <Typography
                                    sx={{
                                        ...alignStyles.text,
                                        fontWeight: {xs:"600", md:"700"},
                                        fontSize: {xs: "0.9rem", md: "1.2rem"},
                                        letterSpacing: "-0.5px",
                                    }}
                                >
                                    {text}
                                </Typography>
                            }
                        />
                    </ListItem>
                )
            })}
        </List>
    )
}