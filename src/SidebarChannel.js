import React from 'react'
import "./SidebarChannel.css";
import { useDispatch } from 'react-redux';
import { setChannelInfo } from './features/appSlice';
import SettingsIcon from '@material-ui/icons/Settings';

function SidebarChannel({ id, channelName }) {
    const dispatch = useDispatch();
    return (
        <div
            className="sidebarChannel"
            onClick={() => dispatch(setChannelInfo({
                channelId: id,
                channelName: channelName,
            }))}>
            <h4>
                <span className="sidebarChannel__hash">#</span>
                {channelName}
                <span className="sidebarChannel__spacer" />
                <SettingsIcon fontSize="small" className="sidebarChannel__settingsIcon" />
            </h4>
        </div>
    )
}

export default SidebarChannel;

