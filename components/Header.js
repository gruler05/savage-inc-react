import Link from "next/link";
import User from "./User";
import Signout from "./Signout";

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <User>
      {({ data: { me } }) => (
        <>
          {me && (
            <>
            <Link href="/">
              <a style={linkStyle}>Home</a>
            </Link>
            <Signout />
            </>
          )}
          {!me && (
            <>
              <Link href="/about">
                <a style={linkStyle}>About</a>
              </Link>
              <Link href="/signup">
                <a style={linkStyle}>Sign Up/ Sign In</a>
              </Link>
            </>
          )}
        </>
      )}
    </User>
  </div>
);

export default Header;
