import React from 'react'
import styles from './Options.module.css'
import DataUsageSharpIcon from '@material-ui/icons/DataUsageSharp';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import MoreHorizSharpIcon from '@material-ui/icons/MoreHorizSharp';
import { IconButton } from '@material-ui/core'

const Options = () => {
    return (
        <div className={styles.Options}>
            <IconButton>
                <DataUsageSharpIcon />
            </IconButton>
            <IconButton>
                <AddSharpIcon />
            </IconButton>
            <IconButton>
                <MoreHorizSharpIcon />
            </IconButton>
        </div>
    )
}

export default Options