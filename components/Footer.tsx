const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6">
        <div className=" mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          <p>কাজী আলাউদ্দীন মাধ্যমিক বিদ্যালয় , ঘুষুড়ী , কালীগঞ্জ , সাতক্ষীরা </p>
          <div className="mt-10">
            <a
              href="/privacy-policy"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Privacy Policy
            </a>
            <span className="mx-2">|</span>
            <a
              href="/"
              className="text-gray-400 hover:text-white transition duration-300 "
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  