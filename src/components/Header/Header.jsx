// Styles:
import { Logo, NavigationBar, NavigationMenu, UserImage } from "./Header.styles";

const Header = () => {
  return (
    <NavigationBar>
      <Logo src="/images/logo.svg" />
      <NavigationMenu>
        <a>
          <img src="/images/home-icon.svg" alt="Home" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" alt="Search" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="Watch List" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" alt="Originals" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" alt="Movies" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt="Series" />
          <span>SERIES</span>
        </a>
      </NavigationMenu>
      <UserImage src="/images/no-userphoto.jpg" alt="User" />
    </NavigationBar>
  );
};

export default Header;