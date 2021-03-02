import Link from "next/link"
import React from 'react'
import { Menu } from 'semantic-ui-react'
export default function Nav() {
    return (
        <div style={{marginTop:"-3px"}}>
                <Menu inverted>
        <Menu.Item
          name='editorials'
        >
          <Link href="/">Home</Link>
        </Menu.Item>

        <Menu.Item
          name='reviews'
        >
               <Link href="/about">About</Link>

        </Menu.Item>

      </Menu>
        </div>
    )
}
