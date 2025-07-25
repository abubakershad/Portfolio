import SocialLinks from "./SocailLinks";

export default function Footer() {
  return (
    <footer className="bg-gray-900 px-6 py-10">

      <SocialLinks />
      
      <p className="text-sm text-gray-400 text-center">
        &copy; {new Date().getFullYear()} Abu Bakr Shad. All rights reserved.
      </p>
    </footer>
  );
}
