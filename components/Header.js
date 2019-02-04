import Link from 'next/link'
import User from "./User";
const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
      <User>
        { ({data: { me }}) => {
          if(me) {
            return <p>Welcome {me.name}</p>
          }
          return null;
          } }
      </User>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
        <Link href="/signup">
          <a style={linkStyle}>Sign Up</a>
        </Link>
    </div>
)

export default Header