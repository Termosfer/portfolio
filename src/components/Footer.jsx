const Footer = () => {
    const date = new Date().getFullYear();
  return (
    <div className="d-flex flex-column align-items-center bg-white pt-4">
      <h6 className="mb-3">TOGHRUL AGHAYEV</h6>
      <span className="mb-4">codeaprogram © All CopyRights Reserved {date}</span>
      <span>Privacy Policy</span>
    </div>
  );
};

export default Footer;
