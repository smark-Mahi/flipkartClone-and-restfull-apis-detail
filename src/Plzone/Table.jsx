import React from 'react'
import { Data } from './teams/teams'
import styles from './Table.module.css'
const Table = () => {
    const table=[
        {
            pos:1,
            club:'cheisa',
            pl:2,
            Gd:+5,
            pts:6
        },
        {
            pos:2,
            club:'cheisa',
            pl:2,
            Gd:+5,
            pts:6
        },
        {
            pos:3,
            club:'cheisa',
            pl:2,
            Gd:+5,
            pts:6
        },
        {
            pos:4,
            club:'cheisa',
            pl:2,
            Gd:+5,
            pts:6
        },
        {
            pos:5,
            club:'cheisa',
            pl:2,
            Gd:+5,
            pts:6
        },
        {
            pos:6,
            club:'cheisa',
            pl:2,
            Gd:+5,
            pts:6
        },
        {
            pos:7,
            club:'cheisa',
            pl:2,
            Gd:+5,
            pts:6
        },
        {
            pos:8,
            club:'cheisa',
            pl:2,
            Gd:+5,
            pts:6
        },
    ]
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Standings</h2>
      <table className={styles.table}>
        <thead>
            <tr className={styles.tr}>
                <th className={styles.td}>pos</th>
                <th className={styles.td} style={{width:`60%`}} >club</th>
                <th className={styles.td}>pi</th>
                <th className={styles.td}>Go</th>
                <th className={styles.td}>pts</th>
            </tr>
        </thead>
        <tbody>
            {
                table.map((items)=>
                <tr  className={styles.tr}>
                    <td className={styles.th}>{items.pos}</td>
                    <td className={styles.th}>{items.club}</td>
                    <td className={styles.th}>{items.pl}</td>
                    <td className={styles.th}>{items.Gd}</td>
                    <td className={styles.th}>{items.pts}</td>
                </tr>
                )
            }
        </tbody>
      </table>
    </div>
  )
}

export default Table
