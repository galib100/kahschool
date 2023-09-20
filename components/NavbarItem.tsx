const NavbarItem = ({ href, text }:any) => {
    return (
      <a
        href={href}
        className="block px-4 py-2 text-purple-400-200 hover:bg-gray-800 transition duration-300"
      >
        {text}
      </a>
    );
  };
  
  export default NavbarItem;
  